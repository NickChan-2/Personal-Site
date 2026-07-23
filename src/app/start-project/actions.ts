"use server";

import { headers } from "next/headers";
import { deliverInquiry } from "@/lib/inquiry/email";
import type { InquiryActionState } from "@/lib/inquiry/types";
import { validateInquiry } from "@/lib/inquiry/validation";

type RateEntry = {
  count: number;
  resetAt: number;
};

const attempts = new Map<string, RateEntry>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 4;

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);

  if (!current || current.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token || token.length > 2048) return false;

  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  if (ip !== "unknown") body.set("remoteip", ip);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const result = (await response.json()) as { success?: boolean };
    return response.ok && result.success === true;
  } catch {
    return false;
  }
}

export async function submitInquiry(
  _previousState: InquiryActionState,
  formData: FormData,
): Promise<InquiryActionState> {
  const id = crypto.randomUUID();
  const honeypot = formData.get("companyWebsite");

  // Bots commonly fill fields hidden from people. Return a normal-looking
  // success so the endpoint does not teach the bot how it was detected.
  if (typeof honeypot === "string" && honeypot.trim()) {
    return {
      id,
      status: "success",
      message: "Thanks! Your inquiry has been received.",
    };
  }

  const result = validateInquiry(formData);
  if (!result.success) {
    return {
      id,
      status: "error",
      message: "A few details need your attention before this can be sent.",
      errors: result.errors,
    };
  }

  const requestHeaders = await headers();
  const forwarded = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip =
    requestHeaders.get("cf-connecting-ip") ??
    forwarded ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      id,
      status: "error",
      message:
        "Too many attempts came from this connection. Please wait ten minutes and try again.",
    };
  }

  const turnstileToken = String(
    formData.get("cf-turnstile-response") ?? "",
  );
  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return {
      id,
      status: "error",
      message: "The security check expired or failed. Please try it again.",
      errors: { turnstile: "Complete the security check before sending." },
    };
  }

  // Preview mode makes the entire interaction testable without sending email.
  // It is intentionally unavailable in production.
  const previewMode =
    process.env.NODE_ENV !== "production" &&
    process.env.INQUIRY_PREVIEW_MODE === "true";

  try {
    if (!previewMode) await deliverInquiry(result.data, id);
  } catch {
    console.error("Inquiry delivery failed.");
    return {
      id,
      status: "error",
      message:
        "Your inquiry could not be delivered just now. Please wait a moment and try again.",
    };
  }

  return {
    id,
    status: "success",
    message:
      "Your inquiry is in. I'll review the details and reply within two business days.",
    firstName: result.data.name.split(/\s+/)[0],
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL,
  };
}

import type { InquiryValues } from "@/lib/inquiry/types";

type ResendEmail = {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function line(label: string, value: string) {
  return `${label}: ${value || "Not provided"}`;
}

function htmlRow(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 12px;color:#526159;border-bottom:1px solid #e4e8e5;vertical-align:top">${escapeHtml(label)}</td>
    <td style="padding:10px 12px;color:#10231a;border-bottom:1px solid #e4e8e5;white-space:pre-wrap">${escapeHtml(value || "Not provided")}</td>
  </tr>`;
}

async function sendEmail(
  apiKey: string,
  email: ResendEmail,
  idempotencyKey: string,
) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(email),
  });

  if (!response.ok) {
    // Do not include the provider response: it can echo message content.
    throw new Error(`Resend returned HTTP ${response.status}.`);
  }
}

// Email HTML stays deliberately simple because inboxes support far less CSS
// than browsers do. A plain-text alternative is sent with every message.
export async function deliverInquiry(
  values: InquiryValues,
  inquiryId: string,
) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("Inquiry email delivery is not configured.");
  }

  const projectType =
    values.projectType === "new-site" ? "New website" : "Website redesign";
  const fields = [
    ["Name", values.name],
    ["Business", values.businessName],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Project type", projectType],
    ["Business and customers", values.businessDescription],
    ["Primary goal", values.primaryGoal],
    ["Existing website", values.existingSite],
    ["Timeline", values.timeline],
    ["Preferred contact", values.preferredContact],
    ["Additional context", values.additionalInfo],
  ];

  await sendEmail(
    apiKey,
    {
      from: fromEmail,
      to: toEmail,
      reply_to: values.email,
      subject: `New website inquiry — ${values.businessName}`,
      text: fields.map(([label, value]) => line(label, value)).join("\n\n"),
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto">
        <p style="color:#167247;font-weight:700;letter-spacing:.08em;text-transform:uppercase">New project inquiry</p>
        <h1 style="color:#08150f;font-size:28px">${escapeHtml(values.businessName)}</h1>
        <table style="width:100%;border-collapse:collapse">${fields
          .map(([label, value]) => htmlRow(label, value))
          .join("")}</table>
      </div>`,
    },
    `${inquiryId}-owner`,
  );

  // The owner notification is the essential delivery. A confirmation problem
  // should not make the prospect resubmit and create a duplicate inquiry.
  try {
    await sendEmail(
      apiKey,
      {
        from: fromEmail,
        to: values.email,
        reply_to: toEmail,
        subject: `I received your website inquiry, ${values.name.split(/\s+/)[0]}`,
        text: `Hi ${values.name.split(/\s+/)[0]},\n\nThanks for telling me about ${values.businessName}. Your project inquiry made it through, and I’ll review it personally before replying.\n\nYou can expect to hear from me within two business days.\n\n— Nick Chan`,
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#26332d;line-height:1.65">
          <p>Hi ${escapeHtml(values.name.split(/\s+/)[0])},</p>
          <p>Thanks for telling me about <strong>${escapeHtml(values.businessName)}</strong>. Your project inquiry made it through, and I’ll review it personally before replying.</p>
          <p>You can expect to hear from me within two business days.</p>
          <p>— Nick Chan</p>
        </div>`,
      },
      `${inquiryId}-confirmation`,
    );
  } catch {
    console.warn("Inquiry received, but the confirmation email did not send.");
  }
}

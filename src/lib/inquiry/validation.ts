import type {
  InquiryField,
  InquiryValues,
} from "@/lib/inquiry/types";

type ValidationResult =
  | { success: true; data: InquiryValues }
  | {
      success: false;
      errors: Partial<Record<InquiryField, string>>;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, field: InquiryField, maxLength: number) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

// Browser validation is useful feedback, but requests can bypass the browser.
// This function is the trusted validation boundary used by the Server Action.
export function validateInquiry(formData: FormData): ValidationResult {
  const values: InquiryValues = {
    name: readText(formData, "name", 100),
    businessName: readText(formData, "businessName", 140),
    email: readText(formData, "email", 254).toLowerCase(),
    phone: readText(formData, "phone", 40),
    projectType: readText(formData, "projectType", 20) as InquiryValues["projectType"],
    businessDescription: readText(formData, "businessDescription", 1200),
    primaryGoal: readText(formData, "primaryGoal", 1200),
    existingSite: readText(formData, "existingSite", 500),
    timeline: readText(formData, "timeline", 80),
    additionalInfo: readText(formData, "additionalInfo", 2000),
    preferredContact: readText(
      formData,
      "preferredContact",
      10,
    ) as InquiryValues["preferredContact"],
  };

  const errors: Partial<Record<InquiryField, string>> = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (values.businessName.length < 2) {
    errors.businessName = "Please enter the business or project name.";
  }
  if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (
    values.phone &&
    !/^[+\d][\d\s().-]{6,38}$/.test(values.phone)
  ) {
    errors.phone = "Enter a valid phone number or leave this blank.";
  }
  if (!["new-site", "redesign"].includes(values.projectType)) {
    errors.projectType = "Choose whether this is a new site or a redesign.";
  }
  if (values.businessDescription.length < 20) {
    errors.businessDescription =
      "Share at least a sentence about the business and its customers.";
  }
  if (values.primaryGoal.length < 15) {
    errors.primaryGoal =
      "Tell me a little more about what the website should accomplish.";
  }
  if (values.existingSite && !isHttpUrl(values.existingSite)) {
    errors.existingSite =
      "Use a full link beginning with http:// or https://.";
  }
  if (!values.timeline) errors.timeline = "Choose a general timeline.";
  if (!["email", "phone"].includes(values.preferredContact)) {
    errors.preferredContact = "Choose how you would like me to respond.";
  }
  if (values.preferredContact === "phone" && !values.phone) {
    errors.phone = "Add a phone number if you prefer a phone response.";
  }

  return Object.keys(errors).length > 0
    ? { success: false, errors }
    : { success: true, data: values };
}

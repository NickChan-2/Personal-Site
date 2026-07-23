// Keeping the form's data shape in one file makes the client form, server
// validation, and email templates agree on every field name.
export type InquiryValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: "new-site" | "redesign";
  businessDescription: string;
  primaryGoal: string;
  existingSite: string;
  timeline: string;
  additionalInfo: string;
  preferredContact: "email" | "phone";
};

export type InquiryField = keyof InquiryValues | "turnstile";

export type InquiryActionState = {
  id: string;
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<InquiryField, string>>;
  firstName?: string;
  bookingUrl?: string;
};

export const initialInquiryState: InquiryActionState = {
  id: "initial",
  status: "idle",
  message: "",
};

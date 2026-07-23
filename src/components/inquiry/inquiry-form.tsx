"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  LoaderCircle,
  RotateCcw,
  Send,
} from "lucide-react";
import { FormEvent, useActionState, useEffect, useRef, useState } from "react";
import { submitInquiry } from "@/app/start-project/actions";
import {
  initialInquiryState,
  type InquiryField,
} from "@/lib/inquiry/types";
import { TurnstileWidget } from "@/components/inquiry/turnstile-widget";

const stepLabels = ["Your business", "The project", "The details"];

const fieldSteps: Partial<Record<InquiryField, number>> = {
  name: 0,
  businessName: 0,
  email: 0,
  phone: 0,
  projectType: 1,
  businessDescription: 1,
  primaryGoal: 1,
  existingSite: 2,
  timeline: 2,
  additionalInfo: 2,
  preferredContact: 2,
  turnstile: 2,
};

type InquiryFormProps = {
  turnstileSiteKey?: string;
};

function ErrorMessage({
  error,
  id,
}: {
  error?: string;
  id: string;
}) {
  return error ? (
    <p className="field-error" id={id} role="alert">
      {error}
    </p>
  ) : null;
}

export function InquiryForm({ turnstileSiteKey }: InquiryFormProps) {
  const [step, setStep] = useState(0);
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const firstField = Object.keys(state.errors)[0] as InquiryField | undefined;
    if (!firstField) return;

    const targetStep = fieldSteps[firstField] ?? 2;
    requestAnimationFrame(() => {
      setStep(targetStep);
      requestAnimationFrame(() => {
        const field = formRef.current?.elements.namedItem(firstField);
        if (field instanceof HTMLElement) field.focus();
        else headingRef.current?.focus();
      });
    });
  }, [state]);

  function goForward() {
    const fieldset = formRef.current?.querySelector<HTMLFieldSetElement>(
      `[data-step="${step}"]`,
    );
    const fields = Array.from(
      fieldset?.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >("input, textarea, select") ?? [],
    );
    const invalid = fields.find((field) => !field.checkValidity());

    if (invalid) {
      invalid.reportValidity();
      invalid.focus();
      return;
    }

    setStep((current) => Math.min(current + 1, stepLabels.length - 1));
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  function goBack() {
    setStep((current) => Math.max(current - 1, 0));
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (step < stepLabels.length - 1) {
      event.preventDefault();
      goForward();
    }
  }

  if (state.status === "success") {
    return (
      <div className="inquiry-success" aria-live="polite">
        <span className="inquiry-success__icon">
          <Check aria-hidden="true" size={25} />
        </span>
        <span>Inquiry received</span>
        <h2>Thanks{state.firstName ? `, ${state.firstName}` : ""}.</h2>
        <p>{state.message}</p>
        {state.bookingUrl ? (
          <a
            className="inquiry-submit-button"
            href={state.bookingUrl}
            rel="noreferrer"
            target="_blank"
          >
            <CalendarCheck aria-hidden="true" size={17} />
            Choose a conversation time
          </a>
        ) : null}
        <Link className="inquiry-reset-link" href="/">
          Back to the homepage
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="inquiry-form"
      noValidate={false}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="inquiry-card__top">
        <div>
          <span>Project fit</span>
          <strong>Three short steps</strong>
        </div>
        <span className="inquiry-card__status">
          Step {step + 1} of {stepLabels.length}
        </span>
      </div>

      <ol className="inquiry-progress" aria-label="Inquiry progress">
        {stepLabels.map((label, index) => (
          <li
            className={index < step ? "is-complete" : ""}
            key={label}
            aria-current={index === step ? "step" : undefined}
          >
            <span>{index < step ? <Check size={13} /> : index + 1}</span>
            <small>{label}</small>
          </li>
        ))}
      </ol>

      <div className="inquiry-form__heading">
        <span>0{step + 1}</span>
        <h2 ref={headingRef} tabIndex={-1}>
          {stepLabels[step]}
        </h2>
      </div>

      <fieldset data-step="0" hidden={step !== 0}>
        <legend className="sr-only">Your business and contact details</legend>
        <div className="form-grid">
          <label className="form-field">
            <span>Your name</span>
            <input
              aria-describedby={state.errors?.name ? "name-error" : undefined}
              aria-invalid={Boolean(state.errors?.name)}
              autoComplete="name"
              maxLength={100}
              name="name"
              placeholder="Nick Chan"
              required
            />
            <ErrorMessage error={state.errors?.name} id="name-error" />
          </label>

          <label className="form-field">
            <span>Business or project name</span>
            <input
              aria-describedby={
                state.errors?.businessName
                  ? "businessName-error"
                  : undefined
              }
              aria-invalid={Boolean(state.errors?.businessName)}
              autoComplete="organization"
              maxLength={140}
              name="businessName"
              placeholder="Northline Contracting"
              required
            />
            <ErrorMessage
              error={state.errors?.businessName}
              id="businessName-error"
            />
          </label>

          <label className="form-field">
            <span>Email address</span>
            <input
              aria-describedby={state.errors?.email ? "email-error" : undefined}
              aria-invalid={Boolean(state.errors?.email)}
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              name="email"
              placeholder="you@business.com"
              required
              type="email"
            />
            <ErrorMessage error={state.errors?.email} id="email-error" />
          </label>

          <label className="form-field">
            <span>
              Phone number <em>Optional</em>
            </span>
            <input
              aria-describedby={state.errors?.phone ? "phone-error" : undefined}
              aria-invalid={Boolean(state.errors?.phone)}
              autoComplete="tel"
              inputMode="tel"
              maxLength={40}
              name="phone"
              placeholder="(605) 555-0123"
              type="tel"
            />
            <ErrorMessage error={state.errors?.phone} id="phone-error" />
          </label>
        </div>
      </fieldset>

      <fieldset data-step="1" hidden={step !== 1}>
        <legend className="sr-only">Your website project</legend>
        <div className="form-field">
          <span>What are we building?</span>
          <div className="choice-grid">
            <label>
              <input name="projectType" required type="radio" value="new-site" />
              <span>
                <strong>A new website</strong>
                Starting fresh or replacing a page that no longer works.
              </span>
            </label>
            <label>
              <input name="projectType" required type="radio" value="redesign" />
              <span>
                <strong>A redesign</strong>
                Improving an existing website and what it accomplishes.
              </span>
            </label>
          </div>
          <ErrorMessage
            error={state.errors?.projectType}
            id="projectType-error"
          />
        </div>

        <label className="form-field">
          <span>What does the business do, and who does it help?</span>
          <textarea
            aria-describedby={
              state.errors?.businessDescription
                ? "businessDescription-error"
                : "businessDescription-help"
            }
            aria-invalid={Boolean(state.errors?.businessDescription)}
            id="businessDescription"
            maxLength={1200}
            name="businessDescription"
            placeholder="A quick, plain-language description is perfect."
            required
            rows={4}
          />
          <small id="businessDescription-help">
            You do not need to write marketing copy here.
          </small>
          <ErrorMessage
            error={state.errors?.businessDescription}
            id="businessDescription-error"
          />
        </label>

        <label className="form-field">
          <span>What should the website help accomplish?</span>
          <textarea
            aria-describedby={
              state.errors?.primaryGoal ? "primaryGoal-error" : undefined
            }
            aria-invalid={Boolean(state.errors?.primaryGoal)}
            maxLength={1200}
            name="primaryGoal"
            placeholder="For example: build trust, explain services, and generate more estimate requests."
            required
            rows={4}
          />
          <ErrorMessage
            error={state.errors?.primaryGoal}
            id="primaryGoal-error"
          />
        </label>
      </fieldset>

      <fieldset data-step="2" hidden={step !== 2}>
        <legend className="sr-only">Project timing and final details</legend>
        <div className="form-grid">
          <label className="form-field">
            <span>
              Existing website <em>Optional</em>
            </span>
            <input
              aria-describedby={
                state.errors?.existingSite ? "existingSite-error" : undefined
              }
              aria-invalid={Boolean(state.errors?.existingSite)}
              inputMode="url"
              maxLength={500}
              name="existingSite"
              placeholder="https://yourbusiness.com"
              type="url"
            />
            <ErrorMessage
              error={state.errors?.existingSite}
              id="existingSite-error"
            />
          </label>

          <label className="form-field">
            <span>Ideal timeline</span>
            <select
              aria-describedby={
                state.errors?.timeline ? "timeline-error" : undefined
              }
              aria-invalid={Boolean(state.errors?.timeline)}
              defaultValue=""
              name="timeline"
              required
            >
              <option disabled value="">
                Choose a general window
              </option>
              <option value="As soon as practical">As soon as practical</option>
              <option value="Within 1–2 months">Within 1–2 months</option>
              <option value="Within 3–4 months">Within 3–4 months</option>
              <option value="Flexible / exploring">Flexible / exploring</option>
            </select>
            <ErrorMessage
              error={state.errors?.timeline}
              id="timeline-error"
            />
          </label>
        </div>

        <div className="form-field">
          <span>How should I follow up?</span>
          <div className="choice-grid choice-grid--compact">
            <label>
              <input
                defaultChecked
                name="preferredContact"
                required
                type="radio"
                value="email"
              />
              <span>
                <strong>Email</strong>
                A written reply with next steps.
              </span>
            </label>
            <label>
              <input
                name="preferredContact"
                required
                type="radio"
                value="phone"
              />
              <span>
                <strong>Phone</strong>
                A quick call to talk it through.
              </span>
            </label>
          </div>
          <ErrorMessage
            error={state.errors?.preferredContact}
            id="preferredContact-error"
          />
        </div>

        <label className="form-field">
          <span>
            Anything else I should know? <em>Optional</em>
          </span>
          <textarea
            maxLength={2000}
            name="additionalInfo"
            placeholder="Useful context, specific features, links you like, or questions you want to discuss."
            rows={4}
          />
        </label>

        <div className="honeypot" aria-hidden="true">
          <label htmlFor="companyWebsite">Leave this field empty</label>
          <input
            autoComplete="off"
            id="companyWebsite"
            name="companyWebsite"
            tabIndex={-1}
          />
        </div>

        <TurnstileWidget
          error={state.errors?.turnstile}
          resetSignal={state.id}
          siteKey={turnstileSiteKey}
        />
      </fieldset>

      <p
        className={`inquiry-form__status ${
          state.status === "error" ? "is-error" : ""
        }`}
        aria-live="polite"
      >
        {state.message}
      </p>

      <div className="inquiry-form__actions">
        {step > 0 ? (
          <button
            className="inquiry-back-button"
            disabled={pending}
            onClick={goBack}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back
          </button>
        ) : (
          <span />
        )}

        {step < stepLabels.length - 1 ? (
          <button
            className="inquiry-submit-button"
            onClick={goForward}
            type="button"
          >
            Continue
            <ArrowRight aria-hidden="true" size={17} />
          </button>
        ) : (
          <button
            className="inquiry-submit-button"
            disabled={pending}
            type="submit"
          >
            {pending ? (
              <>
                <LoaderCircle className="spin" aria-hidden="true" size={17} />
                Sending…
              </>
            ) : state.status === "error" ? (
              <>
                <RotateCcw aria-hidden="true" size={17} />
                Try again
              </>
            ) : (
              <>
                <Send aria-hidden="true" size={17} />
                Send inquiry
              </>
            )}
          </button>
        )}
      </div>

      <p className="inquiry-form__privacy">
        Your information is used only to respond to this project inquiry.{" "}
        <Link href="/privacy">Read the privacy note.</Link>
      </p>
    </form>
  );
}

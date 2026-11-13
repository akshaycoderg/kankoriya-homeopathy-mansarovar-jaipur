"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  appointmentConcerns,
  appointmentWhatsAppUrl,
  clinic,
  formatDateForMessage,
  timeSlots,
} from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type FormState = {
  patientName: string;
  mobileNumber: string;
  concern: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  patientName: "",
  mobileNumber: "",
  concern: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  consent: false,
};

function toLocalIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const noopSubscribe = () => () => {};

/** Client-only "today" that stays hydration-safe by rendering an empty value on the server. */
function useTodayIsoDate() {
  return useSyncExternalStore(
    noopSubscribe,
    () => toLocalIsoDate(new Date()),
    () => "",
  );
}

function useMaxBookingDate() {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      const date = new Date();
      date.setDate(date.getDate() + 90);
      return toLocalIsoDate(date);
    },
    () => "",
  );
}

function isSunday(value: string) {
  if (!value) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && date.getDay() === 0;
}

function isEveningSlot(value: string) {
  const match = value.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
  if (!match) return false;
  const hour = Number(match[1]);
  const meridiem = match[3].toUpperCase();
  return meridiem === "PM" && hour >= 6 && hour !== 12;
}

function validate(values: FormState, minDate: string): Errors {
  const errors: Errors = {};

  if (values.patientName.trim().length < 2) {
    errors.patientName = "Please enter your full name (at least 2 characters).";
  } else if (values.patientName.trim().length > 60) {
    errors.patientName = "Please keep your name under 60 characters.";
  }

  const digits = values.mobileNumber.replace(/[^\d]/g, "");
  const localNumber = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  if (!values.mobileNumber.trim()) {
    errors.mobileNumber = "Please enter a mobile number so the clinic can respond.";
  } else if (!/^[6-9]\d{9}$/.test(localNumber)) {
    errors.mobileNumber = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.concern) {
    errors.concern = "Please choose the concern you would like to discuss.";
  }

  if (!values.preferredDate) {
    errors.preferredDate = "Please choose a preferred date.";
  } else if (values.preferredDate < minDate) {
    errors.preferredDate = "Please choose today or a future date.";
  }

  if (!values.preferredTime) {
    errors.preferredTime = "Please choose a preferred time.";
  } else if (isSunday(values.preferredDate) && isEveningSlot(values.preferredTime)) {
    errors.preferredTime = "Evening slots are not available on Sundays. Please choose a morning time.";
  }

  if (values.message.length > 400) {
    errors.message = "Please keep your message within 400 characters.";
  }

  if (!values.consent) {
    errors.consent = "Please confirm that you understand this is an appointment request.";
  }

  return errors;
}

export function AppointmentForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const minDate = useTodayIsoDate();
  const maxDate = useMaxBookingDate();

  const sundaySelected = useMemo(() => isSunday(values.preferredDate), [values.preferredDate]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    const next = { ...values, [key]: value };
    if (key === "preferredDate" && isSunday(String(value)) && isEveningSlot(next.preferredTime)) {
      next.preferredTime = "";
    }
    setValues(next);
    setResultUrl(null);
    if (submittedOnce) {
      setErrors(validate(next, minDate || "1970-01-01"));
    }
  };

  const handleBlur = (key: keyof FormState) => {
    const nextErrors = validate(values, minDate || "1970-01-01");
    setErrors((current) => ({ ...current, [key]: nextErrors[key] }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedOnce(true);
    const nextErrors = validate(values, minDate || "1970-01-01");
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`appointment-${firstError}`)?.focus();
      return;
    }

    setSubmitting(true);
    const url = appointmentWhatsAppUrl({
      patientName: values.patientName.trim(),
      mobileNumber: values.mobileNumber.trim(),
      concern: values.concern,
      preferredDate: formatDateForMessage(values.preferredDate),
      preferredTime: values.preferredTime,
      message: values.message,
    });

    setResultUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  };

  return (
    <div className="glow-card relative overflow-hidden p-5 sm:p-7 lg:p-8">
      <div
        className="pointer-events-none absolute -right-20 -top-24 size-56 rounded-full bg-mint/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="eyebrow text-[10px]">Appointment Request</p>
        <h3 className="mt-3 font-display text-[1.75rem] font-medium leading-tight text-forest sm:text-[2rem]">
          Share your details
        </h3>
        <p className="mt-2 text-[12px] leading-5 text-muted">
          Submitting opens WhatsApp with your request already written. You can review the message
          before sending it.
        </p>

        {resultUrl ? (
          <div
            role="status"
            className="mt-5 rounded-2xl border border-forest/12 bg-mint/45 p-4"
          >
            <p className="flex items-start gap-2.5 text-[13px] font-semibold text-forest">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-forest-600" aria-hidden="true" />
              Your WhatsApp message is ready
            </p>
            <p className="mt-1.5 pl-6.5 text-[12px] leading-5 text-forest/70">
              If a new tab did not open automatically, use the button below. Your appointment is
              <strong className="font-semibold"> not confirmed</strong> until the clinic replies.
            </p>
            <a
              href={resultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 ml-6.5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon className="size-4" />
              Open WhatsApp again
            </a>
          </div>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="appointment-patientName" className="field-label">
                Full name <span className="text-gold">*</span>
              </label>
              <input
                id="appointment-patientName"
                name="patientName"
                type="text"
                autoComplete="name"
                className="field-input"
                placeholder="Your name"
                value={values.patientName}
                onChange={(event) => update("patientName", event.target.value)}
                onBlur={() => handleBlur("patientName")}
                aria-invalid={Boolean(errors.patientName)}
                aria-describedby={errors.patientName ? "appointment-patientName-error" : undefined}
                required
              />
              {errors.patientName ? (
                <p id="appointment-patientName-error" className="field-error">
                  {errors.patientName}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="appointment-mobileNumber" className="field-label">
                Mobile number <span className="text-gold">*</span>
              </label>
              <input
                id="appointment-mobileNumber"
                name="mobileNumber"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="field-input"
                placeholder="10-digit mobile number"
                value={values.mobileNumber}
                onChange={(event) => update("mobileNumber", event.target.value)}
                onBlur={() => handleBlur("mobileNumber")}
                aria-invalid={Boolean(errors.mobileNumber)}
                aria-describedby={errors.mobileNumber ? "appointment-mobileNumber-error" : undefined}
                required
              />
              {errors.mobileNumber ? (
                <p id="appointment-mobileNumber-error" className="field-error">
                  {errors.mobileNumber}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="appointment-concern" className="field-label">
              Concern to discuss <span className="text-gold">*</span>
            </label>
            <select
              id="appointment-concern"
              name="concern"
              className="field-input"
              value={values.concern}
              onChange={(event) => update("concern", event.target.value)}
              onBlur={() => handleBlur("concern")}
              aria-invalid={Boolean(errors.concern)}
              aria-describedby={errors.concern ? "appointment-concern-error" : undefined}
              required
            >
              <option value="">Select a concern</option>
              {appointmentConcerns.map((concern) => (
                <option key={concern} value={concern}>
                  {concern}
                </option>
              ))}
            </select>
            {errors.concern ? (
              <p id="appointment-concern-error" className="field-error">
                {errors.concern}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="appointment-preferredDate" className="field-label">
                Preferred date <span className="text-gold">*</span>
              </label>
              <input
                id="appointment-preferredDate"
                name="preferredDate"
                type="date"
                className="field-input"
                min={minDate || undefined}
                max={maxDate || undefined}
                value={values.preferredDate}
                onChange={(event) => update("preferredDate", event.target.value)}
                onBlur={() => handleBlur("preferredDate")}
                aria-invalid={Boolean(errors.preferredDate)}
                aria-describedby={
                  errors.preferredDate ? "appointment-preferredDate-error" : "appointment-date-hint"
                }
                required
              />
              {errors.preferredDate ? (
                <p id="appointment-preferredDate-error" className="field-error">
                  {errors.preferredDate}
                </p>
              ) : (
                <p id="appointment-date-hint" className="mt-1.5 text-[10.5px] text-muted/70">
                  Requests can be made up to 90 days ahead.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="appointment-preferredTime" className="field-label">
                Preferred time <span className="text-gold">*</span>
              </label>
              <select
                id="appointment-preferredTime"
                name="preferredTime"
                className="field-input"
                value={values.preferredTime}
                onChange={(event) => update("preferredTime", event.target.value)}
                onBlur={() => handleBlur("preferredTime")}
                aria-invalid={Boolean(errors.preferredTime)}
                aria-describedby={
                  errors.preferredTime ? "appointment-preferredTime-error" : "appointment-time-hint"
                }
                required
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot} disabled={sundaySelected && isEveningSlot(slot)}>
                    {slot}
                    {sundaySelected && isEveningSlot(slot) ? " — not on Sunday" : ""}
                  </option>
                ))}
              </select>
              {errors.preferredTime ? (
                <p id="appointment-preferredTime-error" className="field-error">
                  {errors.preferredTime}
                </p>
              ) : (
                <p id="appointment-time-hint" className="mt-1.5 text-[10.5px] text-muted/70">
                  {sundaySelected
                    ? "Sundays: morning consultations only."
                    : "Mon–Sat: morning and evening slots."}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="appointment-message" className="field-label">
              Anything you would like to add? <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id="appointment-message"
              name="message"
              rows={3}
              maxLength={400}
              className="field-input resize-none"
              placeholder="Briefly describe your concern, how long you have had it, or any accessibility needs."
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              onBlur={() => handleBlur("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "appointment-message-error" : "appointment-message-hint"}
            />
            <div className="mt-1.5 flex items-center justify-between gap-3">
              {errors.message ? (
                <p id="appointment-message-error" className="field-error mt-0">
                  {errors.message}
                </p>
              ) : (
                <p id="appointment-message-hint" className="text-[10.5px] text-muted/70">
                  Please avoid sharing sensitive medical records here.
                </p>
              )}
              <span className="shrink-0 text-[10px] text-muted/60">{values.message.length}/400</span>
            </div>
          </div>

          <div>
            <label htmlFor="appointment-consent" className="flex cursor-pointer items-start gap-3 rounded-xl border border-forest/10 bg-cream/60 p-3.5">
              <input
                id="appointment-consent"
                name="consent"
                type="checkbox"
                className="mt-0.5 size-4 shrink-0 accent-forest"
                checked={values.consent}
                onChange={(event) => update("consent", event.target.checked)}
                onBlur={() => handleBlur("consent")}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? "appointment-consent-error" : undefined}
                required
              />
              <span className="text-[11.5px] leading-5 text-forest/75">
                I understand this is an appointment <strong className="font-semibold">request</strong>,
                not a confirmed booking, and that the clinic will respond to confirm availability.
              </span>
            </label>
            {errors.consent ? (
              <p id="appointment-consent-error" className="field-error">
                {errors.consent}
              </p>
            ) : null}
          </div>

          {Object.keys(errors).length > 0 && submittedOnce && !resultUrl ? (
            <p className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-[11.5px] leading-5 text-red-800" role="alert">
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Please review the highlighted fields before continuing.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-whatsapp w-full py-4 text-[13.5px]"
          >
            {submitting ? (
              <Loader2 className="size-4.5 animate-spin" aria-hidden="true" />
            ) : (
              <WhatsAppIcon className="size-4.5" />
            )}
            Send Request via WhatsApp
            <Send className="size-3.5 opacity-70" aria-hidden="true" />
          </button>

          <p className="text-center text-[10.5px] leading-5 text-muted/80">
            This form does not send or store data on this website. Your message opens in WhatsApp,
            where you can review it before sending. For urgent medical needs, please call{" "}
            <a href={clinic.contact.phoneHref} className="font-semibold text-forest-600 underline">
              {clinic.contact.phoneDisplay}
            </a>{" "}
            or seek emergency care.
          </p>
        </form>
      </div>
    </div>
  );
}

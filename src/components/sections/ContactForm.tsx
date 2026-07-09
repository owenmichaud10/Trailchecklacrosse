"use client";

import { FormEvent, useState } from "react";

type FormData = {
  athleteName: string;
  parentName: string;
  email: string;
  phone: string;
  graduationYear: string;
  highSchool: string;
  primaryPosition: string;
  clubTeam: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  athleteName: "",
  parentName: "",
  email: "",
  phone: "",
  graduationYear: "",
  highSchool: "",
  primaryPosition: "",
  clubTeam: "",
  message: "",
};

const positions = [
  "Attack",
  "Midfield",
  "Defense",
  "Goalie",
  "Face-Off Specialist",
  "Long Stick Midfield",
  "Short Stick Defensive Midfield",
  "Not sure yet",
] as const;

const graduationYears = ["2026", "2027", "2028", "2029", "2030", "2031", "2032"];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.athleteName.trim()) {
    errors.athleteName = "Athlete name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.graduationYear) {
    errors.graduationYear = "Graduation year is required.";
  }

  if (!data.highSchool.trim()) {
    errors.highSchool = "High school is required.";
  }

  if (!data.primaryPosition) {
    errors.primaryPosition = "Primary position is required.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

const inputClassName =
  "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base text-navy placeholder:text-muted/60 transition-colors focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20";

const labelClassName = "mb-2 block text-sm font-medium text-navy";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setSubmitError(
          result.error ??
            "Something went wrong. Please try again or email us directly."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Unable to send your message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-lg shadow-navy/5 sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-bold text-navy">
          Thank you for reaching out.
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          We&apos;ve received your message and will be in touch soon to discuss
          your recruiting journey.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-navy/10 bg-white p-6 shadow-lg shadow-navy/5 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClassName}>
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Tell us about your recruiting goals and any questions you have"
            className={`${inputClassName} resize-y`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="athleteName" className={labelClassName}>
            Athlete Name <span className="text-gold">*</span>
          </label>
          <input
            id="athleteName"
            type="text"
            value={formData.athleteName}
            onChange={(e) => updateField("athleteName", e.target.value)}
            placeholder="Enter athlete's full name"
            className={inputClassName}
            aria-invalid={!!errors.athleteName}
          />
          {errors.athleteName && (
            <p className="mt-1.5 text-sm text-red-600">{errors.athleteName}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="parentName" className={labelClassName}>
            Parent/Guardian Name
          </label>
          <input
            id="parentName"
            type="text"
            value={formData.parentName}
            onChange={(e) => updateField("parentName", e.target.value)}
            placeholder="Enter parent or guardian name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Enter your email address"
            className={inputClassName}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="Enter your phone number"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="graduationYear" className={labelClassName}>
            Graduation Year <span className="text-gold">*</span>
          </label>
          <select
            id="graduationYear"
            value={formData.graduationYear}
            onChange={(e) => updateField("graduationYear", e.target.value)}
            className={`${inputClassName} ${!formData.graduationYear ? "text-muted/60" : ""}`}
            aria-invalid={!!errors.graduationYear}
          >
            <option value="">Select graduation year</option>
            {graduationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.graduationYear && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.graduationYear}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="primaryPosition" className={labelClassName}>
            Primary Position <span className="text-gold">*</span>
          </label>
          <select
            id="primaryPosition"
            value={formData.primaryPosition}
            onChange={(e) => updateField("primaryPosition", e.target.value)}
            className={`${inputClassName} ${!formData.primaryPosition ? "text-muted/60" : ""}`}
            aria-invalid={!!errors.primaryPosition}
          >
            <option value="">Select primary position</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          {errors.primaryPosition && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.primaryPosition}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="highSchool" className={labelClassName}>
            High School <span className="text-gold">*</span>
          </label>
          <input
            id="highSchool"
            type="text"
            value={formData.highSchool}
            onChange={(e) => updateField("highSchool", e.target.value)}
            placeholder="Enter high school name"
            className={inputClassName}
            aria-invalid={!!errors.highSchool}
          />
          {errors.highSchool && (
            <p className="mt-1.5 text-sm text-red-600">{errors.highSchool}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="clubTeam" className={labelClassName}>
            Club Team
          </label>
          <input
            id="clubTeam"
            type="text"
            value={formData.clubTeam}
            onChange={(e) => updateField("clubTeam", e.target.value)}
            placeholder="Enter club team name (if applicable)"
            className={inputClassName}
          />
        </div>
      </div>

      {submitError && (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-full bg-gold px-8 py-4 text-base font-semibold tracking-wide text-navy transition-all duration-300 hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/20 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
      >
        {isSubmitting ? "Sending..." : "Start Your Journey"}
      </button>

      <p className="mt-5 text-center text-sm leading-relaxed text-muted">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="font-medium text-navy underline decoration-gold/40 underline-offset-2 hover:text-gold">
          Privacy Policy
        </a>
        . You&apos;re taking the first step toward building a personalized
        recruiting plan with TrailCheck.
      </p>
    </form>
  );
}

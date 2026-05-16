"use client";

import { FormEvent, useState } from "react";
import { GOOGLE_SHEET_ENDPOINT } from "@/lib/formConfig";

const serviceInterestOptions = [
  "Free Leakage Audit",
  "Controlled Amazon Pilot",
  "Amazon Channel Management",
  "Ecommerce Growth Support",
  "Social & Content Support",
];

const initialFormState = {
  name: "",
  workEmail: "",
  brandName: "",
  website: "",
  serviceInterest: "Free Leakage Audit",
  message: "",
};

export default function AuditRequestForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(
    field: keyof typeof initialFormState,
    value: string,
  ) {
    setFormData((current) => ({ ...current, [field]: value }));

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.name.trim() ||
      !emailPattern.test(formData.workEmail.trim()) ||
      !formData.brandName.trim() ||
      !formData.serviceInterest
    ) {
      setError("Please complete the required fields with a valid work email.");
      setSuccess(false);
      return;
    }

    setIsSubmitting(true);

    try {
      if (GOOGLE_SHEET_ENDPOINT) {
        const response = await fetch(GOOGLE_SHEET_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            formType: "audit-request",
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Audit request submission failed.");
        }
      }

      setFormData(initialFormState);
      setError("");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#030319] py-20 md:py-[110px]" id="free-audit">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A3FFC]">
              FREE AUDIT REQUEST
            </p>
            <h1 className="max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Start with visible marketplace evidence.
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-8 text-[#C9C7E8] md:text-lg">
              Share a few details about your brand and the type of support you
              are considering. This form is ready for a future Google Sheet
              connection through an Apps Script endpoint.
            </p>
            <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#A8A5C8]">
              No custom calendar system is active here. After submitting, use
              the meeting link to book time through the external calendar page.
            </p>
          </div>

          <form
            className="rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[#080826] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[#FFFFFF]">
                Name
                <input
                  className="h-12 rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-4 text-sm font-medium text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(109,53,255,0.62)]"
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your name"
                  type="text"
                  value={formData.name}
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#FFFFFF]">
                Work Email
                <input
                  className="h-12 rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-4 text-sm font-medium text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(109,53,255,0.62)]"
                  onChange={(event) =>
                    updateField("workEmail", event.target.value)
                  }
                  placeholder="you@brand.com"
                  type="email"
                  value={formData.workEmail}
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#FFFFFF]">
                Brand Name
                <input
                  className="h-12 rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-4 text-sm font-medium text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(109,53,255,0.62)]"
                  onChange={(event) =>
                    updateField("brandName", event.target.value)
                  }
                  placeholder="Brand name"
                  type="text"
                  value={formData.brandName}
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#FFFFFF]">
                Website
                <input
                  className="h-12 rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-4 text-sm font-medium text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(109,53,255,0.62)]"
                  onChange={(event) =>
                    updateField("website", event.target.value)
                  }
                  placeholder="https://example.com"
                  type="url"
                  value={formData.website}
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-[#FFFFFF]">
              Service Interest
              <select
                className="h-12 rounded border border-[rgba(255,255,255,0.10)] bg-[#101034] px-4 text-sm font-medium text-[#FFFFFF] outline-none transition-colors focus:border-[rgba(109,53,255,0.62)]"
                onChange={(event) =>
                  updateField("serviceInterest", event.target.value)
                }
                value={formData.serviceInterest}
              >
                {serviceInterestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-[#FFFFFF]">
              Message
              <textarea
                className="min-h-[140px] rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-4 py-3 text-sm font-medium text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(109,53,255,0.62)]"
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                placeholder="Tell us what you want to understand about Amazon, seller risk, or ecommerce growth."
                value={formData.message}
              />
            </label>

            {error ? (
              <p
                aria-live="polite"
                className="mt-4 text-sm font-semibold text-[#D12BFF]"
              >
                {error}
              </p>
            ) : null}

            {success ? (
              <div
                aria-live="polite"
                className="mt-5 rounded-xl border border-[rgba(209,43,255,0.35)] bg-[rgba(109,53,255,0.08)] p-4"
              >
                <p className="text-sm font-bold text-[#FFFFFF]">
                  Thanks {"\u2014"} your request has been received. You can now
                  book a meeting using the calendar link.
                </p>
                <a
                  className="mt-4 inline-flex rounded bg-[#6D35FF] px-5 py-3 text-sm font-extrabold text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                  href="/contact"
                >
                  Book a Meeting
                </a>
              </div>
            ) : null}

            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded bg-[#6D35FF] px-6 py-4 text-sm font-extrabold text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Submitting..." : "Submit Audit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


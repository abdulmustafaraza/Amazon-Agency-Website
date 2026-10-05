"use client";

import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Reveal from "@/components/Reveal";
import HoneypotField, { readHoneypot } from "@/components/HoneypotField";
import { submitLead } from "@/lib/submitLead";
import { useState, type FormEvent } from "react";

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

const nextSteps = [
  "We reply within 24 hours",
  "15-minute intro call to understand your brand",
  "Audit delivered within 5-7 business days",
  "Walkthrough call to review findings",
];

export default function AuditRequestForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof typeof initialFormState, value: string) {
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
      await submitLead("audit-request", {
        ...formData,
        company_url: readHoneypot(event.currentTarget),
      });

      setFormData(initialFormState);
      setError("");
      setSuccess(true);
    } catch {
      setError(
        "Something went wrong and your request was not sent. Please try again or book a meeting directly.",
      );
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="section section-grey" id="free-audit">
        <div className="container split">
          <Reveal className="split-copy">
            <p className="eyebrow">Free audit request</p>
            <h1 className="mt-3">Start with visible marketplace evidence.</h1>
            <p>
              Share a few details about your brand and the type of support you
              are considering. We review every request and reply within 24
              hours.
            </p>
            <p className="mt-3 text-[var(--text-muted)]">
              After submitting, you can book a meeting time straight away
              through our calendar.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="card" noValidate onSubmit={handleSubmit}>
              <HoneypotField />
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="audit-name">
                    Name
                  </label>
                  <input
                    className="field"
                    id="audit-name"
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your name"
                    type="text"
                    value={formData.name}
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="audit-email">
                    Work email
                  </label>
                  <input
                    className="field"
                    id="audit-email"
                    onChange={(event) =>
                      updateField("workEmail", event.target.value)
                    }
                    placeholder="you@brand.com"
                    type="email"
                    value={formData.workEmail}
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="audit-brand">
                    Brand name
                  </label>
                  <input
                    className="field"
                    id="audit-brand"
                    onChange={(event) =>
                      updateField("brandName", event.target.value)
                    }
                    placeholder="Brand name"
                    type="text"
                    value={formData.brandName}
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="audit-website">
                    Website
                  </label>
                  <input
                    className="field"
                    id="audit-website"
                    onChange={(event) =>
                      updateField("website", event.target.value)
                    }
                    placeholder="https://example.com"
                    type="url"
                    value={formData.website}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="field-label" htmlFor="audit-service">
                  Service interest
                </label>
                <select
                  className="field"
                  id="audit-service"
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
              </div>

              <div className="mt-4">
                <label className="field-label" htmlFor="audit-message">
                  Message
                </label>
                <textarea
                  className="field"
                  id="audit-message"
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Tell us what you want to understand about Amazon, seller risk, or ecommerce growth."
                  value={formData.message}
                />
              </div>

              {error ? (
                <p aria-live="polite" className="mt-4 font-medium">
                  {error}
                </p>
              ) : null}

              {success ? (
                <div
                  aria-live="polite"
                  className="mt-4 rounded-[10px] border border-[var(--line)] bg-[var(--bg)] p-4"
                >
                  <p className="font-medium text-[var(--text)]">
                    Thanks {"—"} your request has been received. You can now
                    book a meeting using the calendar link.
                  </p>
                  <CalendlyPopupButton
                    className="btn btn-primary mt-3"
                    text="Book a meeting"
                  />
                </div>
              ) : null}

              <button
                className="btn btn-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Submitting…" : "Submit audit request"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Process</p>
            <h2 className="mt-2">What happens next</h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((step, index) => (
              <Reveal className="card" delay={index * 0.08} key={step}>
                <p className="eyebrow eyebrow-muted">Step {index + 1}</p>
                <h3 className="mt-2">{step}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

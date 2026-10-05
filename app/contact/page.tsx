"use client";

import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HoneypotField, { readHoneypot } from "@/components/HoneypotField";
import Reveal from "@/components/Reveal";
import { submitLead } from "@/lib/submitLead";
import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Free Leakage Audit",
  "Controlled Amazon Pilot",
  "Amazon Channel Management",
  "Ecommerce Growth Support",
  "Social Media & Content Support",
];

const initialFormState = {
  name: "",
  workEmail: "",
  brandName: "",
  website: "",
  serviceInterest: "Free Leakage Audit",
  message: "",
};

export default function ContactPage() {
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

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.workEmail.trim(),
    );

    if (!formData.name.trim() || !isValidEmail || !formData.brandName.trim()) {
      setError("Please complete the required fields with a valid work email.");
      setSuccess(false);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLead("contact", {
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
      <Header />
      <main>
        <section className="section section-grey">
          <div className="site-container">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-3 max-w-[22ch]">
                Start with a focused marketplace conversation.
              </h1>
              <p className="lead mt-4 max-w-[60ch]">
                Tell us what you want to understand about Amazon demand, seller
                risk, brand-control gaps, or ecommerce growth support. We will
                review the context and point you toward the right next step.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section-white">
          <div className="site-container split">
            <Reveal className="split-copy">
              <p className="eyebrow">Request context review</p>
              <h2 className="mt-2">Let us guide you with our expertise.</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <form className="card" noValidate onSubmit={handleSubmit}>
                <HoneypotField />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      className="field"
                      id="contact-name"
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder="Your name"
                      type="text"
                      value={formData.name}
                    />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="contact-email">
                      Work email
                    </label>
                    <input
                      className="field"
                      id="contact-email"
                      onChange={(event) =>
                        updateField("workEmail", event.target.value)
                      }
                      placeholder="you@brand.com"
                      type="email"
                      value={formData.workEmail}
                    />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="contact-brand">
                      Brand name
                    </label>
                    <input
                      className="field"
                      id="contact-brand"
                      onChange={(event) =>
                        updateField("brandName", event.target.value)
                      }
                      placeholder="Brand name"
                      type="text"
                      value={formData.brandName}
                    />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="contact-website">
                      Website
                    </label>
                    <input
                      className="field"
                      id="contact-website"
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
                  <label className="field-label" htmlFor="contact-service">
                    Service interest
                  </label>
                  <select
                    className="field"
                    id="contact-service"
                    onChange={(event) =>
                      updateField("serviceInterest", event.target.value)
                    }
                    value={formData.serviceInterest}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label className="field-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="field"
                    id="contact-message"
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
                      book a meeting using the calendar link below.
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
                  {isSubmitting ? "Submitting…" : "Submit request"}
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <section className="section section-grey">
          <div className="site-container">
            <Reveal className="cta-block">
              <span aria-hidden="true" className="cta-rule" />
              <h2>Book a meeting</h2>
              <p>
                Choose a time that works for you. Available slots are managed
                through our booking calendar.
              </p>
              <CalendlyPopupButton
                className="btn btn-on-dark"
                text="Book a meeting"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

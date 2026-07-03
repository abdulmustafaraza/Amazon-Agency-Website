"use client";

import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { FormEvent, useState } from "react";

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

  function updateField(field: keyof typeof initialFormState, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.workEmail.trim(),
    );

    if (!formData.name.trim() || !isValidEmail || !formData.brandName.trim()) {
      setError("Please complete the required fields with a valid work email.");
      setSuccess(false);
      return;
    }

    setFormData(initialFormState);
    setError("");
    setSuccess(true);
  }

  return (
    <>
      <Header />
      <main className="bg-[#030319]">
        <section className="bg-[radial-gradient(circle_at_78%_16%,rgba(209,43,255,0.18),transparent_30%),#030319] pb-20 pt-[110px]">
          <div className="site-container">
            <Reveal>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A3FFC]">
                CONTACT
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-[820px] text-[clamp(42px,5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#FFFFFF]">
                Start with a focused marketplace conversation.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#C9C7E8] md:text-xl">
                Tell us what you want to understand about Amazon demand, seller
                risk, brand-control gaps, or ecommerce growth support. We will
                review the context and point you toward the right next step.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#030319] py-20 md:py-[110px]">
          <div className="site-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <Reveal>
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A3FFC]">
                  REQUEST CONTEXT REVIEW
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="max-w-[520px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-5xl">
                  Share a few details before the meeting.
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
            <form
              className="rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[#080826] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-8"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#FFFFFF]">
                  Name
                  <input
                    className="h-12 rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-4 text-sm font-medium text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(109,53,255,0.62)]"
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
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
                  {serviceOptions.map((option) => (
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
                    Thanks {"\u2014"} your request has been received. You can
                    now book a meeting using the calendar link below.
                  </p>
                  <CalendlyPopupButton
                    className="mt-4 inline-flex rounded bg-[#6D35FF] px-5 py-3 text-sm font-extrabold text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                    text={"Book a Meeting \u2192"}
                  />
                </div>
              ) : null}

              <button
                className="mt-6 inline-flex w-full items-center justify-center rounded bg-[#6D35FF] px-6 py-4 text-sm font-extrabold text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC] md:w-auto"
                type="submit"
              >
                Submit Request
              </button>
            </form>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#030319] py-20 md:py-[96px]">
          <div className="site-container">
            <Reveal>
            <div className="rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_80%_20%,rgba(209,43,255,0.18),transparent_30%),#080826] p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="max-w-[620px] text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#FFFFFF] md:text-5xl">
                    Book a meeting
                  </h2>
                  <p className="mt-5 max-w-[680px] text-base leading-8 text-[#C9C7E8]">
                    Choose a time that works for you. Available slots are
                    managed through our booking calendar.
                  </p>
                </div>
                <CalendlyPopupButton
                  className="inline-flex justify-center rounded bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                  text={"Book a Meeting \u2192"}
                />
              </div>
            </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


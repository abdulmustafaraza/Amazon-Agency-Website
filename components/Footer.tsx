"use client";

import Link from "next/link";
import { useState } from "react";
import type React from "react";
import { siteContent } from "@/data/siteContent";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Selected Work", href: "/#selected-work" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Free Audit", href: "/contact" },
];

const footerServiceLinks = [
  { label: "Free Leakage Audit", href: "/services#free-leakage-audit" },
  { label: "Controlled Amazon Pilot", href: "/services#controlled-amazon-pilot" },
  {
    label: "Amazon Channel Management",
    href: "/services#amazon-channel-management",
  },
  { label: "Ecommerce Growth Support", href: "/services#ecommerce-growth-support" },
  { label: "Social & Content Support", href: "/services#social-content-support" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Settings", href: "/privacy-policy" },
];

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M3.6 9H20.4M3.6 15H20.4M12 3C14.1 5.35 15.2 8.35 15.2 12C15.2 15.65 14.1 18.65 12 21C9.9 18.65 8.8 15.65 8.8 12C8.8 8.35 9.9 5.35 12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8 7.5L16 4.5M8 16.5L16 19.5M8 12H16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 10C7.65685 10 9 8.65685 9 7C9 5.34315 7.65685 4 6 4C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4.5 7L12 13L19.5 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "Website", href: "/", icon: <GlobeIcon /> },
  { label: "Network", href: "/#selected-work", icon: <NetworkIcon /> },
  { label: "Email", href: `mailto:${siteContent.email}`, icon: <EmailIcon /> },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      setNewsletterError("Please enter a valid work email.");
      setNewsletterSuccess(false);
      return;
    }

    setNewsletterError("");
    setNewsletterSuccess(true);
    setEmail("");

    window.setTimeout(() => {
      setNewsletterSuccess(false);
    }, 4000);
  }

  return (
    <footer
      className="border-t border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_bottom_left,rgba(16,200,255,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(209,43,255,0.32),transparent_34%),radial-gradient(circle_at_bottom,rgba(255,60,191,0.22),transparent_30%),#030319] pb-9 pt-[72px]"
      id="footer"
    >
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.7fr_1fr_1.15fr] lg:gap-16">
          <div>
            <Link
              aria-label="CompanyName home"
              className="inline-flex items-center gap-3"
              href="/"
            >
              <svg
                aria-hidden="true"
                className="h-[34px] w-[30px] text-[#FF3CBF]"
                fill="none"
                viewBox="0 0 24 28"
              >
                <path
                  d="M12 2L21 5.8V13.5C21 19.2 17.2 23.4 12 26C6.8 23.4 3 19.2 3 13.5V5.8L12 2Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                />
              </svg>
              <span className="text-[22px] font-extrabold leading-none text-[#FFFFFF]">
                {siteContent.name}
              </span>
            </Link>

            <p className="mt-[22px] max-w-[280px] text-[15px] font-bold leading-6 text-[#FFFFFF]">
              Marketplace control for brand-led ecommerce operators.
            </p>
            <p className="mt-[18px] max-w-[310px] text-[15px] leading-[1.65] text-[#A8A5C8]">
              Helping DTC ecommerce brands protect demand, reduce marketplace
              leakage, and build controlled Amazon presence through
              intelligence and precision.
            </p>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((item) =>
                item.href.startsWith("mailto:") ? (
                  <a
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[#A8A5C8] transition-colors duration-200 hover:border-[rgba(255,60,191,0.45)] hover:bg-[rgba(255,60,191,0.08)] hover:!text-[#FF3CBF]"
                    href={item.href}
                    key={item.label}
                  >
                    {item.icon}
                  </a>
                ) : (
                  <Link
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[#A8A5C8] transition-colors duration-200 hover:border-[rgba(255,60,191,0.45)] hover:bg-[rgba(255,60,191,0.08)] hover:!text-[#FF3CBF]"
                    href={item.href}
                    key={item.label}
                  >
                    {item.icon}
                  </Link>
                ),
              )}
            </div>
          </div>

          <nav aria-label="Footer explore navigation">
            <h2 className="mb-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF]">
              EXPLORE
            </h2>
            <div className="flex flex-col gap-3">
              {exploreLinks.map((item) => (
                <Link
                  className="text-[15px] text-[#A8A5C8] transition-colors duration-200 hover:!text-[#FF3CBF]"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer services navigation">
            <h2 className="mb-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF]">
              SERVICES
            </h2>
            <div className="flex flex-col gap-3">
              {footerServiceLinks.map((item) => (
                <Link
                  className="text-[15px] text-[#A8A5C8] transition-colors duration-200 hover:!text-[#FF3CBF]"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="mb-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF]">
              STAY UPDATED
            </h2>
            <p className="max-w-[300px] text-[15px] leading-[1.55] text-[#A8A5C8]">
              Get practical notes on marketplace leakage and Amazon demand
              signals.
            </p>
            <form
              aria-label="Stay updated newsletter"
              className="mt-[18px] flex max-w-[300px] gap-2"
              noValidate
              onSubmit={handleNewsletterSubmit}
            >
              <label className="sr-only" htmlFor="footer-email">
                Work email address
              </label>
              <input
                aria-label="Work email address"
                className="h-[46px] min-w-0 flex-1 rounded border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.08)] px-4 text-[15px] text-[#FFFFFF] outline-none transition-colors placeholder:text-[#A8A5C8] focus:border-[rgba(16,200,255,0.62)] focus:shadow-[0_0_18px_rgba(16,200,255,0.18)]"
                id="footer-email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Work email address"
                type="email"
                value={email}
              />
              <button
                aria-label="Join newsletter"
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded bg-[#6D35FF] text-lg font-extrabold text-[#FFFFFF] shadow-[0_0_24px_rgba(209,43,255,0.24)] transition-colors hover:bg-[#8A3FFC]"
                type="submit"
              >
                {"\u2192"}
              </button>
            </form>
            {newsletterError ? (
              <p className="mt-2 text-sm text-[#D12BFF]">{newsletterError}</p>
            ) : null}
            <a
              className="mt-5 inline-flex text-[15px] font-semibold text-[#10C8FF] transition-colors duration-200 hover:!text-[#FF3CBF]"
              href={`mailto:${siteContent.email}`}
            >
              {siteContent.email}
            </a>
          </div>
        </div>

        <div className="mt-[72px] flex flex-col gap-5 border-t border-[rgba(255,255,255,0.08)] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#A8A5C8]">
            {"\u00A9"} 2026 {siteContent.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((item) => (
              <Link
                className="text-[13px] font-bold text-[#A8A5C8] transition-colors duration-200 hover:!text-[#FF3CBF]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {newsletterSuccess ? (
        <div className="fixed bottom-6 right-6 z-[9999] max-w-sm rounded-xl border border-[rgba(16,200,255,0.35)] bg-[#080826] p-4 shadow-[0_0_30px_rgba(209,43,255,0.18)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#FFFFFF]">
                You&apos;re on the list.
              </p>
              <p className="mt-1 text-sm leading-6 text-[#A8A5C8]">
                Thanks for registering. We&apos;ll send practical updates on
                marketplace leakage, Amazon demand signals, and brand-control
                strategy soon.
              </p>
            </div>
            <button
              aria-label="Close newsletter confirmation"
              className="text-[#A8A5C8] transition-colors duration-200 hover:text-[#FF3CBF]"
              onClick={() => setNewsletterSuccess(false)}
              type="button"
            >
              {"\u00D7"}
            </button>
          </div>
        </div>
      ) : null}
    </footer>
  );
}



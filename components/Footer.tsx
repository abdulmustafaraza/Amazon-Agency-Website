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

const footerEmail = "ukasha@scopescaler.com";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.5 3.5H16.5C18.7091 3.5 20.5 5.29086 20.5 7.5V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H7.5C5.29086 20.5 3.5 18.7091 3.5 16.5V7.5C3.5 5.29086 5.29086 3.5 7.5 3.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M17.25 6.75H17.26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48C3 6.58 3.88 7.46 4.98 7.46C6.08 7.46 6.96 6.58 6.96 5.48C6.96 4.38 6.08 3.5 4.98 3.5ZM3.35 8.95H6.61V20H3.35V8.95ZM8.72 8.95H11.84V10.46H11.88C12.31 9.64 13.37 8.77 14.95 8.77C18.24 8.77 18.85 10.94 18.85 13.75V20H15.6V14.46C15.6 13.14 15.58 11.8 13.76 11.8C11.92 11.8 11.64 13.24 11.64 14.72V20H8.72V8.95Z"
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/scopescaler/",
    icon: <InstagramIcon />,
    isExternal: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/scope-scaler-17b0a1411",
    icon: <LinkedInIcon />,
    isExternal: true,
  },
  { label: "Email", href: `mailto:${footerEmail}`, icon: <EmailIcon /> },
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
              aria-label="ScopeScaler home"
              className="inline-flex items-center gap-3"
              href="/"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="ScopeScaler"
                className="h-[32px] w-auto object-contain md:h-[40px]"
                src="/logos/scopescaler-logo.svg"
              />
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
                item.href.startsWith("mailto:") || item.isExternal ? (
                  <a
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[#A8A5C8] transition-colors duration-200 hover:border-[rgba(255,60,191,0.45)] hover:bg-[rgba(255,60,191,0.08)] hover:!text-[#FF3CBF]"
                    href={item.href}
                    key={item.label}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    target={item.isExternal ? "_blank" : undefined}
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
              href={`mailto:${footerEmail}`}
            >
              {footerEmail}
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



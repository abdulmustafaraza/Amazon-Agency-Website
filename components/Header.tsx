"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const navLinkClassName =
  "border-b border-transparent pb-1 text-[#F5F3FF] hover:text-[#FF3CBF] transition-colors duration-200 hover:border-[#FF3CBF]";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-[rgba(255,255,255,0.10)] bg-[#030319]">
      <div className="site-container flex h-[72px] items-center justify-between gap-8">
        <Link
          aria-label="ScopeScaler home"
          className="flex shrink-0 items-center"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="ScopeScaler"
            className="h-[34px] w-auto object-contain md:h-[44px]"
            src="/logos/scopescaler-logo.svg"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-semibold text-[#C9C7E8] lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              className={navLinkClassName}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden shrink-0 rounded bg-[#6D35FF] px-[26px] py-3 text-xs font-[800] uppercase tracking-[0.08em] text-[#FFFFFF] shadow-[0_0_24px_rgba(209,43,255,0.26)] transition-colors duration-200 hover:bg-[#8A3FFC] hover:shadow-[0_0_26px_rgba(209,43,255,0.35)] sm:inline-flex"
            href="/contact"
          >
            FREE LEAKAGE AUDIT
          </Link>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[rgba(255,255,255,0.14)] text-[#F5F3FF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[rgba(255,255,255,0.10)] bg-[#030319] lg:hidden"
          id="mobile-menu"
        >
          <div className="site-container flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                className="flex min-h-[44px] items-center border-b border-[rgba(255,255,255,0.06)] text-base font-semibold text-[#F5F3FF] transition-colors hover:text-[#FF3CBF]"
                href={link.href}
                key={link.label}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-4 mb-2 inline-flex min-h-[44px] items-center justify-center rounded bg-[#6D35FF] px-6 text-sm font-[800] uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Free Leakage Audit
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

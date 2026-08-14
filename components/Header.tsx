"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          aria-label="ScopeScaler home"
          className="header-brand"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          {/* Placeholder mark. The shipped scopescaler-logo.svg is a white +
              gradient wordmark: "Scope" disappears on white and inverting it
              shifts the brand colours. Swap this for a black/monochrome
              re-export when one exists. */}
          <span
            aria-hidden="true"
            className="h-[15px] w-[15px] rounded-[4px] bg-[var(--bg-dark)]"
          />
          <span>ScopeScaler</span>
        </Link>

        <nav aria-label="Primary navigation" className="header-nav">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link className="btn btn-primary" href="/contact">
            Get started
          </Link>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="header-menu-toggle tap w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--text)] transition-colors hover:border-[var(--text)]"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d={menuOpen ? "M6 6L18 18M18 6L6 18" : "M4 7H20M4 12H20M4 17H20"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[var(--line)] bg-white min-[881px]:hidden"
          id="mobile-menu"
        >
          <div className="container flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                className="tap flex items-center border-b border-[var(--line)] text-[0.85rem] text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                href={link.href}
                key={link.label}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="btn btn-primary mt-4 mb-2"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

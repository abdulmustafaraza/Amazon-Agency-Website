"use client";

import AuditSnapshot from "@/components/AuditSnapshot";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

const serviceNav = [
  { label: "Free Leakage Audit", href: "#free-leakage-audit" },
  { label: "Amazon Channel Management", href: "#amazon-channel-management" },
  { label: "Ecommerce Growth Support", href: "#ecommerce-growth-support" },
];

const diagnosticItems = [
  "Amazon search visibility and ranking review",
  "Seller activity and listing risk review",
  "Listing health and compliance signal check",
  "Marketplace gap and margin-risk summary",
];

const managementCards = [
  {
    title: "Catalog Integrity",
    description:
      "Continuous monitoring of ASIN data and SEO keyword relevance to support listing consistency and ranking stability.",
  },
  {
    title: "PPC & DSP Control",
    description:
      "Campaign structure, budget pacing, and efficiency review focused on ACOS, TACoS, and brand-aware customer acquisition.",
  },
  {
    title: "Inventory Planning",
    description:
      "Forecasting and shipment coordination to reduce stock-out risk, overage fees, and avoidable fulfillment issues.",
  },
  {
    title: "Operations Reporting",
    description:
      "A practical reporting view for margin, performance, catalog, and risk signals across active channels.",
  },
];

const ecommerceCards = [
  {
    title: "Shopify Operations",
    description:
      "Support for Shopify storefront updates, product-page clarity, and operational handoffs with marketplace workflows.",
  },
  {
    title: "Product Positioning",
    description:
      "Category and competitor review to clarify product messaging, offer structure, and merchandising priorities.",
  },
  {
    title: "Operational Efficiency Workflows",
    description:
      "Structured research workflows for keyword review, competitor tracking, listing checks, and marketplace audit documentation.",
  },
];

const primaryButton =
  "inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#6D35FF] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_10px_30px_rgba(109,53,255,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8A3FFC] hover:shadow-[0_14px_38px_rgba(109,53,255,0.45)]";

const ghostButton =
  "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[rgba(255,255,255,0.18)] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white";

const sectionHeading =
  "text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl";

const sectionCopy = "mt-5 max-w-[46ch] text-lg leading-8 text-[#C9C7E8]";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3L20 6.5V11.5C20 16.5 16.7 20.4 12 21.5C7.3 20.4 4 16.5 4 11.5V6.5L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.5 12L10.8 14.3L15.5 9.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CatalogIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 5H20V11H4V5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4 15H10V20H4V15Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 15H20V20H14V15Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M3 13H7L9.5 6L14 18L16.5 13H21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 8L12 3.5L20 8V16L12 20.5L4 16V8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4.5 8.5L12 13L19.5 8.5M12 13V20"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 5H20V19H4V5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M4 10H20" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 15L10 13L12 15L16 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M3 5H21V19H3V5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 13H13M7 16H17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PositioningIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 5H19V19H5V5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 15L12 9L16 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 3V6M12 18V21M3 12H6M18 12H21M6.7 6.7L8.8 8.8M15.2 15.2L17.3 17.3M17.3 6.7L15.2 8.8M8.8 15.2L6.7 17.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

const managementIcons = [
  <CatalogIcon key="catalog" />,
  <PulseIcon key="pulse" />,
  <PackageIcon key="package" />,
  <DashboardIcon key="dashboard" />,
];

const ecommerceIcons = [
  <WebsiteIcon key="website" />,
  <PositioningIcon key="positioning" />,
  <AiIcon key="ai" />,
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
      {children}
    </p>
  );
}

function FeatureTile({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="svc-card group h-full">
      <div className="svc-feat-icon">{icon}</div>
      <h3 className="text-xl font-extrabold leading-7 text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#C9C7E8]">{description}</p>
    </article>
  );
}

function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        if (!visible.length) {
          return;
        }

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top
            ? entry
            : closest,
        );

        setActiveId(topMost.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

const navIds = serviceNav.map((item) => item.href.slice(1));

export default function ServicesPageBody() {
  const activeId = useScrollSpy(navIds);

  return (
    <main className="bg-[#080826]" id="top">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#030319] py-[clamp(120px,14vw,180px)] pb-[clamp(64px,8vw,96px)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[58vw] object-cover object-center opacity-30"
          src="/services/services-hero.jpeg.jpeg"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-[radial-gradient(900px_520px_at_85%_0%,rgba(139,92,255,0.22),transparent_60%),radial-gradient(700px_500px_at_100%_55%,rgba(255,60,191,0.14),transparent_55%),radial-gradient(circle_at_50%_60%,rgba(16,200,255,0.10),transparent_45%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,#030319_0%,rgba(3,3,25,0.94)_42%,rgba(3,3,25,0.7)_66%,rgba(3,3,25,0.4)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(3,3,25,0.2)_0%,transparent_45%,#080826_100%)]"
        />

        <div className="site-container relative z-10">
          <Reveal>
            <SectionEyebrow>SERVICES</SectionEyebrow>
            <h1 className="max-w-[17ch] text-[clamp(42px,5vw,68px)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
              Marketplace control and ecommerce growth services for{" "}
              <span className="bg-[linear-gradient(90deg,#10C8FF,#8A3FFC,#FF3CBF)] bg-clip-text text-transparent">
                brand-led operators.
              </span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-lg leading-8 text-[#C9C7E8] md:text-xl">
              Evidence-led support for reviewing Amazon demand, seller activity,
              catalog readiness, and ecommerce operations before scaling channel
              investment.
            </p>
            <a className={`mt-9 ${primaryButton}`} href="#free-leakage-audit">
              Request the Free Leakage Audit
            </a>
          </Reveal>
        </div>
      </section>

      {/* STICKY SUB-NAV STRIP */}
      <nav
        aria-label="Service navigation"
        className="no-scrollbar sticky top-[72px] z-40 overflow-x-auto border-y border-[rgba(255,255,255,0.10)] bg-[rgba(8,8,38,0.85)] backdrop-blur-md"
      >
        <div className="site-container flex flex-nowrap items-center justify-start gap-8 whitespace-nowrap py-1.5 lg:justify-center">
          {serviceNav.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                className={`svc-subnav-link shrink-0 text-[11px] font-extrabold uppercase tracking-[0.12em]${
                  activeId === id ? " is-active" : ""
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* 1 — FREE LEAKAGE AUDIT (text left / card right) */}
      <section
        className="svc-section scroll-mt-[136px] bg-[#080826]"
        id="free-leakage-audit"
      >
        <div className="site-container">
          <Reveal className="svc-row">
            <div className="svc-text">
              <h2 className={sectionHeading}>Free Amazon Leakage Audit</h2>
              <p className={sectionCopy}>
                Review Amazon search visibility, seller activity, listing
                quality, and marketplace gaps before committing more budget to
                channel growth.
              </p>
              <Link className={`mt-8 ${primaryButton}`} href="/contact">
                Request My Free Audit
              </Link>
            </div>

            <div className="svc-media">
              <div className="svc-card">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-extrabold text-white">
                    Diagnostic Scope
                  </h3>
                  <div className="flex gap-3 text-[#10C8FF]">
                    <SearchIcon />
                    <ShieldIcon />
                  </div>
                </div>
                <div className="mt-6">
                  {diagnosticItems.map((item) => (
                    <div
                      className="flex items-start gap-3 border-t border-[rgba(255,255,255,0.08)] py-3.5 text-[#CFD3E6] first:border-t-0"
                      key={item}
                    >
                      <span className="mt-0.5 text-[#10C8FF]">
                        <CheckIcon />
                      </span>
                      <p className="text-base leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — SAMPLE DELIVERABLE (card left / text right) — dark report card */}
      <section className="svc-section bg-[#0C0C26]">
        <div className="site-container">
          <Reveal className="svc-row svc-row-reverse">
            <div className="svc-text">
              <SectionEyebrow>AUDIT PREVIEW</SectionEyebrow>
              <h2 className={sectionHeading}>Sample audit deliverable</h2>
              <p className={sectionCopy}>
                Before deeper marketplace work begins, a focused audit can show
                where branded demand, generic listings, competitor activity, or
                seller risk may affect channel control.
              </p>
            </div>

            <div className="svc-media">
              <AuditSnapshot />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — AMAZON CHANNEL MANAGEMENT (text left / 2x2 cards right) */}
      <section
        className="svc-section relative scroll-mt-[136px] overflow-hidden bg-[#080826]"
        id="amazon-channel-management"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[0.15]"
          src="/backgrounds/problem-wave-bg.jpeg"
        />
        {/* Dark navy wash — keeps the section dark and mutes the mesh most on
            the right, behind the feature cards, for legibility. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(8,8,38,0.55)_0%,rgba(8,8,38,0.80)_55%,rgba(8,8,38,0.94)_100%)]"
        />
        <div className="site-container relative z-10">
          <Reveal className="svc-row">
            <div className="svc-text">
              <SectionEyebrow>DAY-TO-DAY OPERATIONS</SectionEyebrow>
              <h2 className={sectionHeading}>Amazon Channel Management</h2>
              <p className={sectionCopy}>
                Ongoing support for established brands that need consistent
                channel performance across catalog management, advertising,
                inventory planning, and marketplace reporting.
              </p>
            </div>

            <div className="svc-media">
              <div className="grid gap-4 sm:grid-cols-2">
                {managementCards.map((card, index) => (
                  <FeatureTile
                    description={card.description}
                    icon={managementIcons[index]}
                    key={card.title}
                    title={card.title}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 — ECOMMERCE GROWTH SUPPORT (cards left / text right) */}
      <section
        className="svc-section scroll-mt-[136px] bg-[#0C0C26]"
        id="ecommerce-growth-support"
      >
        <div className="site-container">
          <Reveal className="svc-row svc-row-reverse">
            <div className="svc-text">
              <SectionEyebrow>BEYOND A MARKETPLACE</SectionEyebrow>
              <h2 className={sectionHeading}>Ecommerce Growth Support</h2>
              <p className={sectionCopy}>
                Support backend ecommerce workflows across Amazon, Shopify,
                Sellercloud, and multi-channel catalog systems, with product
                positioning tied to marketplace evidence.
              </p>
            </div>

            <div className="svc-media">
              <div className="grid gap-4">
                {ecommerceCards.map((card, index) => (
                  <FeatureTile
                    description={card.description}
                    icon={ecommerceIcons[index]}
                    key={card.title}
                    title={card.title}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        className="svc-section border-t border-[rgba(255,255,255,0.10)] bg-[#080826]"
        id="free-audit"
      >
        <div className="site-container text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[18ch] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Start with marketplace evidence before choosing a service.
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link className={primaryButton} href="/contact">
                Request the Free Leakage Audit
              </Link>
              <Link className={ghostButton} href="/#selected-work">
                View Selected Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

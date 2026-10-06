"use client";

import Reveal from "@/components/Reveal";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <main id="top">
      {/* HERO */}
      <section className="section section-grey">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-3 max-w-[22ch]">
              Marketplace control and ecommerce growth services for brand-led
              operators.
            </h1>
            <p className="lead mt-4 max-w-[56ch]">
              Evidence-led support for reviewing Amazon demand, seller activity,
              catalog readiness, and ecommerce operations before scaling channel
              investment.
            </p>
            <a className="btn btn-primary mt-6" href="#free-leakage-audit">
              Request the free leakage audit
            </a>
          </Reveal>
        </div>
      </section>

      {/* STICKY SUB-NAV */}
      <nav
        aria-label="Service navigation"
        className="no-scrollbar sticky top-[60px] z-40 overflow-x-auto border-y border-[var(--line)] bg-white/85 backdrop-blur-md"
      >
        {/* Auto margins centre the links when they fit, and collapse when the
            row overflows so the first link stays reachable by scrolling. */}
        <div className="site-container flex flex-nowrap items-center gap-6 whitespace-nowrap [&>a:first-child]:ml-auto [&>a:last-child]:mr-auto">
          {serviceNav.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeId === id;

            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={`tap flex shrink-0 items-center text-[0.76rem] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--text-2)] hover:text-[var(--text)]"
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

      {/* 1 — FREE LEAKAGE AUDIT */}
      <section
        className="section section-white scroll-mt-[112px]"
        id="free-leakage-audit"
      >
        <div className="site-container split">
          <Reveal className="split-copy">
            <h2>Free Amazon Leakage Audit</h2>
            <p>
              Review Amazon search visibility, seller activity, listing quality,
              and marketplace gaps before committing more budget to channel
              growth.
            </p>
            <Link className="btn btn-primary mt-6" href="/contact">
              Request my free audit
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card">
              <h3>Diagnostic scope</h3>
              <div className="mt-3">
                {diagnosticItems.map((item) => (
                  <div
                    className="border-t border-[var(--line)] py-3 first:border-t-0"
                    key={item}
                  >
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — AMAZON CHANNEL MANAGEMENT */}
      <section
        className="section section-grey scroll-mt-[112px]"
        id="amazon-channel-management"
      >
        <div className="site-container split">
          <Reveal className="split-copy">
            <p className="eyebrow">Day-to-day operations</p>
            <h2 className="mt-2">Amazon Channel Management</h2>
            <p>
              Ongoing support for established brands that need consistent
              channel performance across catalog management, advertising,
              inventory planning, and marketplace reporting.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {managementCards.map((card) => (
                <article className="card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — ECOMMERCE GROWTH SUPPORT */}
      <section
        className="section section-white scroll-mt-[112px]"
        id="ecommerce-growth-support"
      >
        <div className="site-container split split-reverse">
          <Reveal className="split-copy">
            <p className="eyebrow">Beyond a marketplace</p>
            <h2 className="mt-2">Ecommerce Growth Support</h2>
            <p>
              Support backend ecommerce workflows across Amazon, Shopify,
              Sellercloud, and multi-channel catalog systems, with product
              positioning tied to marketplace evidence.
            </p>
          </Reveal>

          <Reveal className="split-media" delay={0.08}>
            <div className="grid gap-4">
              {ecommerceCards.map((card) => (
                <article className="card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section section-grey" id="free-audit">
        <div className="site-container">
          <Reveal className="cta-block">
            <span aria-hidden="true" className="cta-rule" />
            <h2>Start with marketplace evidence before choosing a service.</h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link className="btn btn-on-dark" href="/contact">
                Request the free leakage audit
              </Link>
              <Link className="btn btn-on-dark-outline" href="/#selected-work">
                View selected work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

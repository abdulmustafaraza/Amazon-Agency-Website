import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const pricingTabs = [
  { label: "Free Leakage Audit", href: "#free-leakage-audit" },
  { label: "Controlled Amazon Pilot", href: "#controlled-amazon-pilot" },
  { label: "Amazon Channel Management", href: "#amazon-channel-management" },
  { label: "Ecommerce Growth Support", href: "#ecommerce-growth-support" },
  { label: "Social Media & Content Support", href: "#social-content-support" },
];

const pricingModels = [
  {
    id: "free-leakage-audit",
    topLabel: "ENTRY POINT",
    serviceLabel: "FREE LEAKAGE AUDIT",
    title: "Free",
    bestFor:
      "Best for: Brands that want to understand what Amazon is already showing their customers before committing to a channel plan.",
    includes: [
      "Brand-name and product-name search review",
      "Unauthorized seller and listing visibility check",
      "Generic competitor and marketplace leakage scan",
      "Screenshots and recommended next steps",
    ],
    cta: "Request Free Audit",
    href: "/contact",
    active: false,
  },
  {
    id: "controlled-amazon-pilot",
    topLabel: "DEMAND VALIDATION",
    serviceLabel: "CONTROLLED AMAZON PILOT",
    title: "Custom Pilot",
    bestFor:
      "Best for: Brands that want to test Amazon carefully without opening the door to channel chaos.",
    includes: [
      "1-2 SKU pilot planning",
      "Listing setup and content support",
      "Keyword research",
      "Capped PPC test",
      "Weekly reporting focused on demand signals and learnings",
    ],
    cta: "Request Pilot Scope",
    href: "/contact",
    active: true,
  },
  {
    id: "amazon-channel-management",
    topLabel: "ONGOING CONTROL",
    serviceLabel: "AMAZON CHANNEL MANAGEMENT",
    title: "Monthly Retainer",
    bestFor:
      "Best for: Brands ready to manage Amazon as a serious protection and growth channel.",
    includes: [
      "Listing and catalog optimization",
      "PPC management and reporting",
      "Inventory coordination",
      "Review, content, and marketplace issue monitoring",
      "Operating cadence and performance review",
    ],
    cta: "Discuss Management",
    href: "/contact",
    active: false,
  },
  {
    id: "ecommerce-growth-support",
    topLabel: "BEYOND AMAZON",
    serviceLabel: "ECOMMERCE GROWTH SUPPORT",
    title: "Custom Retainer",
    bestFor:
      "Best for: Brands that need support across Shopify, ecommerce optimization, product messaging, AI workflows, or chatbot systems.",
    includes: [
      "Shopify and ecommerce optimization support",
      "Product positioning and conversion copy",
      "AI content workflows",
      "Chatbot flow support",
      "Ecommerce strategy support",
    ],
    cta: "Scope Ecommerce Support",
    href: "/contact",
    active: false,
  },
  {
    id: "social-content-support",
    topLabel: "ECOMMERCE CONTENT",
    serviceLabel: "SOCIAL MEDIA & CONTENT SUPPORT",
    title: "Custom Scope",
    bestFor:
      "Best for: Brands that want content tied to ecommerce performance, product storytelling, and customer trust.",
    includes: [
      "Social content planning",
      "Product storytelling",
      "Campaign creative direction",
      "Content systems for ecommerce growth",
    ],
    cta: "Discuss Content Scope",
    href: "/contact",
    active: false,
  },
];

const scopeFactors = [
  {
    title: "Product Scope",
    text: "The number of SKUs needing protection and the volume of inventory flow across channels.",
  },
  {
    title: "Market Complexity",
    text: "The intensity of unauthorized competition and the complexity of your current distribution network.",
  },
  {
    title: "Support Level",
    text: "From periodic strategic oversight to daily tactical management of listings and operations.",
  },
  {
    title: "Content & Ops",
    text: "Creative production requirements and the level of operational automation needed for scale.",
  },
];

const decisionBars = [
  {
    label: "If you need visibility:",
    text: "Identify where your revenue is leaking right now.",
    cta: "Start with Free Leakage Audit",
  },
  {
    label: "If you need quick wins:",
    text: "Test our effectiveness on your highest-risk SKUs.",
    cta: "Controlled Amazon Pilot",
  },
  {
    label: "If you need total control:",
    text: "Offload the heavy lifting to our expert control room.",
    cta: "Amazon Channel Management",
  },
];

const clarifiers = [
  {
    question: "Fixed Pricing?",
    answer:
      "While we have base retainer levels, each plan is tailored to the complexity of your product catalog.",
  },
  {
    question: "Free Audit Terms?",
    answer:
      "The audit is zero-commitment. We provide useful data you can keep, regardless of whether you hire us.",
  },
  {
    question: "Sales Guarantees?",
    answer:
      "We focus on brand control and margin protection. Revenue growth depends on market conditions, execution, and channel fit.",
  },
  {
    question: "Expansion?",
    answer:
      "You can scale your management tier up or down within a 30-day notice as your marketplace footprint evolves.",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
      {children}
    </p>
  );
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7 text-[#6D35FF]"
      fill="none"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

function ProductScopeIcon() {
  return (
    <IconWrap>
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
    </IconWrap>
  );
}

function MarketComplexityIcon() {
  return (
    <IconWrap>
      <path
        d="M6 6L18 12M18 12L6 18M18 12H20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8ZM6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20ZM20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </IconWrap>
  );
}

function SupportLevelIcon() {
  return (
    <IconWrap>
      <path
        d="M5 7H19M5 12H19M5 17H19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M9 7C9 7.82843 8.32843 8.5 7.5 8.5C6.67157 8.5 6 7.82843 6 7M18 12C18 12.8284 17.3284 13.5 16.5 13.5C15.6716 13.5 15 12.8284 15 12M11 17C11 17.8284 10.3284 18.5 9.5 18.5C8.67157 18.5 8 17.8284 8 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </IconWrap>
  );
}

function ContentOpsIcon() {
  return (
    <IconWrap>
      <path
        d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 15L18.7 17.3L21 18L18.7 18.7L18 21L17.3 18.7L15 18L17.3 17.3L18 15Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </IconWrap>
  );
}

const scopeFactorIcons = [
  <ProductScopeIcon key="product" />,
  <MarketComplexityIcon key="market" />,
  <SupportLevelIcon key="support" />,
  <ContentOpsIcon key="content" />,
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-[#030319]">
        <section className="bg-[radial-gradient(circle_at_78%_18%,rgba(36,124,255,0.22),transparent_30%),radial-gradient(circle_at_70%_76%,rgba(255,60,191,0.20),transparent_34%),linear-gradient(180deg,#030319_0%,#080826_100%)] pb-20 pt-24">
          <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <Eyebrow>ENGAGEMENT MODELS</Eyebrow>
              <h1 className="max-w-[780px] text-[clamp(42px,5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#FFFFFF]">
                Choose the right level of marketplace control.
              </h1>
              <p className="mt-8 max-w-[680px] text-lg leading-8 text-[#C9C7E8] md:text-xl">
                Scope is matched to your marketplace risk, so every dollar works
                against leakage instead of overhead.
              </p>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-lg border border-[rgba(255,255,255,0.10)] bg-[#080826] shadow-[0_28px_80px_rgba(0,0,0,0.30)]">
              <Image
                alt="Marketplace control pricing visual"
                className="object-cover object-center opacity-[0.78] saturate-[0.85] contrast-[0.95] brightness-[0.78]"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                src="/services/services-hero.jpeg.jpeg"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,25,0.58),rgba(3,3,25,0.25)),linear-gradient(180deg,transparent_35%,rgba(3,3,25,0.84)_100%)]" />
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(255,255,255,0.10)] bg-[#080826] py-5">
          <div className="site-container flex flex-wrap justify-center gap-3">
            {pricingTabs.map((tab) => {
              const isActive = tab.href === "#controlled-amazon-pilot";

              return (
                <a
                  className={`rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.10em] transition-colors duration-200 ${
                    isActive
                      ? "border-[#6D35FF] bg-[#6D35FF] text-[#FFFFFF]"
                      : "border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] text-[#C9C7E8] hover:border-[rgba(255,60,191,0.45)] hover:text-[#FF3CBF]"
                  }`}
                  href={tab.href}
                  key={tab.href}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>
        </section>

        <section className="bg-[#080826] pb-11 pt-16">
          <div className="site-container">
            <p className="mx-auto max-w-[900px] text-center text-[15px] leading-[1.7] text-[#C9C7E8]">
              Pricing depends on product scope, marketplace complexity, support
              level, and the amount of ongoing execution required. Pricing is
              based on the level of control, testing, and support your brand
              needs. Start with the service that matches your current stage. If
              you are unsure, begin with the Free Leakage Audit and use the
              findings to decide the right next step.
            </p>
          </div>
        </section>

        <section className="bg-[#080826] pb-24">
          <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {pricingModels.map((model) => (
              <article
                className={`flex min-h-[470px] flex-col rounded-[14px] border p-6 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#D12BFF] hover:bg-[#101034] hover:shadow-[0_24px_80px_rgba(209,43,255,0.18)] ${
                  model.active
                    ? "border-[#D12BFF] bg-[radial-gradient(circle_at_50%_0%,rgba(209,43,255,0.20),transparent_44%),#101034]"
                    : "border-[rgba(255,255,255,0.10)] bg-[#101034]"
                }`}
                id={model.id}
                key={model.id}
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6D35FF]">
                  {model.topLabel}
                </p>
                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C9C7E8]">
                  {model.serviceLabel}
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#FFFFFF]">
                  {model.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#C9C7E8]">
                  {model.bestFor}
                </p>
                <div className="mt-6 grid gap-3">
                  {model.includes.map((item) => (
                    <div className="flex gap-3" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#6D35FF]" />
                      <p className="text-sm leading-6 text-[#C9C7E8]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  className="mt-auto inline-flex justify-center rounded bg-[#6D35FF] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                  href={model.href}
                >
                  {model.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#101034] py-24 md:py-[110px]">
          <div className="site-container">
            <Eyebrow>SCOPE FACTORS</Eyebrow>
            <h2 className="max-w-[840px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Pricing depends on what needs to be controlled, tested, or
              managed.
            </h2>
            <p className="mt-6 max-w-[720px] text-lg leading-8 text-[#C9C7E8]">
              We do not believe in one-size-fits-all. Your precision model is
              built on four pillars.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {scopeFactors.map((factor, index) => (
                <article
                  className="rounded-[12px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-7 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#6D35FF] hover:bg-[#101034]"
                  key={factor.title}
                >
                  {scopeFactorIcons[index]}
                  <h3 className="mt-8 text-xl font-extrabold text-[#FFFFFF]">
                    {factor.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">
                    {factor.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080826] py-24 md:py-[110px]">
          <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <h2 className="max-w-[560px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                Start small when the right move is not clear.
              </h2>
              <p className="mt-6 max-w-[540px] text-lg leading-8 text-[#C9C7E8]">
                We prioritize clarity over contracts. Use our decision guide to
                find your immediate strategic entry point.
              </p>
            </div>

            <div className="grid gap-4">
              {decisionBars.map((bar) => (
                <article
                  className="grid gap-5 rounded-[12px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-5 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#6D35FF] hover:bg-[#101034] md:grid-cols-[1fr_auto] md:items-center"
                  key={bar.label}
                >
                  <div>
                    <h3 className="text-lg font-extrabold text-[#FFFFFF]">
                      {bar.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#C9C7E8]">
                      {bar.text}
                    </p>
                  </div>
                  <Link
                    className="inline-flex justify-center rounded border border-[rgba(209,43,255,0.35)] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#6D35FF] transition-colors hover:bg-[#6D35FF] hover:text-[#FFFFFF]"
                    href="/contact"
                  >
                    {bar.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080826] py-20 md:py-[96px]">
          <div className="site-container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {clarifiers.map((item) => (
              <div key={item.question}>
                <h3 className="text-xl font-extrabold text-[#FFFFFF]">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#030319] py-24 md:py-[96px]">
          <div className="site-container text-center">
            <h2 className="mx-auto max-w-[860px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Start with the service that matches your current marketplace risk.
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex justify-center rounded bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                href="/contact"
              >
                Request the Free Leakage Audit
              </Link>
              <Link
                className="inline-flex justify-center rounded border border-[rgba(255,255,255,0.18)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                href="/services"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



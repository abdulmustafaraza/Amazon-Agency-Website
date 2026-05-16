import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const serviceNav = [
  { label: "Free Leakage Audit", href: "#free-leakage-audit" },
  { label: "Controlled Amazon Pilot", href: "#controlled-amazon-pilot" },
  { label: "Amazon Channel Management", href: "#amazon-channel-management" },
  { label: "Ecommerce Growth Support", href: "#ecommerce-growth-support" },
  { label: "Social Media & Content", href: "#social-content-support" },
];

const diagnosticItems = [
  "Search visibility and organic ranking review",
  "Competitive unauthorized seller detection",
  "Listing health and compliance analysis",
  "Hidden margin erosion reporting",
];

const pilotSteps = [
  "SKU Selection & Compliance",
  "Listing Construction & SEO",
  "Capped PPC Deployment",
  "Performance Review",
];

const managementCards = [
  {
    title: "Catalog Integrity",
    description:
      "Continuous monitoring of ASIN data and SEO keyword relevance to secure perpetual ranking stability.",
  },
  {
    title: "PPC & DSP Authority",
    description:
      "Data-driven advertising strategies focused on TACoS, ACOS efficiency, and next-era brand acquisition.",
  },
  {
    title: "Inventory Logic",
    description:
      "Strategic forecasting and shipment management to avoid stock-outs and expensive overage fees.",
  },
  {
    title: "Real-time Dashboard",
    description:
      "A custom operations board showing live margins, performance, and risk metrics across all markets.",
  },
];

const ecommerceCards = [
  {
    title: "Shopify Architecting",
    description:
      "Building conversion-led storefronts that integrate seamlessly with your marketplace and retention stacks.",
  },
  {
    title: "Product Positioning",
    description:
      "Strategic differentiation mapping to ensure your brand stands out in saturated categories.",
  },
  {
    title: "AI Operations",
    description:
      "Leveraging Large Language Models to automate customer service, content generation, and catalog updates.",
  },
];

const navigatorCards = [
  {
    title: "Unsure of Loss",
    description: "Your organic search ranking has lost data to prove it or fix it.",
    recommendation: "Free Leakage Audit",
  },
  {
    title: "Testing Demand",
    description:
      "You need a low brand-risk pilot to see if paid traffic validates fit.",
    recommendation: "Controlled Pilot",
  },
  {
    title: "Existing Strategy",
    description:
      "You're already on Amazon but performance lacks precision or control.",
    recommendation: "Channel Management",
  },
  {
    title: "System Support",
    description:
      "You need campaigns, Shopify builds, or AI workflows to scale efficiency.",
    recommendation: "Ecommerce Growth",
  },
];

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

function StepsIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 6H8M16 18H19M8 6C12 6 12 18 16 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M5 8.5C6.38071 8.5 7.5 7.38071 7.5 6C7.5 4.61929 6.38071 3.5 5 3.5C3.61929 3.5 2.5 4.61929 2.5 6C2.5 7.38071 3.61929 8.5 5 8.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 20.5C20.3807 20.5 21.5 19.3807 21.5 18C21.5 16.6193 20.3807 15.5 19 15.5C17.6193 15.5 16.5 16.6193 16.5 18C16.5 19.3807 17.6193 20.5 19 20.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 17V20M9.33331 13V20M14.6667 9V20M20 4V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CatalogIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
    >
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

function ClapperIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[34px] w-[34px]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 8H20V19H4V8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4 8L7 3H11L8 8M10 8L13 3H17L14 8M16 8L19 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10 12.5L15 15.5L10 18.5V12.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[34px] w-[34px]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 15L18.8 17.2L21 18L18.8 18.8L18 21L17.2 18.8L15 18L17.2 17.2L18 15Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
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
    <article className="group rounded-[12px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#6D35FF] hover:bg-[#101034] hover:shadow-[0_24px_80px_rgba(209,43,255,0.18)]">
      <div className="text-[#6D35FF]">{icon}</div>
      <h3 className="mt-6 text-xl font-extrabold leading-7 text-[#FFFFFF]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">{description}</p>
    </article>
  );
}

function SocialFeatureCard({
  icon,
  title,
  offsetClass,
}: {
  icon: ReactNode;
  title: string;
  offsetClass: string;
}) {
  return (
    <div
      className={`flex h-[220px] flex-col items-center justify-center border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.055)] p-8 text-center text-[#D12BFF] transition-all duration-300 hover:border-[rgba(209,43,255,0.45)] hover:bg-[rgba(209,43,255,0.08)] hover:shadow-[0_0_28px_rgba(209,43,255,0.10)] md:h-[410px] ${offsetClass}`}
    >
      {icon}
      <h3 className="mt-[22px] max-w-[230px] text-lg font-extrabold leading-[1.35] text-[#C9C7E8]">
        {title}
      </h3>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#080826]" id="top">
        <section className="relative min-h-[760px] overflow-hidden bg-[#030319]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[62vw] object-cover object-center opacity-65"
            src="/services/services-hero.jpeg.jpeg"
          />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(16,200,255,0.45),transparent_30%),radial-gradient(circle_at_72%_70%,rgba(255,60,191,0.36),transparent_35%),radial-gradient(circle_at_45%_55%,rgba(109,53,255,0.44),transparent_42%),linear-gradient(135deg,#030319_0%,#080826_38%,rgba(109,53,255,0.46)_72%,rgba(255,60,191,0.34)_100%)] opacity-70" />
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#030319_0%,rgba(3,3,25,0.92)_34%,rgba(3,3,25,0.65)_58%,rgba(3,3,25,0.18)_100%)]" />
          <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(3,3,25,0.20)_0%,rgba(3,3,25,0.12)_55%,#030319_100%)]" />

          <div className="site-container relative z-10 flex min-h-[760px] items-center">
            <div className="max-w-[760px]">
              <SectionEyebrow>SERVICES</SectionEyebrow>
              <h1 className="max-w-[760px] text-[clamp(52px,5.6vw,84px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#FFFFFF]">
                Marketplace control and ecommerce growth services for
                brand-led operators.
              </h1>
              <p className="mt-8 max-w-[660px] text-lg leading-8 text-[#C9C7E8] md:text-xl">
                Evidence-led strategic support designed to regain channel
                authority, optimize sell-in economics, and scale your brand
                across fragmented marketplace ecosystems.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(255,255,255,0.10)] bg-[#080826] py-5">
          <div className="site-container">
            <nav
              aria-label="Service navigation"
              className="no-scrollbar mx-auto flex w-full max-w-[1180px] flex-nowrap items-center justify-start gap-5 overflow-x-auto px-6 whitespace-nowrap lg:justify-center lg:overflow-hidden"
            >
              {serviceNav.map((item) => (
                <a
                  className="shrink-0 whitespace-nowrap border-b border-transparent pb-1 text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#F5F3FF] transition-colors duration-200 hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section
          className="scroll-mt-28 bg-[#080826] py-20 md:py-[110px]"
          id="free-leakage-audit"
        >
          <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                Free Amazon Leakage Audit
              </h2>
              <p className="mt-6 max-w-[610px] text-lg leading-8 text-[#C9C7E8]">
                Our entry-point diagnostic. We identify exactly where your
                revenue is leaking {"\u2014"} from unauthorized sellers to
                inefficient listing syntax. Gain 100% visibility before
                spending a dollar on growth.
              </p>
              <a
                className="mt-9 inline-flex bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                href="/contact"
              >
                Request My Free Audit
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[#080826] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-10">
              <Image
                alt="Free leakage audit diagnostic texture"
                className="object-cover object-center opacity-[0.26] saturate-[0.85] contrast-[0.95] brightness-[0.78]"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/services/services-hero.jpeg.jpeg"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,11,42,0.70),rgba(3,3,25,0.92)),radial-gradient(circle_at_82%_14%,rgba(109,53,255,0.12),transparent_30%)]" />
              <div className="relative z-10 flex items-start justify-between gap-6">
                <h3 className="text-2xl font-extrabold text-[#FFFFFF]">
                  Diagnostic Scope
                </h3>
                <div className="flex gap-3 text-[#10C8FF]">
                  <SearchIcon />
                  <ShieldIcon />
                </div>
              </div>
              <div className="relative z-10 mt-8 grid gap-5">
                {diagnosticItems.map((item) => (
                  <div className="flex gap-4" key={item}>
                    <span className="mt-1 text-[#10C8FF]">
                      <CheckIcon />
                    </span>
                    <p className="text-base leading-7 text-[#C9C7E8]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-28 bg-[#080826] py-20 md:py-[110px]"
          id="controlled-amazon-pilot"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-7 md:p-10">
              <Image
                alt="Controlled Amazon pilot planning texture"
                className="object-cover object-center opacity-[0.24] saturate-[0.85] contrast-[0.95] brightness-[0.78]"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src="/services/controlled-amazon-pilot.jpeg.jpeg"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,51,0.72),rgba(3,3,25,0.94)),radial-gradient(circle_at_18%_16%,rgba(139,92,255,0.12),transparent_30%)]" />
              <div className="relative z-10 mb-8 flex gap-4 text-[#10C8FF]">
                <StepsIcon />
                <SignalIcon />
              </div>
              <div className="relative z-10 grid gap-4">
                {pilotSteps.map((step, index) => (
                  <div
                    className="flex items-center gap-4 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-5 py-4"
                    key={step}
                  >
                    <span className="text-xs font-extrabold text-[#10C8FF]">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-bold text-[#C9C7E8]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionEyebrow>MARKET VALIDATION</SectionEyebrow>
              <h2 className="max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                Controlled Amazon Pilot
              </h2>
              <p className="mt-6 max-w-[610px] text-lg leading-8 text-[#C9C7E8]">
                Lower the risk of channel expansion. We test demand using 1
                {"\u2013"}2 hero SKUs, deploying high-intent listing content
                and capped PPC to gather hard data before full-catalog
                commitment.
              </p>
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-28 bg-[#080826] py-20 md:py-[110px]"
          id="amazon-channel-management"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow>DAY-TO-DAY OPERATIONS</SectionEyebrow>
              <h2 className="max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                Amazon Channel Management
              </h2>
              <p className="mt-6 max-w-[610px] text-lg leading-8 text-[#C9C7E8]">
                Our flagship service for established brands seeking absolute
                dominance. We handle everything from catalog optimization to
                complex PPC scaling.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[10px]">
              <Image
                alt="Channel management operations texture"
                className="object-cover object-center opacity-[0.20] saturate-[0.85] contrast-[0.95] brightness-[0.72]"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                src="/services/channel-management.jpeg.jpeg"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,3,25,0.78),rgba(11,11,42,0.94)),radial-gradient(circle_at_80%_10%,rgba(16,200,255,0.16),transparent_32%)]" />
              <div className="relative z-10 grid gap-5 p-px md:grid-cols-2">
              {managementCards.map((card, index) => (
                <FeatureTile
                  description={card.description}
                  icon={
                    index === 0 ? (
                      <CatalogIcon />
                    ) : index === 1 ? (
                      <PulseIcon />
                    ) : index === 2 ? (
                      <PackageIcon />
                    ) : (
                      <DashboardIcon />
                    )
                  }
                  key={card.title}
                  title={card.title}
                />
              ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-28 bg-[#080826] py-20 md:py-[110px]"
          id="ecommerce-growth-support"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <SectionEyebrow>BEYOND A MARKETPLACE</SectionEyebrow>
              <h2 className="max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                Ecommerce Growth Support
              </h2>
              <p className="mt-6 max-w-[610px] text-lg leading-8 text-[#C9C7E8]">
                Expanding beyond marketplaces into Shopify and high-efficiency
                DTC. We engineer AI-enhanced workflows and product positioning
                strategies that work in tandem with marketplace success.
              </p>
              <div className="group relative mt-9 h-[230px] overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[#101034] md:h-[280px]">
                <Image
                  alt="Ecommerce growth support visual"
                  className="object-cover object-center opacity-[0.82] saturate-[0.85] contrast-[0.95] brightness-[0.78] transition duration-300 group-hover:scale-[1.03] group-hover:opacity-95 group-hover:saturate-[0.95] group-hover:contrast-100 group-hover:brightness-[0.9]"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src="/services/ecommerce-growth.jpeg.jpeg"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,25,0.20),rgba(3,3,25,0.78))]" />
              </div>
            </div>

            <div className="grid gap-5">
              {ecommerceCards.map((card, index) => (
                <FeatureTile
                  description={card.description}
                  icon={
                    index === 0 ? (
                      <WebsiteIcon />
                    ) : index === 1 ? (
                      <PositioningIcon />
                    ) : (
                      <AiIcon />
                    )
                  }
                  key={card.title}
                  title={card.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-28 bg-[#030319] py-20 md:py-[110px]"
          id="social-content-support"
        >
          <div className="site-container">
            <div className="relative grid min-h-[520px] items-center gap-9 overflow-hidden border border-[rgba(255,255,255,0.10)] bg-[#101034] p-8 md:p-[72px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[72px]">
              <Image
                alt="Social content support texture"
                className="object-cover object-center opacity-[0.16] saturate-[0.85] contrast-[0.95] brightness-[0.72]"
                fill
                sizes="1180px"
                src="/services/social-content.jpeg.jpeg"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,51,0.95),rgba(17,17,51,0.75)),radial-gradient(circle_at_78%_50%,rgba(209,43,255,0.16),transparent_34%)]" />
              <div className="relative z-10">
                <SectionEyebrow>STORYTELLING & PERFORMANCE</SectionEyebrow>
                <h2 className="max-w-[560px] text-[clamp(40px,4vw,58px)] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#FFFFFF]">
                  Social Media &<br />
                  Content Support
                </h2>
                <p className="mt-6 max-w-[560px] text-lg leading-[1.65] text-[#C9C7E8] md:text-[19px]">
                  Creative direction that is not just &ldquo;pretty&rdquo;{" "}
                  {"\u2014"} it is performance-tied. We build content systems
                  that feed the algorithm while staying true to your
                  brand&apos;s core DNA.
                </p>

                <div className="mt-[38px] flex flex-wrap gap-[14px]">
                  {[
                    "CREATIVE DIRECTION",
                    "UGC PIPELINE",
                    "PAID SOCIAL ASSETS",
                  ].map((tag) => (
                    <span
                      className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] px-5 py-[14px] text-sm font-extrabold uppercase tracking-[0.06em] text-[#C9C7E8]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 items-center gap-[18px] sm:grid-cols-2">
                <SocialFeatureCard
                  icon={<ClapperIcon />}
                  offsetClass="md:-translate-y-[26px]"
                  title="High-impact short-form video"
                />
                <SocialFeatureCard
                  icon={<SparkleIcon />}
                  offsetClass="md:translate-y-[26px]"
                  title="Creative Asset Systems"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#101034] py-20 md:py-[110px]">
          <div className="site-container">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.18em] text-[#6D35FF]">
              NAVIGATOR
            </p>
            <h2 className="mt-4 text-center text-4xl font-extrabold uppercase tracking-[-0.035em] text-[#FFFFFF] md:text-5xl">
              Choose The Right Support
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {navigatorCards.map((card) => (
                <article
                  className="group rounded-[12px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#6D35FF] hover:bg-[#101034]"
                  key={card.title}
                >
                  <h3 className="text-xl font-extrabold text-[#FFFFFF]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">
                    {card.description}
                  </p>
                  <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-[#6D35FF]">
                    Start With
                  </p>
                  <p className="mt-2 text-lg font-extrabold text-[#FFFFFF]">
                    {card.recommendation}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#030319] py-16 md:py-[96px]" id="free-audit">
          <div className="site-container text-center">
            <h2 className="mx-auto max-w-[820px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Start with marketplace evidence before choosing a service.
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex justify-center bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                href="/contact"
              >
                Request the Free Leakage Audit
              </a>
              <Link
                className="inline-flex justify-center border border-[rgba(255,255,255,0.18)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                href="/#selected-work"
              >
                View Selected Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



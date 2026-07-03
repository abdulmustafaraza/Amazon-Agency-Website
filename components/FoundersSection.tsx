"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import Reveal from "@/components/Reveal";

// Auto-advance cadence. Bump or set to 0-style disable by removing the effect.
const ROTATE_MS = 10000;
const TRANSITION_MS = 500;

type Founder = {
  eyebrow: string;
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  linkedin: string;
  bio: string[];
};

const founders: Founder[] = [
  {
    eyebrow: "FOUNDER, SCOPESCALER",
    name: "Ukasha Shabbir",
    image: "/images/team/founder-cutout.png",
    imageWidth: 1100,
    imageHeight: 930,
    linkedin: "https://www.linkedin.com/in/ukashashabbir/",
    bio: [
      "Ukasha got into ecommerce back in 2020 and never really looked back. Early on, he even started his own local ecommerce venture in Pakistan — it didn’t last forever, but it taught him more than any job could, and it’s where the founder bug really bit.",
      "For close to four years now, he’s run the day-to-day operations for a US beauty brand, managing thousands of products across Amazon and Shopify all the way from Karachi. If something’s tangled in Seller Central, broken in the inventory sync, or quietly leaking sales between channels, that’s the kind of thing he’s been untangling for years — and it’s that same instinct, spotting where a brand is losing ground in the marketplace and figuring out how to win it back, that shaped what ScopeScaler does today.",
      "He tends to think in systems, which is partly just how his brain works and partly the policy-making and systems-thinking side of him that comes out everywhere. When he’s not in a spreadsheet, he’s usually off doing leadership and social-impact work somewhere.",
    ],
  },
  {
    eyebrow: "CO-FOUNDER, SCOPESCALER",
    name: "Abdul Mustafa Raza",
    image: "/images/team/co-founder-cutout.png",
    imageWidth: 1100,
    imageHeight: 1082,
    linkedin: "https://www.linkedin.com/in/abdul-mustafa-raza-26a69b311/",
    bio: [
      "Mustafa found his thing in 2023 and went all in. He started out handling Amazon accounts and has since worked across the full range of Amazon business models — FBA, wholesale, and private label — picking up real experience in shipment management, sales, and brand research along the way.",
      "But the part he genuinely loves is the research: sourcing products, sizing up suppliers, reading demand and competition, and figuring out which brands and categories actually have pull on Amazon. He’s not a “trust your gut” operator — he’d rather look at the data, the margins, and the gaps, and then make the call. Building his own ecommerce agency was the goal from early on, and this is it.",
    ],
  },
];

// ── prefers-reduced-motion, read through an external store (SSR-safe) ──
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      style={{ fill: "#111111" }}
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.44c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.88V21H9V9Z" />
    </svg>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,28fr)_minmax(0,72fr)] md:gap-8 lg:gap-10">
      {/* Photo — glow blend, no frame. Photo left / text right on all slides. */}
      <div className="order-1">
        <div className="relative mx-auto w-full max-w-[340px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-6%] bottom-[-4%] top-[6%] -z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(120,110,255,0.18), transparent 70%)",
            }}
          />
          <Image
            alt={`${founder.name} — ${founder.eyebrow}`}
            className="relative z-[1] mx-auto h-auto w-full object-contain"
            height={founder.imageHeight}
            sizes="(max-width: 768px) 78vw, 400px"
            src={founder.image}
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 74%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 74%, transparent 100%)",
            }}
            unoptimized
            width={founder.imageWidth}
          />
        </div>
      </div>

      {/* Text */}
      <div className="order-2 text-center md:text-left">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#D12BFF]">
          {founder.eyebrow}
        </p>
        <h3 className="mt-3 text-4xl font-black leading-[1.05] text-[#111111] md:text-[52px] lg:text-[56px]">
          {founder.name}
        </h3>
        <div className="mt-5 space-y-3">
          {founder.bio.map((paragraph) => (
            <p
              className="text-[17px] leading-[1.7] text-[#33343F] md:text-[18px] lg:text-[19px]"
              key={paragraph.slice(0, 40)}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <a
          className="mt-6 inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-[rgba(17,17,17,0.28)] px-6 py-3 text-sm font-semibold transition-colors hover:border-[#D12BFF] hover:bg-[rgba(209,43,255,0.08)]"
          href={founder.linkedin}
          style={{ color: "#111111" }}
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}

export default function FoundersSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  // Auto-advance. Keyed on `active` so a manual switch restarts the timer;
  // paused (hover/focus/touch) and reduced-motion stop it entirely.
  useEffect(() => {
    if (paused || reducedMotion) {
      return;
    }

    const intervalId = setInterval(() => {
      setActive((current) => (current + 1) % founders.length);
    }, ROTATE_MS);

    return () => clearInterval(intervalId);
  }, [active, paused, reducedMotion]);

  return (
    <section
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#EEF0F6] py-14 md:py-16"
      id="about"
    >
      {/* Light dotted-mesh background — same asset as the Problem section,
          pushed back so it reads as faint texture, not sharp lines. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-[0.45]"
        src="/backgrounds/problem-wave-bg.jpeg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(238,240,246,0.88)_0%,rgba(238,240,246,0.62)_38%,rgba(238,240,246,0.62)_62%,rgba(238,240,246,0.88)_100%)]"
      />

      <div className="site-container relative z-10">
        <Reveal>
          <div className="mx-auto mb-8 max-w-[720px] text-center md:mb-10">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#D12BFF]">
              The Team
            </p>
            <h2 className="text-4xl font-black leading-[1.05] text-[#030319] md:text-5xl lg:text-6xl">
              The people behind ScopeScaler
            </h2>
          </div>
        </Reveal>

        {/* Slider */}
        <div
          className="relative mx-auto max-w-[1180px]"
          onBlur={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Crossfade stack — all founders share one grid cell, no frame */}
          <div aria-live="polite" className="relative grid">
            {founders.map((founder, index) => {
              const isActive = index === active;
              return (
                <div
                  aria-hidden={!isActive}
                  className="[grid-area:1/1] transition-opacity ease-out"
                  key={founder.name}
                  style={{
                    transitionDuration: reducedMotion
                      ? "0ms"
                      : `${TRANSITION_MS}ms`,
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <FounderCard founder={founder} />
                </div>
              );
            })}
          </div>

          {/* Name-tab indicators */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {founders.map((founder, index) => {
              const isActive = index === active;
              return (
                <button
                  aria-label={`Show ${founder.name}`}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-[44px] items-center gap-2.5 rounded-full border px-5 text-xs font-extrabold uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "border-transparent bg-[#D12BFF] text-[#FFFFFF]"
                      : "border-[rgba(17,17,17,0.18)] text-[#4B4966] hover:border-[#D12BFF] hover:text-[#111111]"
                  }`}
                  key={founder.name}
                  onClick={() => {
                    setActive(index);
                    setPaused(true);
                  }}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-[#FFFFFF]" : "bg-[#B4B2C6]"
                    }`}
                  />
                  {founder.name.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

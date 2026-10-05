"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

// Auto-advance cadence.
const ROTATE_MS = 10000;
const TRANSITION_MS = 500;

type Founder = {
  eyebrow: string;
  name: string;
  linkedin: string;
  photo: string;
  bio: string[];
};

const founders: Founder[] = [
  {
    eyebrow: "Founder, ScopeScaler",
    name: "Ukasha Shabbir",
    linkedin: "https://www.linkedin.com/in/ukashashabbir/",
    photo: "/images/team/founder-cutout.png",
    bio: [
      "Ukasha got into ecommerce back in 2020 and never really looked back. Early on, he even started his own local ecommerce venture in Pakistan — it didn’t last forever, but it taught him more than any job could, and it’s where the founder bug really bit.",
      "For close to four years now, he’s run the day-to-day operations for a US beauty brand, managing thousands of products across Amazon and Shopify all the way from Karachi. If something’s tangled in Seller Central, broken in the inventory sync, or quietly leaking sales between channels, that’s the kind of thing he’s been untangling for years — and it’s that same instinct, spotting where a brand is losing ground in the marketplace and figuring out how to win it back, that shaped what ScopeScaler does today.",
      "He tends to think in systems, which is partly just how his brain works and partly the policy-making and systems-thinking side of him that comes out everywhere. When he’s not in a spreadsheet, he’s usually off doing leadership and social-impact work somewhere.",
    ],
  },
  {
    eyebrow: "Co-Founder, ScopeScaler",
    name: "Abdul Mustafa Raza",
    linkedin: "https://www.linkedin.com/in/abdul-mustafa-raza-26a69b311/",
    photo: "/images/team/co-founder-cutout.png",
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

function FounderSlide({ founder }: { founder: Founder }) {
  return (
    <div className="team-slide">
      <div className="team-photo team-photo-frame well-1-1">
        <Image
          alt={founder.name}
          fill
          sizes="(min-width: 768px) 260px, 220px"
          src={founder.photo}
        />
      </div>

      <div className="team-bio">
        <p className="eyebrow">{founder.eyebrow}</p>
        <h3 className="mt-2 text-[1.05rem]">{founder.name}</h3>
        <div className="mt-3">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <a
          className="btn btn-outline mt-5"
          href={founder.linkedin}
          rel="noreferrer"
          target="_blank"
        >
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

  // Keyed on `active` so a manual switch restarts the timer; pausing (hover or
  // focus) and reduced-motion stop it entirely.
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
    <section className="section section-grey scroll-mt-20" id="about">
      <div className="site-container">
        <Reveal className="section-head">
          <p className="eyebrow">The team</p>
          <h2 className="mt-2">The people behind ScopeScaler</h2>
        </Reveal>

        <Reveal
          className="mt-8"
          delay={0.08}
          onBlur={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Crossfade stack — every founder shares one grid cell. */}
          <div aria-live="polite" className="grid">
            {founders.map((founder, index) => {
              const isActive = index === active;

              return (
                <div
                  aria-hidden={!isActive}
                  className="[grid-area:1/1]"
                  key={founder.name}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    transitionDuration: reducedMotion
                      ? "0ms"
                      : `${TRANSITION_MS}ms`,
                    opacity: isActive ? 1 : 0,
                    transform:
                      reducedMotion || isActive
                        ? "translateY(0)"
                        : "translateY(12px)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <FounderSlide founder={founder} />
                </div>
              );
            })}
          </div>

          {/* Name tabs */}
          <div className="team-tabs">
            {founders.map((founder, index) => (
              <button
                aria-label={`Show ${founder.name}`}
                aria-pressed={index === active}
                className="team-tab tap"
                key={founder.name}
                onClick={() => {
                  setActive(index);
                  setPaused(true);
                }}
                type="button"
              >
                {founder.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

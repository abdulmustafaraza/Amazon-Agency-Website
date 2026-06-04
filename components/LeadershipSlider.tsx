"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Ukasha Shabbir",
    role: "Founder, ScopeScaler",
    image: "/images/team/founder.svg",
    linkedin: "https://www.linkedin.com/in/ukashashabbir/",
    bio: [
      "Ukasha leads ScopeScaler's vision and direction, driving company strategy and the key decisions behind the work.",
      "He focuses on understanding where marketplace demand is moving, spotting overlooked opportunities, and giving every partner brand a clear, no-nonsense path forward on Amazon.",
      "He believes good strategy should make things easier, not more complicated, and that principle shapes how ScopeScaler operates.",
    ],
  },
  {
    name: "Abdul Mustafa Raza",
    role: "Co-Founder, ScopeScaler",
    image: "/images/team/co-founder.svg",
    linkedin: "https://www.linkedin.com/in/abdul-mustafa-raza-26a69b311/",
    bio: [
      "Abdul turns strategy into execution, building the systems and processes that keep ScopeScaler's work structured and reliable.",
      "From operational workflows to day-to-day client execution, he makes sure ideas move into delivery.",
      "His focus on strong systems helps ScopeScaler maintain consistent execution as the company grows.",
    ],
  },
];

export default function LeadershipSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const fadeTimer = useRef<number | null>(null);
  const activeMember = teamMembers[activeIndex];

  const showSlide = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex) {
      return;
    }

    if (fadeTimer.current) {
      window.clearTimeout(fadeTimer.current);
    }

    setIsFading(true);
    fadeTimer.current = window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFading(false);
      fadeTimer.current = null;
    }, 180);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      showSlide((activeIndex + 1) % teamMembers.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, showSlide]);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) {
        window.clearTimeout(fadeTimer.current);
      }
    };
  }, []);

  function goToPrevious() {
    showSlide((activeIndex - 1 + teamMembers.length) % teamMembers.length);
  }

  function goToNext() {
    showSlide((activeIndex + 1) % teamMembers.length);
  }

  return (
    <div
      className="relative w-full overflow-hidden border-y border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_18%_18%,rgba(16,200,255,0.08),transparent_30%),radial-gradient(circle_at_82%_36%,rgba(209,43,255,0.10),transparent_32%),linear-gradient(135deg,#030319_0%,#080826_52%,#101034_100%)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,25,0.18)_0%,rgba(3,3,25,0.04)_46%,rgba(3,3,25,0.24)_100%)]" />

      <div
        className={`relative mx-auto grid w-full max-w-[1440px] grid-cols-1 transition-opacity duration-300 lg:h-[640px] lg:grid-cols-[48fr_52fr] lg:items-center lg:gap-[72px] ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        key={activeMember.name}
      >
        <div className="relative flex h-[400px] w-full items-end justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_42%,rgba(109,53,255,0.14),transparent_38%),linear-gradient(180deg,rgba(3,3,25,0.08)_0%,rgba(3,3,25,0.76)_100%)] md:h-[420px] lg:h-[560px] lg:min-h-[560px]">
          <div className="pointer-events-none absolute bottom-0 h-[82%] w-[86%] max-w-[620px] border border-[rgba(16,200,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.00))]" />
          <div className="relative h-[380px] w-full max-w-[620px] md:h-[410px] lg:h-[560px]">
            <Image
              alt={`${activeMember.name}, ${activeMember.role}`}
              className="object-contain object-bottom transition duration-700"
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 48vw, 100vw"
              src={activeMember.image}
              unoptimized
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,25,0.24)_0%,transparent_18%,transparent_76%,rgba(3,3,25,0.22)_100%),linear-gradient(180deg,transparent_68%,#080826_100%)]" />
        </div>

        <div className="relative flex w-full flex-col justify-center px-6 py-12 md:px-10 lg:max-w-[740px] lg:px-0 lg:py-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
            Leadership Team
          </p>
          <p className="mt-5 max-w-[740px] text-base leading-[1.7] text-[#C9C7E8]">
            ScopeScaler is led by operators focused on Amazon marketplace
            control, ecommerce workflows, and brand-side execution.
          </p>

          <div className="my-8 h-px w-full max-w-[740px] bg-[rgba(255,255,255,0.12)]" />

          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
            {activeMember.role}
          </p>
          <h3 className="mt-4 text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#FFFFFF]">
            {activeMember.name}
          </h3>
          <div className="mt-6 grid min-h-[186px] max-w-[740px] content-start gap-3">
            {activeMember.bio.map((paragraph) => (
              <p
                className="text-base leading-[1.7] text-[#C9C7E8]"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <a
            className="mt-7 inline-flex w-fit border border-[rgba(255,255,255,0.18)] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
            href={activeMember.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            View LinkedIn {"\u2197"}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="mr-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#A8A5C8]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(teamMembers.length).padStart(2, "0")}
            </p>
            <button
              aria-label="Show previous leader"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] text-lg font-bold text-[#FFFFFF] transition-colors hover:border-[#10C8FF] hover:text-[#10C8FF]"
              onClick={goToPrevious}
              type="button"
            >
              {"\u2190"}
            </button>
            <div className="flex items-center gap-2">
              {teamMembers.map((member, index) => (
                <button
                  aria-label={`Show ${member.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#10C8FF]"
                      : "w-2.5 bg-[rgba(255,255,255,0.28)] hover:bg-[#FF3CBF]"
                  }`}
                  key={member.name}
                  onClick={() => showSlide(index)}
                  type="button"
                />
              ))}
            </div>
            <button
              aria-label="Show next leader"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.16)] text-lg font-bold text-[#FFFFFF] transition-colors hover:border-[#10C8FF] hover:text-[#10C8FF]"
              onClick={goToNext}
              type="button"
            >
              {"\u2192"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

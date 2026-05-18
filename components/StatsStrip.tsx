"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";

const numberGradients = [
  "linear-gradient(90deg, #10C8FF 0%, #247CFF 100%)",
  "linear-gradient(90deg, #247CFF 0%, #6D35FF 100%)",
  "linear-gradient(90deg, #8A3FFC 0%, #D12BFF 100%)",
  "linear-gradient(90deg, #D12BFF 0%, #FF4E64 100%)",
];

function useCountUp(
  targetValue: number,
  shouldRun: boolean,
  prefersReducedMotion: boolean,
) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldRun) {
      return;
    }

    if (prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;
    const duration = 1600;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(targetValue * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [prefersReducedMotion, shouldRun, targetValue]);

  return prefersReducedMotion && shouldRun ? targetValue : displayValue;
}

function StatItem({
  label,
  value,
  prefix,
  suffix,
  shouldRun,
  prefersReducedMotion,
  gradient,
}: {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
  shouldRun: boolean;
  prefersReducedMotion: boolean;
  gradient: string;
}) {
  const displayValue = useCountUp(value, shouldRun, prefersReducedMotion);

  return (
    <div className="flex min-w-0 flex-col items-center overflow-visible text-center">
      <div className="flex w-full justify-center overflow-visible">
        <p
          className="block overflow-visible whitespace-nowrap bg-clip-text text-center text-[clamp(52px,4.5vw,78px)] font-black leading-[0.95] tracking-[-0.035em] text-transparent"
          style={{ backgroundImage: gradient }}
        >
          {prefix}
          {displayValue}
          {suffix}
        </p>
      </div>
      <p className="mx-auto mt-[18px] max-w-[280px] text-center text-base font-bold leading-[1.45] text-[#F5F3FF] md:text-lg">
        {label}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldRun, setShouldRun] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animationFrame = requestAnimationFrame(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    });

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const animationFrame = requestAnimationFrame(() => {
        setShouldRun(true);
      });

      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-[460px] overflow-hidden border-y border-[rgba(255,255,255,0.10)] bg-[#080826] pb-[80px] pt-[70px] md:pb-[90px] md:pt-[80px] lg:pb-[100px] lg:pt-[90px]"
      ref={sectionRef}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-90"
        src="/backgrounds/stats-wave-bg.jpeg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[rgba(5,5,26,0.28)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_15%_55%,rgba(16,200,255,0.16),transparent_30%),radial-gradient(circle_at_50%_55%,rgba(109,53,255,0.18),transparent_35%),radial-gradient(circle_at_85%_55%,rgba(255,60,191,0.14),transparent_34%)]"
      />

      <div className="site-container relative z-10">
        <h2 className="mb-[72px] text-center text-[clamp(30px,3vw,46px)] font-extrabold leading-[1.1] text-[#FFFFFF]">
          Our numbers say it all
        </h2>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-12 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-16 xl:gap-x-20">
          {stats.map((stat, index) => (
            <StatItem
              gradient={numberGradients[index] ?? numberGradients[0]}
              key={stat.label}
              label={stat.label}
              prefix={stat.prefix}
              prefersReducedMotion={prefersReducedMotion}
              shouldRun={shouldRun}
              suffix={stat.suffix}
              value={stat.value}
            />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[900px] text-center text-sm leading-[1.6] text-[#B9B7D9] md:text-[15px]">
          Based on prior ecommerce operations, Amazon Creator Connections
          support, Sellercloud inventory workflows, and marketplace research
          experience.
        </p>
      </div>
    </section>
  );
}

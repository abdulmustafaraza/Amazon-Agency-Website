"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";

const numberGradients = [
  "linear-gradient(90deg, #10C8FF 0%, #247CFF 100%)",
  "linear-gradient(90deg, #247CFF 0%, #6D35FF 100%)",
  "linear-gradient(90deg, #8A3FFC 0%, #D12BFF 100%)",
  "linear-gradient(90deg, #D12BFF 0%, #FF4E64 100%)",
];

function useCountUp(targetValue: number, shouldRun: boolean) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldRun) {
      return;
    }

    let animationFrame = 0;
    const duration = 1200;
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
  }, [shouldRun, targetValue]);

  return displayValue;
}

function StatItem({
  label,
  value,
  suffix,
  shouldRun,
  gradient,
}: {
  label: string;
  value: number;
  suffix: string;
  shouldRun: boolean;
  gradient: string;
}) {
  const displayValue = useCountUp(value, shouldRun);

  return (
    <div className="text-center">
      <p
        className="block bg-clip-text text-[clamp(76px,9vw,138px)] font-black leading-[0.9] tracking-[-0.07em] text-transparent"
        style={{ backgroundImage: gradient }}
      >
        {displayValue}
        {suffix}
      </p>
      <p className="mx-auto mt-[22px] max-w-[280px] text-center text-base font-semibold leading-[1.45] text-[#F5F3FF] md:text-lg">
        {label}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldRun, setShouldRun] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
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

        <div className="grid grid-cols-1 items-start gap-11 md:grid-cols-2 md:gap-x-9 md:gap-y-14 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <StatItem
                gradient={numberGradients[index] ?? numberGradients[0]}
                label={stat.label}
                shouldRun={shouldRun}
                suffix={stat.suffix}
                value={stat.value}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


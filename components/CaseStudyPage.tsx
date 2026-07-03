import Image from "next/image";
import type React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import type { CaseStudy } from "@/data/portfolio";

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          className="rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-xs font-semibold text-[#C9C7E8]"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="h-full">
      <section className="h-full rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 shadow-[0_18px_60px_rgba(255,60,191,0.10)] md:p-8">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#D12BFF]">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#FFFFFF] md:text-4xl">
          {title}
        </h2>
        <div className="mt-5 text-base leading-8 text-[#C9C7E8]">{children}</div>
      </section>
    </Reveal>
  );
}

function CaseStudyStats({ study }: { study: CaseStudy }) {
  return (
    <section className="border-b border-[rgba(255,255,255,0.10)] bg-[#080826] py-8 md:py-10">
      <div className="site-container">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {study.stats.map((stat, index) => (
            <Reveal
              className="h-full"
              delay={index * 0.09}
              key={`${stat.value}-${stat.label ?? "stat"}`}
            >
              <div className="flex h-full min-h-[150px] flex-col items-center justify-center rounded-[22px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.035)] px-6 py-8 text-center shadow-[0_18px_60px_rgba(109,53,255,0.10)]">
                <p
                  className={[
                    "font-black tracking-[-0.04em] text-[#FFFFFF]",
                    stat.kind === "text"
                      ? "text-[clamp(26px,2.4vw,38px)] leading-[1.1]"
                      : "text-[clamp(42px,4vw,68px)] leading-none",
                  ].join(" ")}
                >
                  {stat.value}
                </p>
                {stat.label ? (
                  <p className="mt-3.5 text-sm font-bold leading-[1.4] text-[#C9C7E8] md:text-base">
                    {stat.label}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <Header />
      <main className="bg-[#030319]">
        <section className="overflow-hidden border-b border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_78%_18%,rgba(209,43,255,0.20),transparent_30%),radial-gradient(circle_at_70%_76%,rgba(16,200,255,0.14),transparent_34%),linear-gradient(135deg,#080826_0%,#030319_62%,#030319_100%)] py-20 md:py-[110px]">
          <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <Reveal>
                <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#D12BFF]">
                  CASE STUDY
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="max-w-[820px] text-[clamp(42px,5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#FFFFFF]">
                  {study.heroHeadline}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#C9C7E8] md:text-xl">
                  {study.heroSummary}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-8">
                  <PillList items={study.tags} />
                </div>
              </Reveal>
            </div>

            <Reveal
              className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[#080826] shadow-[0_28px_90px_rgba(109,53,255,0.16)]"
              delay={0.15}
            >
              <Image
                alt={study.title}
                className="object-cover object-center opacity-[0.84] saturate-[0.88] contrast-[0.96] brightness-[0.82]"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                src={study.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,25,0.05)_0%,rgba(3,3,25,0.42)_64%,rgba(3,3,25,0.82)_100%),radial-gradient(circle_at_80%_20%,rgba(209,43,255,0.20),transparent_38%)]" />
            </Reveal>
          </div>
        </section>

        <CaseStudyStats study={study} />

        <section className="py-20 md:py-[110px]">
          <div className="site-container grid gap-6 lg:grid-cols-2">
            <SectionCard eyebrow="OVERVIEW" title="Overview">
              <p>{study.overview}</p>
            </SectionCard>

            <SectionCard eyebrow="CHALLENGE" title="The Challenge">
              <p>{study.challenge}</p>
            </SectionCard>
          </div>
        </section>

        <section className="pb-20 md:pb-[110px]">
          <div className="site-container grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <SectionCard eyebrow="PROCESS" title={study.processTitle}>
              <ul className="grid gap-3">
                {study.processItems.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#FF3CBF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <div className="grid gap-6">
              <SectionCard eyebrow="TOOLS USED" title="Tools Used">
                <PillList items={study.tools} />
              </SectionCard>

              <SectionCard eyebrow="IMPACT" title="Impact">
                <p>{study.impact}</p>
              </SectionCard>
            </div>
          </div>
        </section>

        {study.evidenceTitle && study.evidenceBody ? (
          <section className="pb-20 md:pb-[110px]">
            <div className="site-container">
              <Reveal className="rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_80%_20%,rgba(209,43,255,0.18),transparent_32%),#080826] p-6 md:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#D12BFF]">
                  EVIDENCE
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#FFFFFF]">
                  {study.evidenceTitle}
                </h2>
                <p className="mt-5 max-w-[900px] text-base leading-8 text-[#C9C7E8]">
                  {study.evidenceBody}
                </p>
              </Reveal>
            </div>
          </section>
        ) : null}

        {study.examplesTitle && study.examples ? (
          <section className="pb-20 md:pb-[110px]">
            <div className="site-container">
              <SectionCard eyebrow="EXAMPLES" title={study.examplesTitle}>
                <ul className="grid gap-3 md:grid-cols-2">
                  {study.examples.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#10C8FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          </section>
        ) : null}

        <section className="bg-[#080826] py-20 md:py-[96px]">
          <div className="site-container">
            <Reveal className="mx-auto max-w-[900px] rounded-[22px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-7 shadow-[0_22px_70px_rgba(209,43,255,0.12)] md:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#D12BFF]">
                CASE STUDY TAKEAWAY
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#FFFFFF] md:text-4xl">
                What this work shows
              </h2>
              <p className="mt-5 text-base leading-8 text-[#C9C7E8] md:text-lg">
                {study.takeaway}
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

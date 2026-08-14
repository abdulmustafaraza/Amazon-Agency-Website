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
          className="rounded-full border border-[var(--line-strong)] px-3 py-1 text-[0.72rem] text-[var(--text-2)]"
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
    <Reveal className="card h-full">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-[1.05rem] font-semibold">{title}</h2>
      <div className="mt-3 text-[0.855rem] leading-[1.65] text-[var(--text-2)]">
        {children}
      </div>
    </Reveal>
  );
}

function CaseStudyStats({ study }: { study: CaseStudy }) {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3">
          {study.stats.map((stat, index) => (
            <Reveal
              className="card text-center"
              delay={index * 0.08}
              key={`${stat.value}-${stat.label ?? "stat"}`}
            >
              <p
                className={
                  stat.kind === "text"
                    ? "text-[1rem] font-semibold tracking-[-0.02em] text-[var(--text)]"
                    : "text-[1.6rem] font-semibold leading-none tracking-[-0.02em] text-[var(--text)]"
                }
              >
                {stat.value}
              </p>
              {stat.label ? (
                <p className="mt-2 text-[0.75rem] text-[var(--text-muted)]">
                  {stat.label}
                </p>
              ) : null}
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
      <main>
        <section className="section section-grey">
          <div className="container split">
            <Reveal className="split-copy">
              <p className="eyebrow">Case study</p>
              <h1 className="mt-3">{study.heroHeadline}</h1>
              <p className="lead mt-4">{study.heroSummary}</p>
              <div className="mt-5">
                <PillList items={study.tags} />
              </div>
            </Reveal>

            <Reveal className="split-media" delay={0.08}>
              <div className="well well-4-3 well-media">Case study image</div>
            </Reveal>
          </div>
        </section>

        <CaseStudyStats study={study} />

        <section className="section section-grey">
          <div className="container grid gap-4 lg:grid-cols-2">
            <SectionCard eyebrow="Overview" title="Overview">
              <p>{study.overview}</p>
            </SectionCard>

            <SectionCard eyebrow="Challenge" title="The challenge">
              <p>{study.challenge}</p>
            </SectionCard>
          </div>
        </section>

        <section className="section section-white">
          <div className="container grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <SectionCard eyebrow="Process" title={study.processTitle}>
              <ul className="grid gap-2">
                {study.processItems.map((item) => (
                  <li className="flex gap-2.5" key={item}>
                    <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-[var(--text-muted)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <div className="grid content-start gap-4">
              <SectionCard eyebrow="Tools used" title="Tools used">
                <PillList items={study.tools} />
              </SectionCard>

              <SectionCard eyebrow="Impact" title="Impact">
                <p>{study.impact}</p>
              </SectionCard>
            </div>
          </div>
        </section>

        {study.evidenceTitle && study.evidenceBody ? (
          <section className="section section-grey">
            <div className="container">
              <SectionCard eyebrow="Evidence" title={study.evidenceTitle}>
                <p>{study.evidenceBody}</p>
              </SectionCard>
            </div>
          </section>
        ) : null}

        {study.examplesTitle && study.examples ? (
          <section className="section section-white">
            <div className="container">
              <SectionCard eyebrow="Examples" title={study.examplesTitle}>
                <ul className="grid gap-2 md:grid-cols-2">
                  {study.examples.map((item) => (
                    <li className="flex gap-2.5" key={item}>
                      <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-[var(--text-muted)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          </section>
        ) : null}

        <section className="section section-grey">
          <div className="container">
            <Reveal className="cta-block">
              <p className="eyebrow text-[var(--text-on-dark-2)]">
                Case study takeaway
              </p>
              <h2 className="mt-2">What this work shows</h2>
              <p>{study.takeaway}</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

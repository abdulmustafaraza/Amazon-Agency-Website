import Image from "next/image";
import Link from "next/link";
import type React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <section className="rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 shadow-[0_18px_60px_rgba(255,60,191,0.10)] md:p-8">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#D12BFF]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#FFFFFF] md:text-4xl">
        {title}
      </h2>
      <div className="mt-5 text-base leading-8 text-[#C9C7E8]">{children}</div>
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
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#D12BFF]">
                CASE STUDY
              </p>
              <h1 className="max-w-[820px] text-[clamp(42px,5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#FFFFFF]">
                {study.heroHeadline}
              </h1>
              <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#C9C7E8] md:text-xl">
                {study.heroSummary}
              </p>

              <div className="mt-8">
                <PillList items={study.tags} />
              </div>
              <div className="mt-4">
                <PillList items={study.proofPills} />
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  className="inline-flex rounded bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] shadow-[0_18px_55px_rgba(209,43,255,0.24)] transition-colors hover:bg-[#8A3FFC]"
                  href="/contact"
                >
                  Request a Free Leakage Audit {"\u2192"}
                </Link>
                <Link
                  className="inline-flex rounded border border-[rgba(255,255,255,0.18)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                  href="/#selected-work"
                >
                  Back to Selected Work {"\u2192"}
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[#080826] shadow-[0_28px_90px_rgba(109,53,255,0.16)]">
              <Image
                alt={study.title}
                className="object-cover object-center opacity-[0.84] saturate-[0.88] contrast-[0.96] brightness-[0.82]"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                src={study.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,25,0.05)_0%,rgba(3,3,25,0.42)_64%,rgba(3,3,25,0.82)_100%),radial-gradient(circle_at_80%_20%,rgba(209,43,255,0.20),transparent_38%)]" />
            </div>
          </div>
        </section>

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

        {study.note ? (
          <section className="pb-20 md:pb-[110px]">
            <div className="site-container">
              <div className="rounded-[18px] border border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_80%_20%,rgba(209,43,255,0.18),transparent_32%),#080826] p-6 md:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#D12BFF]">
                  IMPORTANT NOTE
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#FFFFFF]">
                  {study.noteTitle}
                </h2>
                <p className="mt-5 max-w-[900px] text-base leading-8 text-[#C9C7E8]">
                  {study.note}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#080826] py-20 md:py-[96px]">
          <div className="site-container text-center">
            <h2 className="mx-auto max-w-[760px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Start with marketplace evidence before choosing the next move.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                className="inline-flex rounded bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                href="/contact"
              >
                Request a Free Leakage Audit {"\u2192"}
              </Link>
              <Link
                className="inline-flex rounded border border-[rgba(255,255,255,0.18)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                href="/#selected-work"
              >
                Back to Selected Work {"\u2192"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

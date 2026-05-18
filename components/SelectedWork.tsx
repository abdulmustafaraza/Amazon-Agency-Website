import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/portfolio";

export default function SelectedWork() {
  return (
    <section
      className="w-full bg-[#080826] pb-16 pt-20 md:pb-[88px] md:pt-[110px]"
      id="selected-work"
    >
      <div className="site-container">
        <div className="max-w-[780px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D12BFF]">
            SELECTED WORK
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#FFFFFF] md:text-5xl lg:text-6xl">
            Selected work across marketplace control, ecommerce operations, and
            conversion systems.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#C9C7E8] md:text-lg">
            A focused look at creator campaign support, multi-channel ecommerce
            operations, and Amazon leakage research.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#101034] shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[rgba(209,43,255,0.45)] hover:shadow-[0_24px_80px_rgba(109,53,255,0.14)]"
              key={item.slug}
            >
              <div className="relative h-[200px] w-full overflow-hidden bg-[#080826] md:h-[210px] lg:h-[220px]">
                <Image
                  alt={item.title}
                  className="h-full w-full object-cover opacity-[0.86] saturate-[0.88] contrast-[0.96] brightness-[0.82] transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-[0.92]"
                  height={420}
                  loading="lazy"
                  src={item.image}
                  width={640}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,25,0.05)_0%,rgba(3,3,25,0.38)_65%,rgba(3,3,25,0.72)_100%),radial-gradient(circle_at_80%_20%,rgba(209,43,255,0.16),transparent_38%)]" />
              </div>

              <div className="flex min-h-[300px] flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold leading-7 text-[#FFFFFF]">
                  {item.title}
                </h3>
                <p className="mt-4 line-clamp-6 text-sm leading-7 text-[#C9C7E8]">
                  {item.description}
                </p>

                <Link
                  className="mt-auto pt-7 text-sm font-semibold text-[#FFFFFF] transition-colors group-hover:text-[#FF3CBF]"
                  href={`/case-studies/${item.slug}`}
                >
                  View Case Study {"\u2192"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

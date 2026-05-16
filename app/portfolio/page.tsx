import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { caseStudies } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="bg-[#030319]">
        <section className="border-b border-[rgba(255,255,255,0.10)] bg-[radial-gradient(circle_at_75%_18%,rgba(209,43,255,0.20),transparent_30%),linear-gradient(135deg,#080826_0%,#030319_62%,#030319_100%)] py-20 md:py-[110px]">
          <div className="site-container">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A3FFC]">
              SELECTED CASE STUDIES
            </p>
            <h1 className="max-w-[900px] text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Real operational work across marketplace control and ecommerce
              systems.
            </h1>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-[#C9C7E8] md:text-lg">
              A focused look at marketplace operations, Amazon leakage
              research, creator workflows, review systems, and conversion
              support.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-[96px]">
          <div className="site-container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                className="group overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#080826] shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[rgba(209,43,255,0.45)] hover:shadow-[0_0_28px_rgba(109,53,255,0.14)]"
                key={item.slug}
              >
                <div className="relative h-[200px] w-full overflow-hidden bg-[#030319] md:h-[210px] lg:h-[220px]">
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

                <div className="flex min-h-[390px] flex-col p-6">
                  <p className="text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-[#D12BFF]">
                    {item.category}
                  </p>
                  <h2 className="mt-4 text-xl font-semibold leading-7 text-[#FFFFFF]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.proofPills.map((pill) => (
                      <span
                        className="rounded-full border border-[rgba(255,255,255,0.10)] bg-[#030319] px-3 py-1 text-xs font-medium text-[#C9C7E8]"
                        key={pill}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

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
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section section-grey">
          <div className="site-container">
            <Reveal>
              <p className="eyebrow">Team experience</p>
              <h1 className="mt-3 max-w-[24ch]">
                Prior team experience across marketplace control and ecommerce
                systems.
              </h1>
              <p className="lead mt-4 max-w-[60ch]">
                Marketplace operations, Amazon leakage research, creator
                workflows, and multi-channel ecommerce support across DTC and
                beauty brands.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section section-white">
          <div className="site-container">
            <div className="work-grid !mt-0">
              {caseStudies.map((item, index) => (
                <Reveal
                  className="work-card"
                  delay={(index % 3) * 0.08}
                  key={item.slug}
                >
                  <div className="well well-16-10 rounded-none border-0 border-b">
                    Project thumbnail
                  </div>
                  <div className="work-card-body">
                    <h2 className="text-[0.94rem] font-semibold">
                      {item.title}
                    </h2>
                    <p className="mt-1.5">{item.description}</p>
                    <Link
                      className="work-card-link"
                      href={`/case-studies/${item.slug}`}
                    >
                      <span>View experience {"→"}</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

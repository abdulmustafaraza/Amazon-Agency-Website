import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/portfolio";

export default function SelectedWork() {
  return (
    <section className="section section-grey" id="selected-work">
      <div className="site-container">
        <Reveal className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-2">Our diverse experience includes</h2>
          <p>Amazon, eBay, Shopify</p>
        </Reveal>

        <div className="work-grid">
          {caseStudies.map((item, index) => (
            <Reveal
              className="work-card"
              delay={index * 0.08}
              key={item.slug}
            >
              <div className="well well-16-10 relative rounded-none border-0 border-b">
                <Image
                  alt={item.title}
                  className="object-cover"
                  fill
                  sizes="(min-width: 881px) 340px, 100vw"
                  src={item.image}
                />
              </div>
              <div className="work-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
  );
}

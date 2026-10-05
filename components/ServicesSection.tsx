import Reveal from "@/components/Reveal";
import Link from "next/link";
import { services } from "@/data/services";

// The three headline services shown on the homepage split.
const featured = services.slice(0, 3);

/**
 * White split section, reversed — heading + three mini service rows on the
 * left, image on the right.
 */
export default function ServicesSection() {
  return (
    <section className="section section-white" id="services">
      <div className="site-container split split-reverse">
        <Reveal className="split-copy">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-2">Three ways brands take the channel back</h2>

          <div className="mt-5">
            {featured.map((service, index) => (
              <div className="mini-row" key={service.id}>
                <span className="mini-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link className="btn btn-outline mt-6" href="/services">
            View all services
          </Link>
        </Reveal>

        <Reveal className="split-media" delay={0.08}>
          <div className="well well-4-3 well-media">Services image</div>
        </Reveal>
      </div>
    </section>
  );
}

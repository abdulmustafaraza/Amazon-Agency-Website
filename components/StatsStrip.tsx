import Reveal from "@/components/Reveal";
import { stats } from "@/data/stats";
import Image from "next/image";

/**
 * Grey split section — image left, heading + paragraph + inline stats right.
 */
export default function StatsStrip() {
  return (
    <section className="section section-grey">
      <div className="site-container split">
        <Reveal className="split-media">
          <div className="well well-4-3 well-media relative">
            <Image
              alt="Laptop showing a product inventory sheet beside shipping boxes and an inventory notebook"
              className="object-cover"
              fill
              sizes="(min-width: 881px) 500px, 100vw"
              src="/images/track-record.png"
            />
          </div>
        </Reveal>

        <Reveal className="split-copy" delay={0.08}>
          <p className="eyebrow">Track record</p>
          <h2 className="mt-2">
            Operations experience behind every marketplace call
          </h2>
          <p>
            Four years of hands-on Amazon and ecommerce operations {"—"} managing
            catalogs, inventory, and channel workflows at scale {"—"} is what
            grounds the research we hand back to brands.
          </p>

          <div className="split-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="split-stat-value">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="split-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

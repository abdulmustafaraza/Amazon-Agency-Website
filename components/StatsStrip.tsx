import Reveal from "@/components/Reveal";
import { stats } from "@/data/stats";

/**
 * Grey split section — image left, heading + paragraph + inline stats right.
 */
export default function StatsStrip() {
  return (
    <section className="section section-grey">
      <div className="container split">
        <Reveal className="split-media">
          <div className="well well-4-3 well-media">Track record image</div>
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

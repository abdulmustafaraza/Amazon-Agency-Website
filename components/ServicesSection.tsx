import type { CSSProperties } from "react";
import { services } from "@/data/services";

const serviceAccents: Record<
  string,
  {
    color: string;
    bg: string;
    border: string;
    hoverBorder: string;
    glow: string;
  }
> = {
  "free-amazon-leakage-audit": {
    color: "#10C8FF",
    bg: "rgba(16, 200, 255, 0.12)",
    border: "rgba(16, 200, 255, 0.34)",
    hoverBorder: "rgba(16, 200, 255, 0.52)",
    glow: "rgba(16, 200, 255, 0.14)",
  },
  "controlled-amazon-pilot": {
    color: "#6D35FF",
    bg: "rgba(109, 53, 255, 0.14)",
    border: "rgba(109, 53, 255, 0.35)",
    hoverBorder: "rgba(109, 53, 255, 0.52)",
    glow: "rgba(109, 53, 255, 0.16)",
  },
  "amazon-channel-management": {
    color: "#8A3FFC",
    bg: "rgba(139, 92, 255, 0.14)",
    border: "rgba(139, 92, 255, 0.35)",
    hoverBorder: "rgba(139, 92, 255, 0.52)",
    glow: "rgba(139, 92, 255, 0.16)",
  },
  "ecommerce-growth-support": {
    color: "#D12BFF",
    bg: "rgba(209, 43, 255, 0.12)",
    border: "rgba(209, 43, 255, 0.34)",
    hoverBorder: "rgba(209, 43, 255, 0.52)",
    glow: "rgba(209, 43, 255, 0.14)",
  },
  "social-content-support": {
    color: "#FF3CBF",
    bg: "rgba(255, 60, 191, 0.12)",
    border: "rgba(255, 60, 191, 0.34)",
    hoverBorder: "rgba(255, 60, 191, 0.52)",
    glow: "rgba(255, 60, 191, 0.14)",
  },
};

export default function ServicesSection() {
  const cardClass =
    "group flex min-h-[300px] flex-col rounded-[14px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[var(--service-accent-hover-border)] hover:bg-[#101034] hover:shadow-[0_24px_80px_var(--service-accent-glow)]";

  return (
    <section className="w-full bg-[#080826] py-20 md:py-24" id="services">
      <div className="site-container">
        <div className="max-w-[720px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D12BFF]">
            SERVICES
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#FFFFFF] md:text-5xl lg:text-6xl">
            Services built around brand control and ecommerce growth.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#C9C7E8] md:text-lg">
            Start with marketplace evidence, then choose the right level of
            support — from leakage audits and controlled Amazon pilots to
            ecommerce growth and content systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const accent = serviceAccents[service.id];

            return (
            <article
              className={cardClass}
              key={service.id}
              style={
                {
                  "--service-accent-hover-border": accent.hoverBorder,
                  "--service-accent-glow": accent.glow,
                } as CSSProperties
              }
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border text-xl leading-none"
                  style={{
                    backgroundColor: accent.bg,
                    borderColor: accent.border,
                    color: accent.color,
                  }}
                >
                  {service.icon}
                </span>
                {service.label ? (
                  <span className="rounded-full border border-[rgba(209,43,255,0.35)] bg-[rgba(255,60,191,0.14)] px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-[#F5F3FF]">
                    {service.label}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-7 text-[#FFFFFF]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">
                {service.description}
              </p>

              <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#C9C7E8]">
                {service.features.slice(0, 3).map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                      style={{ backgroundColor: accent.color }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                className="mt-auto pt-6 text-sm font-semibold text-[#FFFFFF] transition-colors group-hover:text-[#FF3CBF]"
                href={service.ctaHref}
              >
                {service.cta}
              </a>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



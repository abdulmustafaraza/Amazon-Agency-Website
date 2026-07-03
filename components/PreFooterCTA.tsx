import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Reveal from "@/components/Reveal";

export default function PreFooterCTA() {
  return (
    <section
      className="relative w-full scroll-mt-28 overflow-hidden bg-[#030319] py-16 md:py-20"
      id="contact"
    >
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D35FF]/15 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-40 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10C8FF]/10 blur-3xl" />

      <div className="site-container relative z-10">
        <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#FFFFFF] md:text-5xl">
              Ready to uncover marketplace leakage?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#C9C7E8] md:text-lg">
              Start with a focused review of Amazon search visibility, seller
              risk, and brand-control gaps.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <CalendlyPopupButton
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#6D35FF] bg-[#6D35FF] px-6 py-3 text-sm font-semibold text-[#FFFFFF] shadow-[0_18px_55px_rgba(209,43,255,0.28)] transition-colors hover:bg-[#8A3FFC]"
              text={"Request a Free Leakage Audit \u2192"}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}


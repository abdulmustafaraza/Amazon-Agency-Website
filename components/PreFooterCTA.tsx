import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Reveal from "@/components/Reveal";

export default function PreFooterCTA() {
  return (
    <section className="section section-grey scroll-mt-28" id="contact">
      <div className="container">
        <Reveal className="cta-block">
          <h2>Ready to uncover marketplace leakage?</h2>
          <p>
            Start with a focused review of Amazon search visibility, seller
            risk, and brand-control gaps.
          </p>
          <CalendlyPopupButton
            className="btn btn-on-dark"
            text="Request a free leakage audit"
          />
        </Reveal>
      </div>
    </section>
  );
}

import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Reveal from "@/components/Reveal";

export default function PreFooterCTA() {
  return (
    <section className="section section-grey scroll-mt-28" id="contact">
      <div className="site-container">
        <Reveal className="cta-block">
          {/* Light variant — the navy wordmark is unreadable on the dark block. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="ScopeScaler"
            className="cta-logo"
            height={212}
            src="/logos/scopescaler-lockup-light.png"
            width={1200}
          />
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

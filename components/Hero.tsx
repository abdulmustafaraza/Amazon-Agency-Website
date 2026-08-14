"use client";

import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import Reveal from "@/components/Reveal";
import { useState } from "react";

/**
 * Hero media. Renders the background video and swaps to the labelled grey
 * placeholder if the source is missing or fails to decode, so the layout
 * never collapses before the real asset lands.
 */
function HeroMedia() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="well well-16-10 well-media">Hero video placeholder</div>
    );
  }

  return (
    <div className="hero-media">
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        onError={() => setFailed(true)}
        playsInline
        poster="/video/hero-poster.jpg"
        preload="metadata"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <h1>Control Amazon before unauthorized sellers define your brand there.</h1>
          <p className="hero-sub">
            We show brands where they&apos;re losing sales on Amazon and other
            ecommerce platforms.
          </p>

          <div className="hero-actions">
            <CalendlyPopupButton
              className="btn btn-primary"
              text="Request a free leakage audit"
            />
            <a className="btn btn-secondary" href="/services">
              Review the process
            </a>
          </div>

          <div className="proof">
            <div aria-hidden="true" className="proof-avatars">
              <span className="proof-avatar" />
              <span className="proof-avatar" />
              <span className="proof-avatar" />
            </div>
            <p className="proof-text">
              Trusted by brand-led operators across Amazon, Shopify and eBay
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <HeroMedia />
        </Reveal>
      </div>
    </section>
  );
}

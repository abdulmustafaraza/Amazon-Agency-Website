"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "We don't sell on Amazon. Is this still relevant to us?",
    answer:
      "Usually yes. Customers may already be searching for your brand or product names on Amazon, and generic listings or reseller activity can capture that demand and shape marketplace perception before you ever open the channel.",
  },
  {
    question: "What does the free leakage audit actually cover?",
    answer:
      "A focused review of the visible signals: brand and product search demand, official versus generic listings, seller and listing review, and unauthorized seller risk checks — summarised into a leakage classification you can act on.",
  },
  {
    question: "Do you take over our Amazon account?",
    answer:
      "Only if that's what you want. The audit is research, not access. Ongoing channel management is a separate engagement, and plenty of brands stop after the audit and act on it internally.",
  },
  {
    question: "Which platforms and tools do you work across?",
    answer:
      "Amazon Seller Central, Shopify, eBay, Etsy, Walmart, and Sellercloud on the operations side, with Helium 10, Keepa, SellerAmp, and Jungle Scout for research and Monday.com, Klaviyo, and Okendo around workflow and retention.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Turnaround depends on catalog size and how tangled the marketplace picture is. Book a call and we'll tell you what's realistic for your brand before you commit to anything.",
  },
];

export default function FaqSection() {
  // First question opens by default.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section-white" id="faq">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-2">Common questions</h2>
        </Reveal>

        <Reveal className="faq" delay={0.08}>
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div className="faq-item" key={faq.question}>
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="faq-trigger"
                  onClick={() => setOpen(isOpen ? null : index)}
                  type="button"
                >
                  {faq.question}
                  <span aria-hidden="true" className="faq-icon">
                    +
                  </span>
                </button>

                <div className="faq-panel" data-open={isOpen} id={panelId}>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

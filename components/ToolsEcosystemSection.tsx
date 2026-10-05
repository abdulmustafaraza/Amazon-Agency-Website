"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";

type Tool = {
  name: string;
  logo: string;
};

// These exports are white monochrome artwork, which would be invisible on a
// light background. `.stack-cell img` inverts them to black in CSS — see the
// note there before swapping in re-exported assets.
const tools: Tool[] = [
  {
    name: "Amazon Seller Central",
    logo: "/logos/tools/amazonsellercentral.svg",
  },
  { name: "Shopify", logo: "/logos/tools/shopify.svg" },
  { name: "eBay", logo: "/logos/tools/ebay.svg" },
  { name: "Etsy", logo: "/logos/tools/etsy.svg" },
  { name: "Sellercloud", logo: "/logos/tools/sellercloud.svg" },
  { name: "Linnworks", logo: "/logos/tools/linnworks.svg" },
  { name: "Helium 10", logo: "/logos/tools/helium-10.svg" },
  { name: "Keepa", logo: "/logos/tools/keepa.svg" },
  { name: "SellerAmp", logo: "/logos/tools/selleramp.svg" },
  { name: "Jungle Scout", logo: "/logos/tools/junglescout.svg" },
  { name: "Monday.com", logo: "/logos/tools/monday.com.svg" },
  { name: "Okendo", logo: "/logos/tools/okendo.svg" },
  { name: "Klaviyo", logo: "/logos/tools/klaviyo.svg" },
  { name: "Amazon Influencer", logo: "/logos/tools/amazoninfluencer.svg" },
];

function ToolCell({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="stack-cell">
      {failed ? (
        <span>{tool.name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={tool.name}
          loading="lazy"
          onError={() => setFailed(true)}
          src={tool.logo}
        />
      )}
    </div>
  );
}

export default function ToolsEcosystemSection() {
  return (
    <section className="section section-white">
      <div className="site-container">
        <Reveal className="section-head">
          <p className="eyebrow">Operating stack</p>
          <h2 className="mt-2">Systems we work across</h2>
          <p>
            Marketplace, ecommerce, review, content, and workflow tools used to
            support brand-control and growth operations.
          </p>
        </Reveal>

        <Reveal className="stack-grid" delay={0.08}>
          {tools.map((tool) => (
            <ToolCell key={tool.name} tool={tool} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

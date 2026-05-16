"use client";

import { useState } from "react";

type Tool = {
  name: string;
  logo: string;
};

const tools: Tool[] = [
  {
    name: "Amazon Seller Central",
    logo: "/logos/tools/amazon-seller-central.svg",
  },
  { name: "Shopify", logo: "/logos/tools/shopify.svg" },
  { name: "Sellercloud", logo: "/logos/tools/sellercloud.svg" },
  { name: "Helium 10", logo: "/logos/tools/helium10.svg" },
  { name: "Keepa", logo: "/logos/tools/keepa.svg" },
  { name: "SellerAmp", logo: "/logos/tools/selleramp.svg" },
  { name: "Jungle Scout", logo: "/logos/tools/jungle-scout.svg" },
  { name: "Monday.com", logo: "/logos/tools/monday.svg" },
  { name: "Google Sheets", logo: "/logos/tools/google-sheets.svg" },
  { name: "Okendo", logo: "/logos/tools/okendo.svg" },
  { name: "Klaviyo", logo: "/logos/tools/klaviyo.svg" },
  {
    name: "Amazon Creator Connections",
    logo: "/logos/tools/amazon-creator-connections.svg",
  },
];

function ToolLogo({
  tool,
  hiddenLogo,
  onLogoError,
}: {
  tool: Tool;
  hiddenLogo: boolean;
  onLogoError: (logo: string) => void;
}) {
  if (hiddenLogo) {
    return (
      <span className="text-center text-[15px] font-bold leading-snug text-[#C9C7E8] opacity-[0.78] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-[#FFFFFF] group-hover:opacity-100">
        {tool.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={tool.name}
      className="max-h-[42px] max-w-[150px] object-contain opacity-[0.72] grayscale brightness-[1.8] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100"
      onError={() => onLogoError(tool.logo)}
      src={tool.logo}
    />
  );
}

export default function ToolsEcosystemSection() {
  const [failedLogos, setFailedLogos] = useState<string[]>([]);

  function handleLogoError(logo: string) {
    setFailedLogos((current) =>
      current.includes(logo) ? current : [...current, logo],
    );
  }

  return (
    <section className="w-full bg-[#05051A] py-20 md:py-[104px]">
      <div className="site-container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#D12BFF]">
            OPERATING STACK
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#FFFFFF] md:text-5xl lg:text-6xl">
            Systems we work across.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#C9C7E8] md:text-lg">
            Marketplace, ecommerce, review, content, and workflow tools used to
            support brand-control and growth operations.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-2 items-center justify-items-center gap-x-8 gap-y-11 md:grid-cols-4 md:gap-x-10 md:gap-y-12 lg:grid-cols-6 lg:gap-x-12">
          {tools.map((tool) => (
            <div
              className="group flex min-h-[48px] w-full items-center justify-center text-center"
              key={tool.name}
            >
              <ToolLogo
                hiddenLogo={failedLogos.includes(tool.logo)}
                onLogoError={handleLogoError}
                tool={tool}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

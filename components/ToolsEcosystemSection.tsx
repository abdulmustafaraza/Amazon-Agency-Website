"use client";

import { useEffect, useRef, useState } from "react";

type Tool = {
  name: string;
  logo: string;
};

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
  {
    name: "Amazon Influencer",
    logo: "/logos/tools/amazoninfluencer.svg",
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
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={tool.name}
      className="h-auto max-h-[52px] w-auto max-w-[190px] object-contain opacity-[0.82] transition duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100"
      onError={() => onLogoError(tool.logo)}
      src={tool.logo}
    />
  );
}

export default function ToolsEcosystemSection() {
  const [failedLogos, setFailedLogos] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldRun, setShouldRun] = useState(false);

  function handleLogoError(logo: string) {
    setFailedLogos((current) =>
      current.includes(logo) ? current : [...current, logo],
    );
  }

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const animationFrame = requestAnimationFrame(() => {
        setShouldRun(true);
      });

      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fire once the section is ~20% visible, OR once it already covers a
        // good chunk of the viewport. The second condition keeps the trigger
        // reliable when the logo grid reflows to fewer columns on mobile and
        // the section grows taller than the viewport.
        const coversViewport =
          entry.intersectionRect.height >= window.innerHeight * 0.2;

        if (entry.isIntersecting && (entry.intersectionRatio >= 0.2 || coversViewport)) {
          setShouldRun(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.2], rootMargin: "0px 0px -64px 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const vis = shouldRun ? " is-visible" : "";

  return (
    <section className="w-full bg-[#05051A] py-20 md:py-[104px]" ref={sectionRef}>
      <div className="site-container">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className={`reveal-fall${vis} text-4xl font-semibold leading-tight text-[#FFFFFF] md:text-5xl lg:text-6xl`}
          >
            Systems we work across.
          </h2>
          <p
            className={`reveal-fall${vis} mx-auto mt-6 max-w-3xl text-base leading-8 text-[#C9C7E8] md:text-lg`}
            style={{ transitionDelay: "0.15s" }}
          >
            Marketplace, ecommerce, review, content, and workflow tools used to
            support brand-control and growth operations.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {tools
            .filter((tool) => !failedLogos.includes(tool.logo))
            .map((tool, index) => (
            <div
              className={`reveal-rise${vis} group flex min-h-[82px] w-full items-center justify-center px-4 py-3 text-center`}
              key={tool.name}
              style={{ transitionDelay: `${0.35 + index * 0.06}s` }}
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

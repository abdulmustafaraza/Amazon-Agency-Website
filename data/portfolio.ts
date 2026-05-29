export type CaseStudyStat = {
  value: string;
  label?: string;
  kind?: "number" | "text";
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  heroHeadline: string;
  heroSummary: string;
  stats: CaseStudyStat[];
  overview: string;
  challenge: string;
  processTitle: string;
  processItems: string[];
  tools: string[];
  impact: string;
  takeaway: string;
  evidenceTitle?: string;
  evidenceBody?: string;
  examplesTitle?: string;
  examples?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "creator-connections-growth-support",
    title: "Creator Campaigns Driving Marketplace Sales",
    description:
      "Our team has supported Amazon Creator Connections campaigns for beauty and wellness products, including campaign setup, creator targeting, product selection, copywriting, content-angle strategy, and performance tracking across clicks, orders, sales, and spend.",
    tags: [
      "Amazon Creator Connections",
      "Affiliate Marketing",
      "Beauty Campaigns",
    ],
    image: "/portfolio/social-content.jpeg",
    heroHeadline: "Creator Campaigns Driving Marketplace Sales",
    heroSummary:
      "Amazon Creator Connections campaign support for beauty and wellness products, covering campaign setup, creator targeting, product selection, copywriting, content-angle strategy, and performance tracking.",
    stats: [
      { value: "$350K+", label: "Sales Tracked" },
      { value: "6.6K+", label: "Orders" },
      { value: "96K+", label: "Clicks" },
    ],
    overview:
      "Our team has supported Amazon Creator Connections campaigns for beauty and wellness products by helping structure campaigns, identify creator/content opportunities, prepare product selections, and track campaign activity across clicks, orders, sales, and spend.",
    challenge:
      "Creator and affiliate campaigns can create strong marketplace visibility, but performance depends on the right product selection, creator targeting, content angles, and tracking discipline. Without a clear workflow, brands can spend without understanding which campaign signals are actually driving traction.",
    processTitle: "Scope of Work",
    processItems: [
      "Amazon Creator Connections campaign setup support",
      "Creator targeting and campaign planning",
      "Product selection strategy",
      "Campaign copywriting and content-angle development",
      "Performance tracking across clicks, orders, sales, and spend",
      "Campaign review and optimization based on results",
      "Beauty and wellness product campaign support",
    ],
    tools: [
      "Amazon Creator Connections",
      "Amazon campaign dashboard",
      "Google Sheets",
      "Manual creator/content research",
      "Ecommerce performance tracking workflows",
    ],
    impact:
      "Our team has supported clearer campaign setup, stronger product-to-creator matching, and more disciplined tracking of creator activity across marketplace performance signals.",
    takeaway:
      "This work shows how creator campaigns can become more than one-off content pushes when they are supported by structured setup, product selection, campaign tracking, and performance review. The strongest value came from connecting creator activity to measurable marketplace signals like clicks, orders, sales, spend, and campaign response.",
    evidenceTitle: "Anonymized Campaign Evidence",
    evidenceBody:
      "Dashboard screenshots and campaign performance examples can be added here once anonymized assets are prepared.",
  },
  {
    slug: "multi-channel-ecommerce-operations",
    title: "20K+ SKU Multi-Channel Operations Support",
    description:
      "Our team has supported backend ecommerce operations across Amazon, Shopify, eBay, Walmart, and Sellercloud, including SKU management, inventory coordination, shadow SKUs, variants, kits, bundles, N-Matrix configurations, and channel sync workflows.",
    tags: ["Sellercloud", "Amazon", "Shopify", "Inventory Systems"],
    image: "/portfolio/ecommerce.jpeg",
    heroHeadline: "20K+ SKU Multi-Channel Operations Support",
    heroSummary:
      "Backend ecommerce operations support across Amazon, Shopify, eBay, Walmart, and Sellercloud, including SKU management, inventory coordination, shadow SKUs, variants, kits, bundles, N-Matrix configurations, and channel sync workflows.",
    stats: [
      { value: "20K+", label: "SKUs Managed" },
      { value: "4+", label: "Channels Supported" },
      {
        value: "Core Stack",
        label: "Sellercloud · Shopify · Amazon",
        kind: "text",
      },
    ],
    overview:
      "Our team has supported backend ecommerce operations across multiple marketplace and ecommerce channels, helping maintain SKU accuracy, inventory visibility, channel sync workflows, and product data organization.",
    challenge:
      "Multi-channel ecommerce operations break down quickly when product data, SKU structures, inventory workflows, and channel connections are not managed carefully. For brands and retailers operating across Amazon, Shopify, eBay, Walmart, and Sellercloud, small catalog or inventory issues can create larger operational problems.",
    processTitle: "Scope of Work",
    processItems: [
      "Sellercloud workflow support",
      "Shopify and Sellercloud coordination",
      "Amazon marketplace operations support",
      "SKU cleanup and product data management",
      "Shadow SKU support",
      "Variant, kit, bundle, and N-Matrix configuration support",
      "Inventory allocation and visibility workflows",
      "Multi-channel sync and operational troubleshooting",
    ],
    tools: [
      "Sellercloud",
      "Shopify",
      "Amazon Seller Central",
      "eBay",
      "Walmart Marketplace",
      "Google Sheets",
      "Monday.com",
    ],
    impact:
      "Our team has supported cleaner product data, stronger SKU organization, better inventory visibility, and more reliable cross-channel ecommerce operations.",
    takeaway:
      "This team experience shows that ScopeScaler is not only focused on research or keywords. Strong ecommerce growth also depends on operational execution behind the scenes. SKU accuracy, inventory structure, channel visibility, and marketplace workflows create the foundation that allows brands to scale without losing control.",
  },
  {
    slug: "amazon-leakage-demand-research",
    title: "Hidden Amazon Demand & Brand Leakage Research",
    description:
      "Our team has built research workflows to identify DTC beauty brands with Amazon search demand, weak or missing official marketplace presence, generic listings, and potential unauthorized seller activity using keyword data, Amazon search behavior, and marketplace audits.",
    tags: ["Helium 10", "Marketplace Audit", "Brand Control"],
    image: "/portfolio/amazon-marketplace.jpeg",
    heroHeadline: "Hidden Amazon Demand & Brand Leakage Research",
    heroSummary:
      "A research workflow for identifying DTC beauty brands with Amazon search demand, weak or missing official marketplace presence, generic listings, and potential unauthorized seller activity using keyword data, Amazon search behavior, and marketplace audits.",
    stats: [
      { value: "100+", label: "Brands Reviewed" },
      { value: "Marketplace Leakage", label: "Audits", kind: "text" },
      { value: "Amazon Demand", label: "Mapping", kind: "text" },
    ],
    overview:
      "Our team has built research workflows to identify DTC beauty brands with Amazon demand signals, weak marketplace control, no official Amazon presence, generic listings, or possible unauthorized seller activity.",
    challenge:
      "Many DTC brands assume Amazon is irrelevant if they are not officially selling there. In reality, customers may already be searching for the brand or product name, generic listings may be capturing demand, and reseller or lookalike listings can shape marketplace perception before the brand controls the channel.",
    processTitle: "Research Process",
    processItems: [
      "Brand keyword demand review",
      "Brand + product keyword review",
      "Amazon search behavior analysis",
      "Generic and hidden listing detection",
      "Marketplace presence classification",
      "Seller and listing review",
      "Unauthorized seller risk checks",
      "Screenshot evidence collection",
      "Amazon leakage classification",
    ],
    tools: [
      "Helium 10",
      "Amazon search",
      "SellerAmp",
      "Keepa",
      "Google Sheets",
      "Manual marketplace review",
    ],
    impact:
      "This team experience connects directly to ScopeScaler's core offer by turning unclear marketplace signals into evidence brands can act on before choosing a larger channel strategy.",
    takeaway:
      "This team experience connects directly to ScopeScaler's core offer. The research turns unclear marketplace signals into evidence brands can act on. It helps determine whether Amazon is a launch opportunity, a brand-control risk, or both, before a brand commits to a larger channel strategy.",
    examplesTitle: "Anonymized Examples",
    examples: [
      "Brand keyword demand found",
      "Brand + product keyword demand found",
      "Generic or hidden listing discovered",
      "Possible unauthorized seller risk identified",
      "Amazon leakage classification created",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

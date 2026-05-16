export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  proofPills: string[];
  image: string;
  heroHeadline: string;
  heroSummary: string;
  overview: string;
  challenge: string;
  processTitle: string;
  processItems: string[];
  tools: string[];
  impact: string;
  noteTitle?: string;
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "us-beauty-retailer-marketplace-operations",
    title: "US Beauty Retailer Marketplace Operations",
    category: "Amazon Operations · Shopify · Sellercloud · Beauty Retail",
    description:
      "Supported Amazon, Shopify, Sellercloud, and ecommerce operations for a Miami-based beauty retailer across marketplace and B2B workflows.",
    tags: ["Amazon Operations", "Shopify", "Sellercloud", "Beauty Retail"],
    proofPills: [
      "4+ Years Experience",
      "Multi-Channel Operations",
      "Amazon + Shopify + Sellercloud",
    ],
    image: "/portfolio/amazon-marketplace.jpeg",
    heroHeadline:
      "Marketplace Operations Support for a US-Based Beauty Retailer",
    heroSummary:
      "Remote marketplace and ecommerce operations support for a Miami-based beauty and wellness retailer operating across Amazon, Shopify, Sellercloud, and B2B workflows.",
    overview:
      "Worked remotely with a Miami-based multi-brand beauty and wellness retailer across Amazon, Shopify, inventory systems, and ecommerce operations.",
    challenge:
      "Managing ecommerce operations across multiple platforms requires accurate product data, listing consistency, inventory visibility, and fast issue resolution.",
    processTitle: "Scope of Work",
    processItems: [
      "Amazon Seller Central operations",
      "ASIN and catalog troubleshooting",
      "Listing and A+ Content updates",
      "Shopify product onboarding",
      "Sellercloud inventory workflows",
      "SKU, bundle, variant, and N-Matrix support",
      "Cross-channel operational coordination",
    ],
    tools: [
      "Amazon Seller Central",
      "Shopify",
      "Sellercloud",
      "Monday.com",
      "Keepa",
      "SellerAmp",
    ],
    impact:
      "Improved operational consistency, product data accuracy, inventory visibility, and marketplace execution support.",
  },
  {
    slug: "amazon-leakage-brand-control-research",
    title: "Amazon Leakage & Brand-Control Research",
    category:
      "Amazon Leakage · Unauthorized Sellers · Marketplace Audit · Beauty Brands",
    description:
      "Built a research workflow to identify beauty brands with Amazon demand, weak presence, generic listings, and possible unauthorized seller activity.",
    tags: [
      "Amazon Leakage",
      "Unauthorized Sellers",
      "Marketplace Audit",
      "Beauty Brands",
    ],
    proofPills: [
      "100+ Brands Reviewed",
      "Amazon Leakage Audits",
      "Zero / Weak Presence Mapping",
    ],
    image: "/portfolio/amazon-marketplace.jpeg",
    heroHeadline: "Finding Hidden Amazon Leakage for DTC Beauty Brands",
    heroSummary:
      "Research workflow for identifying DTC beauty brands with Amazon search demand, limited official control, weak listings, generic marketplace leakage, or possible unauthorized seller activity.",
    overview:
      "Built a research workflow to identify beauty brands with Amazon search demand, no official Amazon presence, weak listings, or possible unauthorized marketplace activity.",
    challenge:
      "Many DTC brands assume they are not on Amazon, but customer demand, generic listings, reseller listings, or packaging lookalikes may already exist.",
    processTitle: "Research Process",
    processItems: [
      "Amazon brand search audit",
      "Product-name search audit",
      "Generic listing detection",
      "Seller name review",
      "Packaging/lookalike comparison",
      "Keyword demand validation",
      "Screenshot evidence collection",
    ],
    tools: [
      "Amazon Search",
      "Seller research",
      "Keyword review",
      "Screenshot evidence",
      "Marketplace signal mapping",
    ],
    impact:
      "This research process helps brands understand whether Amazon represents a launch opportunity, a brand-control risk, or both.",
    noteTitle: "Example Finding — Anonymized",
    note:
      "A DTC beauty product appeared on Amazon under a generic brand field with similar packaging and recent sales activity, even though the official brand did not appear to control the listing. Brand names and ASINs are anonymized to protect research confidentiality.",
  },
  {
    slug: "creator-review-conversion-systems",
    title: "Creator, Review & Conversion Systems",
    category:
      "Creator Campaigns · Okendo · Reviews · Conversion Optimization",
    description:
      "Supported creator campaigns, review flows, UGC incentives, and conversion-focused ecommerce systems for beauty brand operations.",
    tags: [
      "Creator Campaigns",
      "Okendo",
      "Reviews",
      "Conversion Optimization",
    ],
    proofPills: [
      "Creator Campaign Support",
      "Review Flow Optimization",
      "UGC + Affiliate Workflows",
    ],
    image: "/portfolio/social-content.jpeg",
    heroHeadline: "Review, Creator & Conversion Workflow Support",
    heroSummary:
      "Support for creator campaigns, review-generation systems, UGC incentives, affiliate visibility, and ecommerce conversion workflows for beauty ecommerce operations.",
    overview:
      "Supported ecommerce growth workflows focused on creator content, reviews, UGC, affiliate visibility, and PDP conversion improvement.",
    challenge:
      "Beauty ecommerce brands need more than traffic. They need reviews, social proof, creator content, strong PDPs, and conversion-focused customer journeys.",
    processTitle: "Scope of Work",
    processItems: [
      "Amazon Creator Connections campaign setup",
      "Creator targeting and product selection",
      "Campaign copywriting",
      "Publisher and creator research",
      "Okendo review request flow analysis",
      "Review email copy improvements",
      "UGC/review incentive planning",
      "KPI tracking for review rate, CTR, and click-to-review conversion",
    ],
    tools: [
      "Amazon Creator Connections",
      "Okendo",
      "Klaviyo",
      "Shopify",
      "Sakari",
      "Storyly",
      "Manual creator/content research",
    ],
    impact:
      "Helped improve the systems behind social proof, creator-driven visibility, review collection, and ecommerce conversion support.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

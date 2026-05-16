export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  icon: string;
  label?: string;
};

export const services: Service[] = [
  {
    id: "free-amazon-leakage-audit",
    title: "Free Amazon Leakage Audit",
    description:
      "A focused review of visible Amazon search, seller, and brand-control signals.",
    features: ["Brand search review", "Seller risk check", "Leakage summary"],
    cta: "View Audit Details →",
    ctaHref: "/services#free-leakage-audit",
    icon: "◇",
    label: "START HERE",
  },
  {
    id: "controlled-amazon-pilot",
    title: "Controlled Amazon Pilot",
    description:
      "A limited Amazon test for validating demand without losing brand control.",
    features: ["SKU planning", "Content setup", "Weekly signal review"],
    cta: "View Pilot Details →",
    ctaHref: "/services#controlled-amazon-pilot",
    icon: "✦",
  },
  {
    id: "amazon-channel-management",
    title: "Amazon Channel Management",
    description:
      "Ongoing support for controlled Amazon presence and channel discipline.",
    features: ["Listing optimization", "PPC management", "Channel reporting"],
    cta: "View Management Details →",
    ctaHref: "/services#amazon-channel-management",
    icon: "◈",
  },
  {
    id: "ecommerce-growth-support",
    title: "Ecommerce Growth Support",
    description:
      "Selective support connecting marketplace decisions with broader ecommerce growth.",
    features: ["Product messaging", "Shopify support", "Buyer journey review"],
    cta: "View Growth Details →",
    ctaHref: "/services#ecommerce-growth-support",
    icon: "▣",
  },
  {
    id: "social-content-support",
    title: "Social Media & Content Support",
    description:
      "Content systems tied to product messaging, campaigns, and ecommerce performance.",
    features: ["Product storytelling", "Campaign content", "Creative systems"],
    cta: "View Content Details →",
    ctaHref: "/services#social-content-support",
    icon: "✧",
  },
];

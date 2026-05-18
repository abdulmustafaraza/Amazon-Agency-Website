export type SiteContent = {
  name: string;
  email: string;
  tagline: string;
  hero: {
    eyebrow: string;
    headline: string;
    supportingCopy: string;
    secondaryCopy: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const siteContent: SiteContent = {
  name: "ScopeScaler",
  email: "hello@scopescaler.com",
  tagline: "Marketplace control for brand-led ecommerce operators.",
  hero: {
    eyebrow: "Amazon marketplace control for brand-led operators",
    headline:
      "Control Amazon before unauthorized sellers define your brand there.",
    supportingCopy:
      "ScopeScaler helps DTC ecommerce brands uncover marketplace leakage, reduce customer confusion, and build a controlled Amazon presence when the channel makes strategic sense.",
    secondaryCopy:
      "We work with brand owners to assess Amazon demand, clarify marketplace risk, and create a disciplined path forward without compromising brand control.",
    primaryCta: "Request a Free Leakage Audit",
    secondaryCta: "Review the Process",
  },
};

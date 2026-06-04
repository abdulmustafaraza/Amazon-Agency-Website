import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Request an Amazon Marketplace Leakage Audit | ScopeScaler",
  description:
    "Request a focused review of Amazon search visibility, seller risk, brand-control gaps, competitor activity, and recommended next steps for your ecommerce brand.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}

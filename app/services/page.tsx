import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesPageBody from "@/components/ServicesPageBody";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Marketplace Control Services | ScopeScaler",
  description:
    "Explore ScopeScaler services for Amazon marketplace leakage audits, unauthorized seller risk checks, demand research, Sellercloud workflows, Shopify operations, SKU management, and controlled Amazon growth support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesPageBody />
      <Footer />
    </>
  );
}

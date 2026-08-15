import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://scopescaler.com";
const title = "ScopeScaler | Amazon Marketplace Intelligence & Brand Control";
const description =
  "ScopeScaler helps ecommerce brands identify Amazon marketplace leakage, unauthorized seller risk, search demand, and backend operational gaps across Amazon, Shopify, Sellercloud, and multi-channel workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Amazon marketplace control",
    "Amazon brand leakage audit",
    "unauthorized seller audit",
    "Amazon demand research",
    "ecommerce operations support",
    "Sellercloud operations",
    "Shopify Amazon operations",
    "Amazon Creator Connections",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Amazon marketplace intelligence, leakage audits, unauthorized seller research, and ecommerce operations support for brands that need stronger marketplace control.",
    url: siteUrl,
    siteName: "ScopeScaler",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScopeScaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Amazon marketplace intelligence, leakage audits, unauthorized seller research, and ecommerce operations support for brands that need stronger marketplace control.",
    images: ["/og-image.png"],
  },
  // Mark-only artwork — the full lockup is unreadable at 16px.
  icons: {
    icon: [
      { url: "/logos/scopescaler-mark.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ScopeScaler",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    sameAs: [
      "https://www.instagram.com/scopescaler/",
      "https://www.linkedin.com/in/scope-scaler-17b0a1411",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ScopeScaler",
    url: siteUrl,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={inter.variable}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}

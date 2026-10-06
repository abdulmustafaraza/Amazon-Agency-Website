import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ScopeScaler",
  description:
    "The terms for using the ScopeScaler website and requesting information about its services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const sections = [
  {
    title: "Website Use",
    body: "Visitors agree to use this website responsibly and not interfere with site operation.",
  },
  {
    title: "Service Information",
    body: "Website content is informational and does not guarantee specific business, marketplace, or revenue outcomes.",
  },
  {
    title: "No Guaranteed Results",
    body: "Amazon audits, marketplace reviews, and growth services are based on visible signals, analysis, and strategy. Results are not guaranteed.",
  },
  {
    title: "Intellectual Property",
    body: "Website content, design, copy, and materials belong to ScopeScaler unless otherwise stated.",
  },
  {
    title: "User Submissions",
    body: "If users submit brand or business information, they confirm they have the right to share it.",
  },
  {
    title: "Third-Party Links",
    body: "The website may link to external tools, calendars, or platforms. ScopeScaler is not responsible for third-party websites.",
  },
  {
    title: "Limitation of Liability",
    body: "ScopeScaler is not liable for indirect losses from website use or reliance on general website information.",
  },
  {
    title: "Changes to Terms",
    body: "These terms may be updated from time to time.",
  },
  {
    title: "Contact",
    body: `Questions about these Terms of Service can be sent to ${siteContent.email}.`,
  },
  {
    title: "Last Updated",
    body: "2026",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="section section-white">
        <article className="site-container max-w-[760px]">
          <Reveal>
            <p className="eyebrow">Terms of service</p>
            <h1 className="mt-3">Terms of Service</h1>
            <p className="lead mt-4">
              These Terms of Service explain the basic terms for using the
              ScopeScaler website and requesting information about services.
            </p>
          </Reveal>

          <div className="mt-10 space-y-7">
            {sections.map((section, index) => (
              <Reveal as="section" key={section.title}>
                <h2 className="text-[1.05rem] font-semibold">
                  {index + 1}. {section.title}
                </h2>
                <p className="mt-2">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}


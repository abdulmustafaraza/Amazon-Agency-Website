import Reveal from "@/components/Reveal";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/#about" },
  { label: "Free Audit", href: "/contact" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Settings", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <Reveal>
          <nav aria-label="Footer navigation" className="footer-links">
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer-bottom">
            <p>
              {"©"} 2026 {siteContent.name}. All rights reserved.
            </p>
            <div className="footer-legal">
              {legalLinks.map((item) => (
                <Link href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

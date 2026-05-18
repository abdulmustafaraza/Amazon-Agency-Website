import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Portfolio", href: "/#selected-work" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const navLinkClassName =
  "border-b border-transparent pb-1 text-[#F5F3FF] hover:text-[#FF3CBF] transition-colors duration-200 hover:border-[#FF3CBF]";

export default function Header() {
  return (
    <header className="h-[72px] w-full border-b border-[rgba(255,255,255,0.10)] bg-[#030319]">
      <div className="site-container flex h-full items-center justify-between gap-8">
        <Link
          aria-label="ScopeScaler home"
          className="flex shrink-0 items-center"
          href="/"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="ScopeScaler"
            className="h-[34px] w-auto object-contain md:h-[44px]"
            src="/logos/scopescaler-logo.svg"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-semibold text-[#C9C7E8] lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              className={navLinkClassName}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className="shrink-0 rounded bg-[#6D35FF] px-[26px] py-3 text-xs font-[800] uppercase tracking-[0.08em] text-[#FFFFFF] shadow-[0_0_24px_rgba(209,43,255,0.26)] transition-colors duration-200 hover:bg-[#8A3FFC] hover:shadow-[0_0_26px_rgba(209,43,255,0.35)]"
          href="/contact"
        >
          FREE LEAKAGE AUDIT
        </Link>
      </div>
    </header>
  );
}



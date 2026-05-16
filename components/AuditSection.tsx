const iconClassName = "h-[22px] w-[22px] text-[#8A3FFC]";

const auditIcons = {
  brandSearch: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClassName}
      aria-hidden="true"
    >
      <path
        d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15.5 15.5 4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8.5 10.5 1.5 1.5 3-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  productSearch: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClassName}
      aria-hidden="true"
    >
      <path
        d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m15.5 15.5 4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 12V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sellerListing: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClassName}
      aria-hidden="true"
    >
      <path
        d="M4 9h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9l1.5-4h11L19 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9v10h12V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  genericListing: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClassName}
      aria-hidden="true"
    >
      <path
        d="M7 5h12v10H7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9H3v10h12v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sellerRisk: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[22px] w-[22px] text-[#FF4E64]"
      aria-hidden="true"
    >
      <path
        d="M12 3L22 20H2L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 17H12.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  demandSignal: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[22px] w-[22px] text-[#10C8FF]"
      aria-hidden="true"
    >
      <path
        d="M12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7.8 8.3C6.8 9.4 6.2 10.8 6.2 12.5C6.2 14.2 6.8 15.6 7.8 16.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.2 8.3C17.2 9.4 17.8 10.8 17.8 12.5C17.8 14.2 17.2 15.6 16.2 16.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.8 5.8C3.1 7.6 2.2 9.9 2.2 12.5C2.2 15.1 3.1 17.4 4.8 19.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.2 5.8C20.9 7.6 21.8 9.9 21.8 12.5C21.8 15.1 20.9 17.4 19.2 19.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

type AuditIconKey = keyof typeof auditIcons;

type AuditCard = {
  icon: AuditIconKey;
  number: string;
  title: string;
  description: string;
  microLabel?: string;
};

const auditCards: AuditCard[] = [
  {
    icon: "brandSearch",
    number: "01",
    title: "Brand Search Audit",
    microLabel: "WHAT WE CHECK",
    description:
      "Brand-name searches, search result confusion, unofficial listings, and whether customers see controlled brand results.",
  },
  {
    icon: "productSearch",
    number: "02",
    title: "Product-Name Search",
    microLabel: "WHAT WE CHECK",
    description:
      "Product-name searches, category terms, generic competitors, and demand paths that may redirect shoppers.",
  },
  {
    icon: "sellerListing",
    number: "03",
    title: "Seller / Listing Review",
    description:
      "We identify visible listings, sellers, duplicate pages, weak content, or uncontrolled marketplace activity.",
  },
  {
    icon: "genericListing",
    number: "04",
    title: "Generic Listing Detection",
    description:
      "We look for generic or competitor listings that may be capturing brand-aware demand.",
  },
  {
    icon: "sellerRisk",
    number: "05",
    title: "Unauthorized Seller Risk",
    description:
      "We flag visible seller risk, pricing confusion, and product presentation issues that may affect brand control.",
  },
  {
    icon: "demandSignal",
    number: "06",
    title: "Demand Signal Review",
    description:
      "We review marketplace signals to decide whether the next move should be protection, testing, management, or no action.",
  },
];

export default function AuditSection() {
  return (
    <section className="bg-[#030319] pb-[110px] pt-[72px]" id="how-it-works">
      <div className="site-container">
        <div className="overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[radial-gradient(circle_at_12%_20%,rgba(209,43,255,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(16,200,255,0.16),transparent_30%),linear-gradient(135deg,#080826_0%,#030319_62%,#030319_100%)] p-[28px] md:p-[56px]">
          <div className="grid grid-cols-1 gap-[44px] lg:grid-cols-[0.75fr_1.65fr]">
            <div className="max-w-[360px]">
              <p className="mb-[18px] text-xs font-extrabold uppercase tracking-[0.14em] text-[#10C8FF]">
                THE AUDIT
              </p>

              <h2 className="mb-6 text-[36px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#FFFFFF] md:text-[48px]">
                We look for
                <br />
                evidence before
                <br />
                recommending
                <br />
                action.
              </h2>

              <p className="mb-7 text-base leading-[1.7] text-[#C9C7E8]">
                Our framework isolates concrete marketplace signals. We map
                exactly how and where your brand interacts with external demand
                ecosystems, ensuring every strategic decision is anchored in
                verifiable data, not assumptions.
              </p>

              <div className="flex gap-3 rounded-md border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] px-5 py-[18px] text-sm italic leading-[1.55] text-[#C9C7E8]">
                <span className="text-[#D12BFF]" aria-hidden="true">
                  ✦
                </span>
                <p>
                  &ldquo;No fake guarantees. No reseller pitch. Just marketplace
                  evidence.&rdquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {auditCards.map((card) => (
                <article
                  className="group relative min-h-[238px] overflow-hidden rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-[22px] transition-all duration-300 hover:border-[rgba(209,43,255,0.50)] hover:bg-[#101034] hover:shadow-[0_0_28px_rgba(209,43,255,0.18)]"
                  key={card.number}
                >
                  <span className="mb-5 block">{auditIcons[card.icon]}</span>
                  <span className="absolute right-[18px] top-[18px] text-xs font-extrabold text-[rgba(255,255,255,0.18)]">
                    {card.number}
                  </span>

                  <h3 className="mb-[14px] text-[22px] font-extrabold leading-[1.15] text-[#FFFFFF]">
                    {card.title}
                  </h3>

                  {card.microLabel ? (
                    <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[rgba(16,200,255,0.62)]">
                      {card.microLabel}
                    </p>
                  ) : null}

                  <p className="text-sm leading-[1.55] text-[#C9C7E8]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-11 border-t border-[rgba(255,255,255,0.08)] pt-6">
            <p className="mx-auto flex max-w-[760px] items-start justify-center gap-3 text-center text-[11px] font-extrabold uppercase leading-6 tracking-[0.14em] text-[#A8A5C8]">
              <span
                className="mt-2 h-2 w-2 flex-none rounded-full bg-[#10C8FF]"
                aria-hidden="true"
              />
              AUDIT FINDINGS ARE BASED ON VISIBLE MARKETPLACE SIGNALS AND SEARCH
              EVIDENCE — NOT GUARANTEED REVENUE PROJECTIONS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


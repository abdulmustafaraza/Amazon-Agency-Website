import Image from "next/image";

const founders = [
  {
    name: "Ukasha Shabbir",
    eyebrow: "FOUNDER, SCOPESCALER",
    image: "/images/team/founder.svg",
    linkedin: "https://www.linkedin.com/in/ukashashabbir/",
    bio: [
      "Ukasha got into ecommerce back in 2020 and never really looked back. Early on, he even started his own local ecommerce venture in Pakistan — it didn’t last forever, but it taught him more than any job could, and it’s where the founder bug really bit.",
      "For close to four years now, he’s run the day-to-day operations for a US beauty brand, managing thousands of products across Amazon and Shopify all the way from Karachi. If something’s tangled in Seller Central, broken in the inventory sync, or quietly leaking sales between channels, that’s the kind of thing he’s been untangling for years — and it’s that same instinct, spotting where a brand is losing ground in the marketplace and figuring out how to win it back, that shaped what ScopeScaler does today.",
      "He tends to think in systems, which is partly just how his brain works and partly the policy-making and systems-thinking side of him that comes out everywhere. When he’s not in a spreadsheet, he’s usually off doing leadership and social-impact work somewhere.",
    ],
  },
  {
    name: "Abdul Mustafa Raza",
    eyebrow: "CO-FOUNDER, SCOPESCALER",
    image: "/images/team/co-founder.svg",
    linkedin: "https://www.linkedin.com/in/abdul-mustafa-raza-26a69b311/",
    bio: [
      "Mustafa found his thing in 2023 and went all in. He started out handling Amazon accounts and has since worked across the full range of Amazon business models — FBA, wholesale, and private label — picking up real experience in shipment management, sales, and brand research along the way.",
      "But the part he genuinely loves is the research: sourcing products, sizing up suppliers, reading demand and competition, and figuring out which brands and categories actually have pull on Amazon. He’s not a “trust your gut” operator — he’d rather look at the data, the margins, and the gaps, and then make the call. Building his own ecommerce agency was the goal from early on, and this is it.",
    ],
  },
];

export default function LeadershipSlider() {
  return (
    <div className="relative overflow-hidden bg-[#080826] py-24 md:py-[110px]">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[22%] top-[-60px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#10C8FF] opacity-[0.055] blur-[130px]" />
        <div className="absolute bottom-[-60px] right-[22%] h-[480px] w-[480px] translate-x-1/2 rounded-full bg-[#D12BFF] opacity-[0.055] blur-[130px]" />
      </div>

      <div className="site-container relative">
        {/* ── Lead-in ── */}
        <div className="mx-auto mb-16 max-w-[720px] text-center md:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#10C8FF]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
              Leadership Team
            </p>
            <span className="h-px w-9 bg-[#10C8FF]" />
          </div>
          <p className="text-lg leading-[1.75] text-[#C9C7E8] md:text-xl">
            ScopeScaler started with two people who kept circling the same
            problem from different angles: brands letting the marketplace decide
            where they show up, instead of controlling it themselves. So we
            built the thing we wished existed.
          </p>
        </div>

        {/* ── Founders grid ── */}
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          {founders.map((founder) => (
            <article
              className="flex flex-col items-center"
              key={founder.name}
            >
              {/* Photo */}
              <div className="relative mx-auto mb-8 w-full max-w-[340px] sm:max-w-full">
                {/* Gradient glow halo */}
                <div
                  aria-hidden
                  className="absolute inset-x-[5%] bottom-[-4%] top-[12%] -z-0 rounded-full opacity-55 blur-[72px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 58%, #6D35FF 0%, #10C8FF 48%, transparent 74%)",
                  }}
                />
                {/* Photo with feathered mask — no hard border */}
                <div
                  className="relative aspect-square w-full overflow-hidden"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 88% 86% at 50% 38%, black 38%, transparent 88%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 88% 86% at 50% 38%, black 38%, transparent 88%)",
                  }}
                >
                  <Image
                    alt={`${founder.name} — ${founder.eyebrow}`}
                    className="object-cover object-top"
                    fill
                    sizes="(min-width: 640px) 50vw, 340px"
                    src={founder.image}
                    unoptimized
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full">
                <p className="text-center text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
                  {founder.eyebrow}
                </p>
                <h3 className="mt-4 text-center text-[clamp(30px,3.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#FFFFFF]">
                  {founder.name}
                </h3>

                <div className="mx-auto mt-6 max-w-[480px] space-y-4 sm:mx-0 sm:max-w-none">
                  {founder.bio.map((paragraph) => (
                    <p
                      className="text-base leading-[1.75] text-[#C9C7E8]"
                      key={paragraph.slice(0, 48)}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex justify-center sm:justify-start">
                  <a
                    className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.16)] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#10C8FF] hover:text-[#10C8FF]"
                    href={founder.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Connect on LinkedIn &#x2197;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

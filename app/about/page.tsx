import Footer from "@/components/Footer";
import Header from "@/components/Header";

const riskPoints = [
  "Brand search visibility",
  "Product-name demand",
  "Unauthorized seller risk",
  "Generic listing leakage",
];

const approachCards = [
  {
    title: "Map visible demand",
    text: "We look at brand searches, product terms, category paths, and marketplace search behavior to understand where demand already appears.",
  },
  {
    title: "Identify leakage and risk",
    text: "We review seller activity, confusing listings, generic result paths, and presentation gaps that may weaken brand control.",
  },
  {
    title: "Recommend the right move",
    text: "The next step may be an audit, a controlled Amazon pilot, channel management, ecommerce support, or simply monitoring.",
  },
  {
    title: "Build with control",
    text: "If Amazon becomes part of the plan, the channel should support the brand - not compromise pricing, presentation, or customer experience.",
  },
];

const differenceCards = [
  {
    title: "We do not start with assumptions",
    text: "We begin with visible marketplace evidence before recommending a channel move.",
  },
  {
    title: "We protect brand control",
    text: "Pricing, listing quality, product presentation, and customer experience matter more than rushing into sales volume.",
  },
  {
    title: "We keep the model flexible",
    text: "Some brands need an audit. Some need a pilot. Some need ongoing management. Some should wait. The recommendation depends on the signals.",
  },
];

const helpItems = [
  "DTC beauty brands",
  "Skincare and personal care brands",
  "Wellness and product-led ecommerce brands",
  "Brands with search demand but unclear Amazon presence",
  "Brands seeing seller or listing confusion",
  "Brands considering Amazon but wanting a controlled path",
];

const boundaryCards = [
  "Not a reseller-first operation",
  "Not a wholesale arbitrage model",
  "Not a generic ecommerce agency",
  "Not a guaranteed revenue promise",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-9 bg-[#10C8FF]" />
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
        {children}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#080826]">
        <section className="bg-[radial-gradient(circle_at_80%_10%,rgba(209,43,255,0.18),transparent_30%),#030319] pb-[90px] pt-[110px]">
          <div className="site-container">
            <Eyebrow>ABOUT US</Eyebrow>
            <h1 className="max-w-[820px] text-[clamp(42px,5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#FFFFFF]">
              Built for brands that need marketplace control before Amazon gets
              messy.
            </h1>
            <p className="mt-8 max-w-[760px] text-lg leading-8 text-[#C9C7E8] md:text-xl">
              We help DTC ecommerce and beauty brands understand where Amazon
              demand already exists, where marketplace leakage may be happening,
              and what controlled next step makes strategic sense.
            </p>
            <p className="mt-5 max-w-[760px] text-base leading-8 text-[#A8A5C8] md:text-lg">
              Our work starts with visible evidence {"\u2014"} brand search
              behavior, product-name demand, listing visibility, seller risk,
              and channel signals {"\u2014"} before recommending audits,
              pilots, management, or broader ecommerce support.
            </p>
          </div>
        </section>

        <section className="bg-[#080826] py-24 md:py-[110px]">
          <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div>
              <Eyebrow>WHY THIS EXISTS</Eyebrow>
              <h2 className="max-w-[720px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                DTC brands often ignore Amazon until someone else defines them
                there.
              </h2>
              <p className="mt-6 max-w-[720px] text-lg leading-8 text-[#C9C7E8]">
                Customers may search for your brand, product names, and category
                terms on Amazon even if you do not officially sell there. When
                that demand is unmanaged, it can leak into generic listings,
                competitor products, confusing results, or unauthorized seller
                activity.
              </p>
              <p className="mt-5 max-w-[720px] text-lg leading-8 text-[#C9C7E8]">
                The point is not to force every brand onto Amazon. The point is
                to understand what is already happening and decide whether
                protection, testing, management, or no action is the right move.
              </p>
            </div>

            <div className="rounded-[14px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-7 shadow-[0_18px_60px_rgba(255,60,191,0.12)] md:p-9">
              <h3 className="text-2xl font-extrabold text-[#FFFFFF]">
                What we look for
              </h3>
              <div className="mt-7 grid gap-4">
                {riskPoints.map((point) => (
                  <div className="flex items-center gap-4" key={point}>
                    <span className="h-2 w-2 flex-none rounded-full bg-[#6D35FF]" />
                    <p className="text-base font-semibold text-[#C9C7E8]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#080826] py-24 md:py-[110px]">
          <div className="site-container">
            <Eyebrow>OUR APPROACH</Eyebrow>
            <h2 className="max-w-[720px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Evidence first. Channel decisions second.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {approachCards.map((card, index) => (
                <article
                  className="rounded-[12px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#6D35FF] hover:bg-[#101034]"
                  key={card.title}
                >
                  <p className="text-xs font-extrabold tracking-[0.14em] text-[#6D35FF]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-8 text-xl font-extrabold leading-7 text-[#FFFFFF]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#C9C7E8]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#101034] py-24 md:py-[110px]">
          <div className="site-container">
            <Eyebrow>DIFFERENT BY DESIGN</Eyebrow>
            <h2 className="max-w-[860px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Not a reseller. Not a wholesale pitch. Not marketplace automation
              hype.
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {differenceCards.map((card) => (
                <article
                  className="rounded-[12px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-7 shadow-[0_18px_60px_rgba(255,60,191,0.12)] transition-all duration-300 hover:border-[#6D35FF] hover:bg-[#101034]"
                  key={card.title}
                >
                  <div className="mb-8 h-1 w-12 bg-[#6D35FF]" />
                  <h3 className="text-2xl font-extrabold leading-8 text-[#FFFFFF]">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#C9C7E8]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080826] py-24 md:py-[110px]">
          <div className="site-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <Eyebrow>WHO WE HELP</Eyebrow>
              <h2 className="max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
                Built for brand-led operators.
              </h2>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#C9C7E8]">
                We work best with ecommerce brands that care about brand
                presentation, customer trust, and controlled growth {"\u2014"}
                especially DTC beauty, skincare, wellness, personal care, and
                product-led consumer brands.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {helpItems.map((item) => (
                <div
                  className="rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[#101034] px-5 py-5 text-base font-bold text-[#C9C7E8] shadow-[0_14px_40px_rgba(255,60,191,0.10)] transition-colors hover:border-[#6D35FF]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080826] py-24 md:py-[110px]">
          <div className="site-container">
            <Eyebrow>CLEAR BOUNDARIES</Eyebrow>
            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              What we are not.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {boundaryCards.map((card) => (
                <div
                  className="rounded-[10px] border border-[rgba(255,255,255,0.10)] bg-[#101034] p-6 text-lg font-extrabold leading-7 text-[#FFFFFF] shadow-[0_14px_40px_rgba(255,60,191,0.10)] transition-colors hover:border-[#6D35FF]"
                  key={card}
                >
                  {card}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#C9C7E8]">
              We focus on evidence, control, and strategic channel decisions
              {"\u2014"} not hype.
            </p>
          </div>
        </section>

        <section className="bg-[#030319] py-20 md:py-[100px]" id="free-audit">
          <div className="site-container text-center">
            <h2 className="mx-auto max-w-[820px] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#FFFFFF] md:text-6xl">
              Want to know what Amazon is already showing your customers?
            </h2>
            <p className="mx-auto mt-6 max-w-[640px] text-lg leading-8 text-[#C9C7E8]">
              Start with a focused marketplace review before making channel
              decisions.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex justify-center bg-[#6D35FF] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
                href="/contact"
              >
                Request the Free Leakage Audit {"\u2192"}
              </a>
              <a
                className="inline-flex justify-center border border-[rgba(255,255,255,0.18)] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                href="/services"
              >
                View Services {"\u2192"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}




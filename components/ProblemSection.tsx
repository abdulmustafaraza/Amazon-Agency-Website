type ProblemCard = {
  icon: string;
  iconColor: string;
  status?: string;
  title: string;
  text: string;
  solutionTitle: string;
  solutionText: string;
};

const problemCards: ProblemCard[] = [
  {
    icon: "⊘",
    iconColor: "#FF4E64",
    status: "Risk detected",
    title: "Unauthorized Seller Risk",
    text: "Sellers can appear around your brand without your control over pricing, content, customer experience, or product presentation.",
    solutionTitle: "Map the risk",
    solutionText:
      "Review visible sellers, pricing confusion, listing quality, and presentation gaps that may weaken brand control.",
  },
  {
    icon: "▣",
    iconColor: "#D12BFF",
    title: "Marketplace Leakage",
    text: "Brand-aware shoppers may end up on generic listings, competitor products, or confusing marketplace results.",
    solutionTitle: "Map the leakage",
    solutionText:
      "Review brand searches, product searches, and category paths to see where demand is being redirected.",
  },
  {
    icon: "▤",
    iconColor: "#6D35FF",
    title: "Weak Brand Search Protection",
    text: "Your brand name and product terms can show demand while your official presence remains unclear or missing.",
    solutionTitle: "Protect search demand",
    solutionText:
      "Identify branded search gaps and recommend whether protection, a pilot, or monitoring makes sense.",
  },
  {
    icon: "◇",
    iconColor: "#10C8FF",
    title: "Lost Demand Validation",
    text: "Without checking Amazon search and listing signals, you may never know whether the channel is worth protecting or testing.",
    solutionTitle: "Validate the next move",
    solutionText:
      "Use visible marketplace signals to decide whether the next move should be audit, pilot, management, or no action.",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#EEF0F6] py-[110px]"
      id="problem"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-90"
        src="/backgrounds/problem-wave-bg.jpeg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(238,240,246,0.92)_0%,rgba(238,240,246,0.82)_42%,rgba(238,240,246,0.35)_72%,transparent_100%)]"
      />

      <div className="site-container relative z-10">
        <div className="max-w-[720px]">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#D12BFF]">
            THE PROBLEM
          </p>
          <h2 className="text-4xl font-black leading-[1.05] text-[#030319] md:text-5xl lg:text-6xl">
            Where Marketplace Demand Leaks
          </h2>
          <p className="mt-6 max-w-[720px] text-base font-medium leading-[1.7] text-[#2E2D45] md:text-lg">
            Even if you do not officially sell on Amazon, customers may still
            search for your brand, product names, and category terms there.
            When that demand is unmanaged, it can leak into listings and
            sellers you do not control.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <article
              className="group relative overflow-hidden rounded-[10px] border border-[rgba(109,53,255,0.18)] bg-[rgba(255,255,255,0.68)] p-7 shadow-[0_18px_50px_rgba(5,5,26,0.06)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:border-[#D12BFF] hover:shadow-[0_20px_60px_rgba(109,53,255,0.14)] lg:min-h-[360px]"
              key={card.title}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none"
                  style={{ color: card.iconColor }}
                >
                  {card.icon}
                </span>
                {card.status ? (
                  <span className="rounded-full border border-[rgba(255,78,100,0.30)] bg-[rgba(255,78,100,0.10)] px-3 py-1 text-xs font-semibold text-[#FF4E64]">
                    {card.status}
                  </span>
                ) : null}
              </div>

              <div className="mt-10 lg:pr-1">
                <h3 className="text-xl font-semibold leading-7 text-[#05051A]">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#4B4966]">
                  {card.text}
                </p>
              </div>

              <div className="relative z-20 mt-7 border-t border-[rgba(109,53,255,0.18)] bg-[#F8F9FF] pt-6 shadow-[0_-18px_40px_rgba(5,5,26,0.08)] transition-transform duration-300 ease-out lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[50%] lg:translate-y-full lg:px-7 lg:py-[22px] lg:group-hover:translate-y-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#6D35FF]">
                  THE SOLUTION
                </p>
                <h4 className="mt-3 text-lg font-extrabold leading-6 text-[#030319]">
                  {card.solutionTitle}
                </h4>
                <p className="mt-3 text-sm leading-[1.6] text-[#4B4966]">
                  {card.solutionText}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProblemCard = {
  icon: string;
  iconColor: string;
  status?: string;
  title: string;
  text: string;
};

const problemCards: ProblemCard[] = [
  {
    icon: "⊘",
    iconColor: "#FF4E64",
    status: "Risk detected",
    title: "Unauthorized Seller Risk",
    text: "Sellers list around your brand with no control over pricing, content, or customer experience.",
  },
  {
    icon: "▣",
    iconColor: "#D12BFF",
    title: "Marketplace Leakage",
    text: "Brand-aware shoppers land on generic listings or competitor products instead of you.",
  },
  {
    icon: "▤",
    iconColor: "#6D35FF",
    title: "Weak Brand Search Protection",
    text: "Your brand and product terms show demand while your official presence stays unclear.",
  },
  {
    icon: "◇",
    iconColor: "#10C8FF",
    title: "Lost Demand Validation",
    text: "Without checking Amazon signals, you can't tell if the channel is worth protecting.",
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
            Even if you don&apos;t sell on Amazon, customers still search for
            your brand there {"—"} and unmanaged demand leaks to listings
            and sellers you don&apos;t control.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <article
              className="group relative overflow-hidden rounded-[10px] border border-[rgba(109,53,255,0.18)] bg-[rgba(255,255,255,0.68)] p-7 shadow-[0_18px_50px_rgba(5,5,26,0.06)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:border-[#D12BFF] hover:shadow-[0_20px_60px_rgba(109,53,255,0.14)]"
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

              <h3 className="mt-8 text-xl font-semibold leading-7 text-[#05051A]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#4B4966]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

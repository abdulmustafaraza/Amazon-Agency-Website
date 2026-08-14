import Reveal from "@/components/Reveal";

type ProblemCard = {
  title: string;
  text: string;
  well: string;
};

// First row (2 cards), then second row (3 cards).
const rowOne: ProblemCard[] = [
  {
    title: "Unauthorized Seller Risk",
    text: "Sellers list around your brand with no control over pricing, content, or customer experience.",
    well: "Seller risk screenshot",
  },
  {
    title: "Marketplace Leakage",
    text: "Brand-aware shoppers land on generic listings or competitor products instead of you.",
    well: "Leakage example",
  },
];

const rowTwo: ProblemCard[] = [
  {
    title: "Weak Brand Search Protection",
    text: "Your brand and product terms show demand while your official presence stays unclear.",
    well: "Search demand chart",
  },
  {
    title: "Lost Demand Validation",
    text: "Without checking Amazon signals, you can't tell if the channel is worth protecting.",
    well: "Demand signal view",
  },
  {
    title: "Backend Operational Gaps",
    text: "SKU structures, inventory, and channel sync drift until small catalog issues become larger operational problems.",
    well: "Operations dashboard",
  },
];

function Card({ card, delay }: { card: ProblemCard; delay: number }) {
  return (
    <Reveal className="card flex flex-col" delay={delay}>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
      <div className="well well-16-10 mt-4">{card.well}</div>
    </Reveal>
  );
}

export default function ProblemSection() {
  return (
    <section className="section section-white" id="problem">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-2">Where marketplace demand leaks</h2>
          <p>
            Even if you don&apos;t sell on Amazon, customers still search for
            your brand there {"—"} and unmanaged demand leaks to listings
            and sellers you don&apos;t control.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {rowOne.map((card, index) => (
            <Card card={card} delay={index * 0.08} key={card.title} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {rowTwo.map((card, index) => (
            <Card card={card} delay={index * 0.08} key={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

const trustPoints = [
  "Visible marketplace review",
  "No guaranteed revenue claims",
  "Brand-control focused",
];

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#030319] py-20 md:py-[90px]" id="contact">
      <div className="site-container">
        <div className="overflow-hidden rounded-3xl border border-[#10C8FF]/30 bg-[#080826] p-7 shadow-[0_28px_100px_rgba(209,43,255,0.20)] md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#10C8FF]">
                START WITH EVIDENCE
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#FFFFFF] md:text-5xl lg:text-6xl">
                See what Amazon is already showing your customers.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#C9C7E8] md:text-lg">
                Start with a focused marketplace review before making decisions
                about Amazon expansion, seller issues, or channel strategy.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#A8A5C8] md:text-base">
                No fake guarantees. No reseller pitch. Just visible marketplace
                evidence and a clear next step.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-[#6D35FF] bg-[#6D35FF] px-6 py-3 text-sm font-semibold text-[#FFFFFF] shadow-[0_18px_55px_rgba(209,43,255,0.28)] transition-colors hover:bg-[#8A3FFC]"
                  href="/contact"
                >
                  Request the Free Leakage Audit {"\u2192"}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] px-6 py-3 text-sm font-semibold text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
                  href="/services"
                >
                  Review Services
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {trustPoints.map((point) => (
                  <div
                    className="flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.10)] bg-[#030319]/45 px-4 py-2 text-sm text-[#C9C7E8]"
                    key={point}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#10C8FF]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.10)] bg-[#030319] p-6 shadow-[inset_0_0_80px_rgba(255,60,191,0.14)]">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#6D35FF]/20 blur-3xl" />
              <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-[#10C8FF]/10 blur-2xl" />

              <div className="relative z-10 flex h-full min-h-[312px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#10C8FF]/35 bg-[#10C8FF]/10 text-2xl text-[#10C8FF]">
                      ◈
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8A5C8]">
                        Control signal
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#FFFFFF]">
                        Marketplace evidence
                      </p>
                    </div>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-[#D12BFF] shadow-[0_0_24px_rgba(209,43,255,0.7)]" />
                </div>

                <div className="my-10 space-y-4">
                  <div className="h-3 w-4/5 rounded-full bg-[#101034]/10" />
                  <div className="h-3 w-2/3 rounded-full bg-[#101034]/10" />
                  <div className="h-3 w-5/6 rounded-full bg-[#10C8FF]/20" />
                  <div className="h-3 w-1/2 rounded-full bg-[#101034]/10" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#080826] p-4">
                    <span className="block h-2 w-2 rounded-full bg-[#10C8FF]" />
                    <div className="mt-5 h-2 w-full rounded-full bg-[#101034]/10" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-[#101034]/10" />
                  </div>
                  <div className="rounded-2xl border border-[#10C8FF]/25 bg-[#080826] p-4 shadow-[0_18px_48px_rgba(209,43,255,0.18)]">
                    <span className="block h-2 w-2 rounded-full bg-[#6D35FF]" />
                    <div className="mt-5 h-2 w-full rounded-full bg-[#10C8FF]/20" />
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-[#101034]/10" />
                  </div>
                  <div className="rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#080826] p-4">
                    <span className="block h-2 w-2 rounded-full bg-[#D12BFF]" />
                    <div className="mt-5 h-2 w-full rounded-full bg-[#101034]/10" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-[#101034]/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



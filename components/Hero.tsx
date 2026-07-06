import CalendlyPopupButton from "@/components/CalendlyPopupButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-[#030319]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[58vw] object-cover object-center opacity-60"
        src="/backgrounds/home-hero-marketplace-control.jpeg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(16,200,255,0.55),transparent_30%),radial-gradient(circle_at_72%_70%,rgba(255,60,191,0.45),transparent_35%),radial-gradient(circle_at_45%_55%,rgba(109,53,255,0.55),transparent_42%),radial-gradient(circle_at_85%_58%,rgba(255,78,100,0.24),transparent_24%),linear-gradient(135deg,#030319_0%,#080826_38%,#6D35FF_68%,#FF3CBF_88%,#10C8FF_100%)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#030319_0%,rgba(3,3,25,0.95)_34%,rgba(3,3,25,0.72)_58%,rgba(3,3,25,0.30)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(3,3,25,0.05)_0%,rgba(3,3,25,0.18)_55%,#030319_100%)]"
      />

      <div className="site-container relative z-10 w-full py-[96px]">
        <div className="w-full max-w-[760px] text-left">
          <div className="hero-anim-eyebrow mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#10C8FF]" aria-hidden="true" />
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#10C8FF]">
              AMAZON MARKETPLACE CONTROL FOR BRAND-LED OPERATORS
            </p>
          </div>

          <h1 className="hero-anim-headline hero-heading">
            <p>Control Amazon before</p>
            <p className="hero-heading-highlight">Unauthorized Sellers</p>
            <p>define your brand</p>
            <p>there.</p>
          </h1>

          <p className="hero-anim-subtext mb-[38px] max-w-[620px] text-lg font-medium leading-[1.55] text-[#FFFFFF]">
            We show brands where they&apos;re losing sales on Amazon and other
            ecommerce platforms.
          </p>

          <div className="hero-anim-buttons flex flex-wrap items-center gap-3.5">
            <CalendlyPopupButton
              className="rounded bg-[#6D35FF] px-[30px] py-[15px] text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:bg-[#8A3FFC]"
              text="REQUEST A FREE LEAKAGE AUDIT"
            />
            <a
              className="rounded border border-[rgba(255,255,255,0.18)] bg-transparent px-[30px] py-[15px] text-xs font-extrabold uppercase tracking-[0.08em] text-[#FFFFFF] transition-colors hover:border-[#FF3CBF] hover:text-[#FF3CBF]"
              href="/services"
            >
              REVIEW THE PROCESS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



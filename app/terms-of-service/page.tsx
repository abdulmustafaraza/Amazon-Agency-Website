import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Website Use",
    body: "Visitors agree to use this website responsibly and not interfere with site operation.",
  },
  {
    title: "Service Information",
    body: "Website content is informational and does not guarantee specific business, marketplace, or revenue outcomes.",
  },
  {
    title: "No Guaranteed Results",
    body: "Amazon audits, marketplace reviews, and growth services are based on visible signals, analysis, and strategy. Results are not guaranteed.",
  },
  {
    title: "Intellectual Property",
    body: "Website content, design, copy, and materials belong to CompanyName unless otherwise stated.",
  },
  {
    title: "User Submissions",
    body: "If users submit brand or business information, they confirm they have the right to share it.",
  },
  {
    title: "Third-Party Links",
    body: "The website may link to external tools, calendars, or platforms. CompanyName is not responsible for third-party websites.",
  },
  {
    title: "Limitation of Liability",
    body: "CompanyName is not liable for indirect losses from website use or reliance on general website information.",
  },
  {
    title: "Changes to Terms",
    body: "These terms may be updated from time to time.",
  },
  {
    title: "Contact",
    body: "Questions about these Terms of Service can be sent to hello@companyname.com.",
  },
  {
    title: "Last Updated",
    body: "2026",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="bg-[#030319] py-20 md:py-[110px]">
        <article className="site-container max-w-[860px]">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A3FFC]">
            TERMS OF SERVICE
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#FFFFFF] md:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#C9C7E8]">
            These Terms of Service explain the basic terms for using the
            CompanyName website and requesting information about services.
          </p>
          <p className="mt-5 border-l-2 border-[#8A3FFC] pl-4 text-sm leading-7 text-[#A8A5C8]">
            This page is a general template and should be reviewed before
            launch.
          </p>

          <div className="mt-14 space-y-10">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="text-2xl font-extrabold leading-tight text-[#FFFFFF]">
                  {index + 1}. {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#A8A5C8]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}


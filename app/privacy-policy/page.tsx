import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: "CompanyName may collect information such as your name, email address, business information submitted through forms, and website usage information.",
  },
  {
    title: "How We Use Information",
    body: "Information may be used to respond to inquiries, provide audit or service information, improve the website experience, and send relevant updates if you opt in.",
  },
  {
    title: "Information Sharing",
    body: "CompanyName does not sell personal information. Information may be shared only with service providers needed to operate the website or respond to requests.",
  },
  {
    title: "Cookies and Analytics",
    body: "The website may use cookies or analytics tools to understand usage and improve performance.",
  },
  {
    title: "Data Security",
    body: "Reasonable safeguards are used to protect submitted information, but no online transmission is guaranteed to be fully secure.",
  },
  {
    title: "Your Choices",
    body: "You can request updates, corrections, or removal of submitted information by contacting the business.",
  },
  {
    title: "Contact",
    body: "Questions about this Privacy Policy can be sent to hello@companyname.com.",
  },
  {
    title: "Last Updated",
    body: "2026",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#030319] py-20 md:py-[110px]">
        <article className="site-container max-w-[860px]">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A3FFC]">
            PRIVACY POLICY
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#FFFFFF] md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#C9C7E8]">
            This Privacy Policy explains how CompanyName may collect, use, and
            protect information submitted through this website.
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


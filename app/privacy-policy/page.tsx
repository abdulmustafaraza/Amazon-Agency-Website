import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/data/siteContent";

const sections = [
  {
    title: "Information We Collect",
    body: "ScopeScaler may collect information such as your name, email address, business information submitted through forms, and website usage information.",
  },
  {
    title: "How We Use Information",
    body: "Information may be used to respond to inquiries, provide audit or service information, and improve the website experience.",
  },
  {
    title: "Information Sharing",
    body: "ScopeScaler does not sell personal information. Information may be shared only with service providers needed to operate the website or respond to requests.",
  },
  {
    id: "cookies",
    title: "Cookies",
    body: "This website does not set advertising or analytics cookies, so there are no cookie settings to manage. If you open the booking calendar, Calendly may set its own cookies, which are covered by Calendly's privacy policy.",
  },
  {
    title: "Data Security",
    body: "Reasonable safeguards are used to protect submitted information, but no online transmission is guaranteed to be fully secure.",
  },
  {
    title: "Your Choices",
    body: `You can request updates, corrections, or removal of submitted information by emailing ${siteContent.email}.`,
  },
  {
    title: "Contact",
    body: `Questions about this Privacy Policy can be sent to ${siteContent.email}.`,
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
      <main className="section section-white">
        <article className="site-container max-w-[760px]">
          <Reveal>
            <p className="eyebrow">Privacy policy</p>
            <h1 className="mt-3">Privacy Policy</h1>
            <p className="lead mt-4">
              This Privacy Policy explains how ScopeScaler may collect, use, and
              protect information submitted through this website.
            </p>
          </Reveal>

          <div className="mt-10 space-y-7">
            {sections.map((section, index) => (
              <Reveal as="section" id={section.id} key={section.title}>
                <h2 className="text-[1.05rem] font-semibold">
                  {index + 1}. {section.title}
                </h2>
                <p className="mt-2">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

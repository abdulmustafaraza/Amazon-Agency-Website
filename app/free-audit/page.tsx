import AuditRequestForm from "@/components/AuditRequestForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FreeAuditPage() {
  return (
    <>
      <Header />
      <main>
        <AuditRequestForm />
      </main>
      <Footer />
    </>
  );
}

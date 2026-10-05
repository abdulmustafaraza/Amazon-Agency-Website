import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function MultiChannelEcommerceOperationsPage() {
  const study = getCaseStudy("multi-channel-ecommerce-operations");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

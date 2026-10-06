import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudyMetadata, getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export const metadata = caseStudyMetadata("multi-channel-ecommerce-operations");

export default function MultiChannelEcommerceOperationsPage() {
  const study = getCaseStudy("multi-channel-ecommerce-operations");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

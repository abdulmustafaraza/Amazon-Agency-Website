import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function UsBeautyRetailerMarketplaceOperationsPage() {
  const study = getCaseStudy("us-beauty-retailer-marketplace-operations");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

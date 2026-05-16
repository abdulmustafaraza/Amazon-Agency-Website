import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";

export default function UsBeautyRetailerMarketplaceOperationsPage() {
  const study = getCaseStudy("us-beauty-retailer-marketplace-operations");

  if (!study) {
    return null;
  }

  return <CaseStudyPage study={study} />;
}

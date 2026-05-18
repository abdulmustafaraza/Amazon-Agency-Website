import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";

export default function MultiChannelEcommerceOperationsPage() {
  const study = getCaseStudy("multi-channel-ecommerce-operations");

  if (!study) {
    return null;
  }

  return <CaseStudyPage study={study} />;
}

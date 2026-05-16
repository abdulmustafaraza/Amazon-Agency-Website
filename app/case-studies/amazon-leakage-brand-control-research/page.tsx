import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";

export default function AmazonLeakageBrandControlResearchPage() {
  const study = getCaseStudy("amazon-leakage-brand-control-research");

  if (!study) {
    return null;
  }

  return <CaseStudyPage study={study} />;
}

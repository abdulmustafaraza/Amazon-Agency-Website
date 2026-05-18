import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";

export default function AmazonLeakageDemandResearchPage() {
  const study = getCaseStudy("amazon-leakage-demand-research");

  if (!study) {
    return null;
  }

  return <CaseStudyPage study={study} />;
}

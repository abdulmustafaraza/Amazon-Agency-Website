import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudyMetadata, getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export const metadata = caseStudyMetadata("amazon-leakage-demand-research");

export default function AmazonLeakageDemandResearchPage() {
  const study = getCaseStudy("amazon-leakage-demand-research");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

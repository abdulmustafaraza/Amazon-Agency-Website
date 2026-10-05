import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function AmazonLeakageDemandResearchPage() {
  const study = getCaseStudy("amazon-leakage-demand-research");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

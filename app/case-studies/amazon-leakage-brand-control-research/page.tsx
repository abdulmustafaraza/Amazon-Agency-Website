import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function AmazonLeakageBrandControlResearchPage() {
  const study = getCaseStudy("amazon-leakage-brand-control-research");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

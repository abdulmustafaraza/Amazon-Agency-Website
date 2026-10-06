import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudyMetadata, getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export const metadata = caseStudyMetadata("creator-connections-growth-support");

export default function CreatorConnectionsGrowthSupportPage() {
  const study = getCaseStudy("creator-connections-growth-support");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

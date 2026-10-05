import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function CreatorConnectionsGrowthSupportPage() {
  const study = getCaseStudy("creator-connections-growth-support");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

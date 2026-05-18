import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";

export default function CreatorConnectionsGrowthSupportPage() {
  const study = getCaseStudy("creator-connections-growth-support");

  if (!study) {
    return null;
  }

  return <CaseStudyPage study={study} />;
}

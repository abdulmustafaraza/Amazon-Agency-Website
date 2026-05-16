import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";

export default function CreatorReviewConversionSystemsPage() {
  const study = getCaseStudy("creator-review-conversion-systems");

  if (!study) {
    return null;
  }

  return <CaseStudyPage study={study} />;
}

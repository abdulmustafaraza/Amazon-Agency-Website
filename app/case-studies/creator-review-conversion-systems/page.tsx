import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default function CreatorReviewConversionSystemsPage() {
  const study = getCaseStudy("creator-review-conversion-systems");

  if (!study) {
    notFound();
  }

  return <CaseStudyPage study={study} />;
}

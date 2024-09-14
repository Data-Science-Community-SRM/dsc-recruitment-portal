import Domain from "@/components/domainsections/domain";
import { researchData } from "@/components/domainsections/data";

export default function ResearchPage() {
  return (
    <Domain
      imgSrc={researchData.imgSrc}
      altText={researchData.altText}
      sections={researchData.sections}
    />
  );
}

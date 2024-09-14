import Domain from "@/components/domainsections/domain";
import { technicalData } from "@/components/domainsections/data";

export default function ResearchPage() {
  return (
    <Domain
      imgSrc={technicalData.imgSrc}
      altText={technicalData.altText}
      sections={technicalData.sections}
    />
  );
}

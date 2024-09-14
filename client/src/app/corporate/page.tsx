import Domain from "@/components/domainsections/domain";
import { corporateData } from "@/components/domainsections/data";

export default function CorporatePage() {
  return (
    <Domain
      imgSrc={corporateData.imgSrc}
      altText={corporateData.altText}
      sections={corporateData.sections}
    />
  );
}

import Domain from "@/components/domainsections/domain";
import { creativesData } from "@/components/domainsections/data";

export default function CreativesPage() {
  return (
    <Domain
      imgSrc={creativesData.imgSrc}
      altText={creativesData.altText}
      sections={creativesData.sections}
    />
  );
}

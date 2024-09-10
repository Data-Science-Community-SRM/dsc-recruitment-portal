import Image from "next/image";
import Form from "../components/domains/form";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <Form
        includeGithub={true}
        domain={"technical"}
        subdomains={["frontend", "backend"]}
        description="Some description about the domain"
      />
    </div>
  );
}

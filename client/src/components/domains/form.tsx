"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { register } from "@/lib/submitAction";
import { useToast } from "@/hooks/use-toast";

export default function Form({
  subdomains,
  domain: domainProp,
}: {
  subdomains: string[];
  description: string;
  domain?: string;
}) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [srmEmail, setSrmEmail] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [github, setGithub] = useState("");
  const [subDomain, setSubDomain] = useState(subdomains[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const pathname = usePathname();

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (
        !firstname ||
        !registrationNumber ||
        !srmEmail ||
        !personalEmail ||
        !phoneNumber ||
        !department ||
        !year ||
        (domainProp == 'Technical' || domainProp == 'Research') ||
        !subDomain
      ) {
        setError("Please fill all the fields.");
        return;
      }

      const domain = domainProp || pathname.split("/")[2] || "";

      const data = {
        firstName: firstname,
        lastName: lastname,
        registrationNumber,
        srmEmail,
        personalEmail,
        phoneNumber,
        department,
        year: parseInt(year, 10),
        github,
        subDomain,
        domain,
      };
      const responseData = await register(domain, data);
      if (responseData?.success) {
        toast({
          title: `Thank you for registering, You will receive an email shortly!🚀`,
        });
        setFirstName("");
        setLastName("");
        setRegistrationNumber("");
        setSrmEmail("");
        setPersonalEmail("");
        setPhoneNumber("");
        setDepartment("");
        setYear("");
        setGithub("");
        setSubDomain(subdomains[0]);
      } else {
        throw new Error(
          `Registration failed: ${
            responseData?.message?.error_description ||
            responseData.error.issues[0].message
          }`
        );
      }
    } catch (error: any) {
      console.error(error?.message);
      setError(error?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#1c0c2c] text-white">
      <form className="my-8" onSubmit={handleSubmit}>
        {/* Display error message if any */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4 rounded-md text-sm shadow-sm">
            {/* <p className="font-medium">Error</p> */}
            <p>{error}</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Input
              id="firstname"
              placeholder="First name"
              type="text"
              className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Input
            id="registrationNumber"
            placeholder="Registration Number"
            type="text"
            className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
            required
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Input
            id="srmEmail"
            placeholder="SRM Email ID"
            type="email"
            className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
            required
            value={srmEmail}
            onChange={(e) => setSrmEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Input
            id="personalEmail"
            placeholder="Personal Email ID"
            type="email"
            className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
            required
            value={personalEmail}
            onChange={(e) => setPersonalEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Input
            id="phoneNumber"
            placeholder="Phone Number"
            type="tel"
            className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="">
            <Input
              id="department"
              placeholder="Department"
              type="text"
              required
              className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="">
            <Input
              id="year"
              placeholder="Which year btw?"
              type="number"
              min={1}
              max={3}
              required
              value={year}
              className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
              onChange={(e) => setYear(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        {(domainProp == 'Technical' || domainProp == 'Research')  && (
          <LabelInputContainer className="mb-4">
            <Input
              id="github"
              placeholder="www.github.com/username"
              type="url"
              className="bg-[#11071f] text-white placeholder-gray-400 rounded-md"
              required
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </LabelInputContainer>
        )}
        {subdomains.length > 1 && (
          <LabelInputContainer className="mb-4">
            <select
              id="subDomain"
              name="subDomain"
              value={subDomain}
              required
              className={cn(
                `flex h-10 w-full border-none bg-[#11071f] text-white placeholder-gray-400 shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none
              focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 transition duration-400`
              )}
              onChange={(e) => setSubDomain(e.target.value)}
            >
              {subdomains.map((subdomain, index) => {
                return (
                  <option value={subdomain} key={index}>
                    {subdomain}
                  </option>
                );
              })}
            </select>
          </LabelInputContainer>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-2 h-[1px] w-full" />

        <button
          className="bg-[#11071f] relative group/btn from-gray-700 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-25 disabled:cursor-not-allowed transition duration-300"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit →"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

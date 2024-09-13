"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function Form({
  includeGithub,
  domain,
  subdomains,
  description,
}: {
  includeGithub: boolean;
  domain: string;
  subdomains: string[];
  description: string;
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
  const [linkedin, setLinkedin] = useState("");
  const [subDomain, setSubDomain] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const data = {
      firstname,
      lastname,
      registrationNumber,
      srmEmail,
      personalEmail,
      phoneNumber,
      department,
      year,
      github,
      linkedin,
      subDomain,
    };
    console.log(data);
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {domain.toUpperCase()}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {description}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            {/* <Label htmlFor="firstname">First name</Label> */}
            <Input
              id="firstname"
              placeholder="First name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            {/* <Label htmlFor="lastname">Last name</Label> */}
            <Input
              id="lastname"
              placeholder="Last name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          {/* <Label htmlFor="registrationNumber">Registration number</Label> */}
          <Input
            id="registrationNumber"
            placeholder="Registration Number"
            type="text"
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          {/* <Label htmlFor="srmEmail">SRM email</Label> */}
          <Input
            id="srmEmail"
            placeholder="SRM Email ID"
            type="email"
            onChange={(e) => setSrmEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          {/* <Label htmlFor="personalEmail">Personal email</Label> */}
          <Input
            id="personalEmail"
            placeholder="Email"
            type="email"
            onChange={(e) => setPersonalEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          {/* <Label htmlFor="phoneNumber">Phone number</Label> */}
          <Input
            id="phoneNumber"
            placeholder="Phone Number"
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="">
            {/* <Label htmlFor="department">Department</Label> */}
            <Input
              id="department"
              placeholder="Department"
              type="text"
              onChange={(e) => setDepartment(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="">
            {/* <Label htmlFor="year">Year</Label> */}
            <Input
              id="year"
              placeholder="Which year btw?"
              type="number"
              onChange={(e) => setYear(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        {includeGithub && (
          <div>
            <LabelInputContainer className="mb-4">
              {/* <Label htmlFor="github">Github</Label> */}
              <Input
                id="github"
                placeholder="github.com/username"
                type="text"
                onChange={(e) => setGithub(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              {/* <Label htmlFor="linkedin">Linkedin</Label> */}
              <Input
                id="linkedin"
                placeholder="linkedin.com/in/username"
                type="text"
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </LabelInputContainer>
          </div>
        )}
        <LabelInputContainer className="mb-4">
          {/* <Label htmlFor="subDomain">Subdomain</Label> */}
          <select
            id="cars"
            name="cars"
            className={cn(
              `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `
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

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
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

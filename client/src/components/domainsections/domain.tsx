import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

type DomainProps = {
  imgSrc: string;
  altText: string;
  sections: { heading: string; content: string }[];
};

export default function Domain({ imgSrc, altText, sections }: DomainProps) {
  return (
    <div className="min-h-screen bg-[#11071F] pb-12 xl:pb-96">
      <Navbar />
      <div className="p-12 flex flex-col gap-16 xl:gap-28">
        <Image
          className="absolute z-10 w-60 lg:w-96"
          src={imgSrc}
          alt={altText}
          width={500}
          height={500}
        />

        {sections.map((section, index) => (
          <div key={index} className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat">
              {section.heading}
            </h1>
            <h2 className="text-white text-base text-center lg:text-2xl font-semibold w-2/3 mt-16 font-Montserrat">
              {section.content.split("\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

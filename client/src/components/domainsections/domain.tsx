"use client";
import Header from "@/components/home/header";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type DomainProps = {
    imgSrc: string;
    altText: string;
    sections: { heading: string; content: string }[];
};

export default function Domain({ imgSrc, altText, sections }: DomainProps) {
    return (
        <div className="min-h-screen bg-[#11071F] pb-12 xl:pb-40 relative">
            <Header />
            <div className="p-6 flex flex-col gap-10 xl:gap-16 relative z-20">
                <motion.div
                    className="absolute z-10 w-60 lg:w-96"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={imgSrc}
                        alt={altText}
                        width={500}
                        height={500}
                    />
                </motion.div>

                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="z-50 flex flex-col items-center justify-center text-center mt-24" // Added margin-top to move title down
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    >
                        <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold font-Montserrat">
                            {section.heading}
                        </h1>

                        <h2 className="text-white text-sm md:text-lg lg:text-xl mt-6 font-light leading-relaxed w-4/5 md:w-3/5 font-Montserrat">
                            {section.content.split("\n").map((line, lineIndex) => (
                                <motion.div
                                    key={lineIndex}
                                    className="mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: lineIndex * 0.1 }}
                                >
                                    {line}
                                    <br />
                                </motion.div>
                            ))}
                        </h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

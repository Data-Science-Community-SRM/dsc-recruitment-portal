"use client";
import Header from "@/components/home/header";
import Footer from "../footer";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type DomainProps = {
    imgSrc: string;
    altText: string;
    sections: { heading: string; content: string }[];
};

export default function Domain({ imgSrc, sections }: DomainProps) {
    const [hasAnimated, setHasAnimated] = useState(false);

    const iconVariants = {
        initial: { opacity: 0, x: -50, y: -50, rotate: 0 },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: [0, 10, -10, 0],
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror" as "mirror", //eslint-disable-line @typescript-eslint/prefer-as-const
            },
        },
    };

    return (
        <div className="min-h-screen bg-[#11071F] relative">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants}
                className="absolute top-4 left-4"
            >
                <Image
                    src="/path/to/your/icon.svg"
                    alt="Icon"
                    width={50}
                    height={50}
                    className="h-12 w-12"
                />
            </motion.div>

            <Header />
            <div
                className="p-6 flex flex-col gap-10 xl:gap-16 relative pt-24"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundSize: "20% auto",
                }}
            >
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        onViewportEnter={() => {
                            if (!hasAnimated) setHasAnimated(true);
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.15,
                        }}
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
            <Footer />
        </div>
    );
}
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const History: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const text = "We Are Recruiting!!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index += 1;
            if (index >= text.length) {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
    };
    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
    };

    return (
        <motion.section
            className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 mt-8 lg:mt-16"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
            <motion.div
                className="w-full lg:w-2/3 mb-6 lg:mb-0 text-center"
                variants={headingVariants}
            >
                <motion.h2
                    className="text-2xl lg:text-4xl xl:text-5xl mb-4 font-light Montserrat relative inline-block"
                    variants={headingVariants}
                >
                    {displayText}
                    <motion.span
                        className="absolute animate-blink text-3xl"
                        style={{ right: '-30px', top: '0' }}
                        variants={{ visible: { opacity: [0, 1, 0] }, hidden: { opacity: 0 } }} // Blink effect
                        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        |
                    </motion.span>
                </motion.h2>
                <motion.p
                    className="text-base lg:text-lg xl:text-xl text-gray-400 mt-4 mx-auto max-w-6xl text-left"
                    variants={paragraphVariants}
                >
                    We are a technology-driven Data Science-based student-led Innovation community at SRMIST.
                    Our aim is to foster development and entrepreneurial skills among students and work as a community that inspires thousands.
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default History;
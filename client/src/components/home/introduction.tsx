"use client";
import React from 'react';
import Image from 'next/image';
import Juniper from './white.svg';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
    return (
        <section className="flex flex-col items-center lg:flex-row lg:justify-between mb-12 relative px-6 lg:px-20 pt-16 lg:pt-24">
            <div className="flex flex-col items-center lg:flex-row w-full lg:w-auto">
                <motion.div
                    className="w-72 h-72 lg:w-80 lg:h-80 relative mb-8 lg:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <Image
                        src={Juniper}
                        alt="Cube Logo representing Data Science Community SRM"
                        layout="fill"
                        objectFit="contain"
                        className="filter drop-shadow-[0_0_20px_rgba(138,43,226,0.7)]"
                    />
                </motion.div>
                <div className="text-center lg:text-left lg:ml-12">
                    <motion.h1
                        className="text-2xl lg:text-3xl xl:text-4xl mb-4 font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hello! We are <span className="text-[#8B55E9]">Data Science Community SRM</span>
                    </motion.h1>
                    <motion.h2
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-snug"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Fosters Development<br />
                        and Entrepreneurial{' '}
                        <motion.span
                            className="text-[#8B55E9] rounded-lg px-2 py-1 bg-[#2B183E] text-lg lg:text-xl xl:text-2xl inline-block"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            skills...
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="text-lg lg:text-lg xl:text-xl italic text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Because, you(&apos)ve gotta start somewhere.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

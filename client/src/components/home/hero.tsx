"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from './s_k.png';

const SkillsImage: React.FC = () => {
    return (
        <motion.section
            className="flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-24 space-y-10"
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{
                opacity: 1,
                scale: 0.95,
                rotate: 0,
                transition: {
                    duration: 1.5,
                    ease: 'easeInOut',
                    scale: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.5
                    }
                }
            }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                        duration: 1.3,
                        ease: 'easeOut',
                        delay: 0.2
                    }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                className="flex justify-center w-full"
            >
                <Image
                    src={Hero}
                    alt="Cross-Functional Team Skills"
                    width={1600}
                    height={1800}
                    className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl"
                />
            </motion.div>

            <div className="flex space-x-6">
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
                >
                    Contact Us
                </motion.a>

                <motion.a
                    href="#join"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
                >
                    Join Us
                </motion.a>
            </div>
        </motion.section>
    );
};

export default SkillsImage;

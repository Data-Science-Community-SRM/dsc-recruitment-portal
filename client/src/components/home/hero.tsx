"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from './s_k.png';

const SkillsImage: React.FC = () => {
    return (
        <motion.section
            className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-24"  // Adjust padding for different devices
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}  // Start smaller with slight rotation
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
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}  // Slight hover effect
                className="flex justify-center w-full"
            >
                <Image
                    src={Hero}
                    alt="Cross-Functional Team Skills"
                    width={1600}  // Increased width for larger screens
                    height={1800}  // Increased height proportionally
                    className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl"  // Increased max width for larger screens
                />
            </motion.div>
        </motion.section>
    );
};

export default SkillsImage;

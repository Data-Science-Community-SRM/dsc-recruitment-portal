"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import Form from '@/components/domains/form';

type Domain = {
    title: string;
    description: string;
    image: string;
    gradient: string;
    subdomains: string[];
};

type LightboxProps = {
    domain: Domain | null;
    onClose: () => void;
    showForm: boolean;
    setShowForm: (showForm: boolean) => void;
};

const Lightbox: React.FC<LightboxProps> = ({
                                               domain,
                                               onClose,
                                               showForm,
                                               setShowForm,
                                           }) => {
    if (!domain) return null;

    const containerVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const layoutVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-70"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className={`relative bg-gradient-to-br from-purple-950 to-purple-900 rounded-lg shadow-lg w-[90vw] max-w-md ${
                    showForm ? 'h-[80vh] max-h-[80vh]' : 'max-h-[30vh]'
                } text-center overflow-auto`}
                variants={contentVariants}
                layout
            >
                <AiOutlineClose
                    className="absolute top-4 right-4 text-white cursor-pointer text-2xl"
                    onClick={onClose}
                />

                <Image
                    src={domain.image}
                    alt={domain.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                />
                <h2 className="text-white text-2xl font-semibold mb-2">
                    {domain.title}
                </h2>
                <p className="text-purple-300 mb-4">{domain.description}</p>
                <div className="flex justify-center items-center gap-4 p-4">
                    <AnimatePresence>
                        {!showForm ? (
                            <motion.div
                                key="buttons"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={layoutVariants}
                                className="flex space-x-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-purple-900 text-white py-1.5 px-3 rounded-md text-sm"
                                    onClick={() => setShowForm(true)}
                                >
                                    APPLY
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-purple-800 text-white py-1.5 px-3 rounded-md text-sm"
                                    onClick={() =>
                                        (window.location.href = `/${domain.title.toLowerCase()}`)
                                    }
                                >
                                    LEARN MORE
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={layoutVariants}
                                className="w-full"
                            >
                                <Form
                                    includeGithub={true}
                                    domain={domain.title}
                                    subdomains={domain.subdomains}
                                    description={domain.description}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Lightbox;
"use client";
import React, { memo, useEffect } from 'react';
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

    useEffect(() => {
        if (domain) {
            const currentPath = window.location.pathname.toLowerCase();
            const domainTitle = domain.title.toLowerCase();

            if (currentPath.includes(domainTitle)) {
                setShowForm(true);
            }
        }
    }, [domain, setShowForm]);

    if (!domain) return null;

    const containerVariants = {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.85 },
    };

    const contentVariants = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -25 },
    };

    return (
        <motion.div
            className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-70"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.4, ease: 'easeInOut'}}
        >
            <motion.div
                className={`relative bg-gradient-to-br from-purple-950 to-purple-900 rounded-lg shadow-lg w-[90vw] max-w-lg ${
                    showForm ? 'max-h-[80vh] overflow-y-auto' : 'max-h-[40vh]'
                } text-center overflow-hidden`}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                transition={{layout: {duration: 0.6, ease: 'easeInOut'}}}
            >
                <AiOutlineClose
                    className="absolute top-4 right-4 text-white cursor-pointer text-2xl"
                    onClick={onClose}
                />

                <Image
                    src={domain.image}
                    alt={domain.title}
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                />
                <h2 className="text-white text-xl font-semibold mb-2">
                    {domain.title}
                </h2>
                <p className="text-purple-300 text-sm mb-4 px-6">{domain.description}</p>

                <div className="flex justify-center items-center gap-4 p-4">
                    <AnimatePresence mode="wait">
                        {!showForm ? (
                            <motion.div
                                key="buttons"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={contentVariants}
                                transition={{duration: 0.4, ease: 'easeOut'}}
                                className="flex space-x-4"
                                style={{minHeight: "35px"}}
                            >
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="bg-purple-900 text-white py-1 px-3 rounded-md text-sm"
                                    onClick={() => setShowForm(true)}
                                >
                                    APPLY
                                </motion.button>
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="bg-purple-800 text-white py-1 px-3 rounded-md text-sm"
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
                                variants={contentVariants}
                                transition={{duration: 0.4, ease: 'easeOut'}}
                                className="w-full"
                                style={{minHeight: "50vh"}}
                            >
                                <Form
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

export default memo(Lightbox);
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from './colour.svg';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const menuIconVariants = {
        open: {
            rotate: 90,
            transition: { duration: 0.3 }
        },
        closed: {
            rotate: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <header className="p-4 bg-[#1A0B2E] text-white relative z-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <motion.div
                        className="w-12 h-12 mr-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <Image src={Logo} alt="Logo" layout="responsive" width={48} height={48} />
                    </motion.div>
                    <motion.div
                        className="text-xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-white">Data</span>
                        <motion.span
                            className="text-[#8B55E9]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        > Science</motion.span><br />
                        Community <motion.span
                        className="text-[#8B55E9]"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >SRM</motion.span>
                    </motion.div>
                </div>
                <motion.button
                    className="sm:hidden flex items-center px-3 py-2 border rounded text-white border-white"
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    variants={menuIconVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </motion.button>
                <nav className="hidden sm:flex">
                    <motion.a
                        href="#"
                        className="mx-2 px-4 py-2 text-sm rounded-full bg-[#8B55E9] bg-opacity-20 hover:bg-opacity-50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#"
                        className="mx-2 px-4 py-2 text-sm rounded-full bg-[#8B55E9] bg-opacity-20 hover:bg-opacity-50 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        About Us
                    </motion.a>
                </nav>
            </div>
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={toggleMenu}
                />
            )}

            <motion.div
                className={`fixed top-0 left-0 h-full w-64 bg-[#1A0B2E] text-white z-50 rounded-r-lg shadow-lg transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: isMenuOpen ? '0%' : '-100%', opacity: isMenuOpen ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 80 }}
            >
                <div className="p-4">
                    <motion.button
                        className="text-white mb-4 text-right"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg
                            className="fill-current h-6 w-6"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </motion.button>
                    <nav className="flex flex-col space-y-4">
                        <motion.a
                            href="#"
                            className="px-4 py-2 text-sm rounded-lg hover:bg-[#8B55E9] hover:bg-opacity-20 transition-colors duration-300"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href="#"
                            className="px-4 py-2 text-sm rounded-lg hover:bg-[#8B55E9] hover:bg-opacity-20 transition-colors duration-300"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            About Us
                        </motion.a>
                    </nav>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
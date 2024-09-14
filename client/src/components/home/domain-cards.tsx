"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const domains = [
    {
        title: 'Technical',
        description: 'Level Up Your Skills, Unlock New Worlds',
        image: '/1.png',
        gradient: 'from-purple-900 to-purple-800',
    },
    {
        title: 'Research',
        description: 'It\'s about seeing what everybody else has seen and thinking what nobody else has thought',
        image: '/2.png',
        gradient: 'from-fuchsia-900 to-fuchsia-800',
    },
    {
        title: 'Creatives',
        description: 'Everything you can imagine is real',
        image: '/3.png',
        gradient: 'from-pink-900 to-pink-800',
    },
    {
        title: 'Corporate',
        description: 'Master the game of business with strategy, connections, and vision',
        image: '/4.png',
        gradient: 'from-blue-900 to-blue-800',
    },
];
const DomainCard = ({ domain, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-purple-950 bg-opacity-40 backdrop-blur-sm rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 hover:bg-opacity-60 transition-all duration-300"
    >
        <motion.div
            whileHover={{ scale: 1.1 }}
            className={`bg-gradient-to-br ${domain.gradient} p-2 sm:p-4 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center relative w-10 sm:w-16 h-10 sm:h-16`}
        >
            <Image src={domain.image} alt={domain.title} width={24} height={24} className="z-10" />
            <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md"></div>
        </motion.div>
        <div className="text-center sm:text-left"> {/* Added text-center for mobile */}
            <h3 className="text-white text-lg sm:text-xl font-semibold">{domain.title}</h3>
            <p className="text-purple-300 text-xs sm:text-sm">{domain.description}</p>
            <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#3B0764' }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 bg-purple-900 text-white rounded-md text-xs sm:text-sm transition-colors duration-300"
            >
                LEARN MORE
            </motion.button>
        </div>
    </motion.div>
);

const DomainsComponent = () => {
    return (
        <div className="p-4 sm:p-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center"
            >
                Domains
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {domains.map((domain, index) => (
                    <DomainCard key={domain.title} domain={domain} index={index} />
                ))}
            </div>
        </div>
    );
};

export default DomainsComponent;
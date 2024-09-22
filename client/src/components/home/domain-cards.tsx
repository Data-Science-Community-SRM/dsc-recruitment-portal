"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from '@/components/domains/lightbox';

type Domain = {
    title: string;
    description: string;
    image: string;
    gradient: string;
    subdomains: string[];
};

const domains: Domain[] = [
    {
        title: 'Technical',
        description: 'Level Up Your Skills, Unlock New Worlds',
        image: '/1.png',
        gradient: 'from-purple-900 to-purple-800',
        subdomains: ['Ai/ML', 'App Dev', 'Web Dev'],
    },
    {
        title: 'Research',
        description:
            "It's about seeing what everybody else has seen and thinking what nobody else has thought",
        image: '/2.png',
        gradient: 'from-fuchsia-900 to-fuchsia-800',
        subdomains: ['Research'],
    },
    {
        title: 'Creatives',
        description: 'Everything you can imagine is real',
        image: '/3.png',
        gradient: 'from-pink-900 to-pink-800',
        subdomains: ['UI/UX', 'Photography', 'VFX'],
    },
    {
        title: 'Corporate',
        description:
            'Master the game of business with strategy, connections, and vision',
        image: '/4.png',
        gradient: 'from-blue-900 to-blue-800',
        subdomains: ['Content', 'PR & Events', 'Sponsorship'],
    },
];

type DomainCardProps = {
    domain: Domain;
    index: number;
    onLearnMoreClick: (domain: Domain) => void;
};

const DomainCard: React.FC<DomainCardProps> = ({
                                                   domain,
                                                   index,
                                                   onLearnMoreClick,
                                               }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="cursor-pointer bg-purple-950 bg-opacity-40 backdrop-blur-sm rounded-lg p-4 sm:p-6 flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 hover:bg-opacity-60 transition-all duration-300"
    >
        <motion.div
            whileHover={{ scale: 1.1 }}
            className={`bg-gradient-to-br ${domain.gradient} p-2 sm:p-4 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center relative w-10 sm:w-16 h-10 sm:h-16`}
        >
            <Image
                src={domain.image}
                alt={domain.title}
                width={100}
                height={100}
                className="z-10"
            />
            <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md"></div>
        </motion.div>
        <div className="text-center sm:text-left flex flex-col sm:block">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                {domain.title}
            </h3>
            <p className="text-purple-300 text-xs sm:text-sm mt-1">
                {domain.description}
            </p>
            <div className="sm:mt-4">
                <Button onClick={() => onLearnMoreClick(domain)} />
            </div>
        </div>
    </motion.div>
);


const Button: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <motion.button
        whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 15px 5px rgba(173, 128, 255, 0.6)',
            background: 'linear-gradient(135deg, rgba(100, 42, 139, 0.9), rgba(141, 64, 180, 0.9))',
        }}
        animate={{
            background: [
                'linear-gradient(135deg, rgba(140, 0, 255, 0.6), rgba(200, 100, 255, 0.6))',
                'linear-gradient(135deg, rgba(173, 128, 255, 0.6), rgba(255, 150, 255, 0.6))',
            ],
        }}
        transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
        }}
        whileTap={{ scale: 0.95 }}
        className="relative mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 text-white rounded-md text-xs sm:text-sm transition-all duration-500
                   bg-gradient-to-br from-[#14002A] to-[#20003D] shadow-lg shadow-purple-900/60"
        onClick={onClick}
    >
        APPLY NOW
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-400 opacity-30 rounded-md blur-md pointer-events-none"></div>
    </motion.button>
);


const DomainsComponent = () => {
    const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
    const [showForm, setShowForm] = useState(false);

    const handleLearnMoreClick = (domain: Domain) => {
        setSelectedDomain(domain);
    };

    const closeLightbox = () => {
        setSelectedDomain(null);
        setShowForm(false);
    };

    return (
        <div className="p-4 sm:p-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-left"
            >
                Domains
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {domains.map((domain, index) => (
                    <DomainCard
                        key={domain.title}
                        domain={domain}
                        index={index}
                        onLearnMoreClick={handleLearnMoreClick}
                    />
                ))}
            </div>
            <Lightbox
                domain={selectedDomain}
                onClose={closeLightbox}
                showForm={showForm}
                setShowForm={setShowForm}
            />
        </div>
    );
};

export default DomainsComponent;
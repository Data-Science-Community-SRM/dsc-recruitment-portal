"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from './colour.svg';
import { motion } from 'framer-motion';
import Lightbox from '@/components/domains/lightbox';
//import DomainsComponent from './domain-cards';
interface Domain {
    title: string;
    description: string;
    image: string;
    gradient: string;
    subdomains: string[];
}


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

const Header: React.FC = () => {
    const scrollToDomain = () => {
        const domainSection = document.getElementById('domain');
        if (domainSection) {
            domainSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigateHome = () => {
        window.location.href = '/';
    };

    const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

    const handleApplyNowClick = () => {
        const currentPath = window.location.pathname;
        if (currentPath === '/technical' || currentPath === '/creatives' || currentPath === '/research'|| currentPath === '/corporate') {
            let domain: Domain | undefined;
            if (currentPath === '/technical') {
                domain = domains.find((d) => d.title === 'Technical');
            } else if (currentPath === '/creatives') {
                domain = domains.find((d) => d.title === 'Creatives');
            } else if (currentPath === '/research') {
                domain = domains.find((d) => d.title === 'Research');
            }else if (currentPath === '/corporate') {
                domain = domains.find((d) => d.title === 'Corporate');
            }

            if (domain) {
                setSelectedDomain(domain);
            }
        } else {
            scrollToDomain();
        }
    };

    const closeLightbox = () => {
        setSelectedDomain(null);
    };

    return (
        <header className="p-4 bg-[#1A0B2E] text-white relative z-10">
            <div className="flex justify-between items-center">
                {/* Logo and Text */}
                <div className="flex items-center cursor-pointer" onClick={navigateHome}>
                    <motion.div
                        className="w-12 h-12 mr-4"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.1}}
                    >
                        <Image src={Logo} alt="Logo" layout="responsive" width={48} height={48}/>
                    </motion.div>
                    <motion.div
                        className="text-xl font-bold"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <span className="text-white">Data </span>
                        <motion.span
                            className="text-[#8B55E9]"
                            initial={{opacity: 0, x: -10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Science
                        </motion.span>
                        <br/>
                        Community{" "}
                        <motion.span
                            className="text-[#8B55E9]"
                            initial={{opacity: 0, x: 10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            SRM
                        </motion.span>
                    </motion.div>
                </div>
                <motion.a
                    onClick={handleApplyNowClick}
                    className="relative sm:mx-2 px-6 py-3 text-md md:text-lg lg:text-xl rounded-full font-semibold text-white bg-gradient-to-r from-[#D16BA5] to-[#5D3FD3] hover:from-[#B44AC6] hover:to-[#3F26A5] transition-all duration-500 ease-out cursor-pointer overflow-hidden"
                    whileHover={{scale: 1.1, transition: {duration: 0.1}}}
                    whileTap={{scale: 0.95}}
                >
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out blur-sm animate-shimmer"></span>
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-[#AA42D4] to-[#5B2EC1] rounded-full opacity-60 blur-xl"></span>
                    <span className="relative z-10">Apply Now</span>
                    <motion.div
                        className="absolute inset-0 rounded-full bg-purple-500 opacity-20 blur-xl"
                        animate={{scale: [1, 1.15], opacity: [0.8, 0]}}
                        transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
                    />
                </motion.a>

            </div>
            <Lightbox
                domain={selectedDomain}
                onClose={closeLightbox}
                showForm={true}
                setShowForm={() => {
                }}
            />
        </header>
    );
};

export default Header;
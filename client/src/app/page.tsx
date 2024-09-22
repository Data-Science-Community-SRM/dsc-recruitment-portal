"use client";
import React, { useEffect } from "react";
import Header from "@/components/home/header";
import Footer from "@/components/footer";
import Introduction from "@/components/home/introduction";
import History from "@/components/home/history";
import Hero from "@/components/home/hero";
import Domain from "@/components/home/domain-cards";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    useEffect(() => {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
        link.rel = 'icon';
        link.href = '/logo.png'; 
        document.head.appendChild(link);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E0D2D] to-[#0D0513] text-white font-sans">
            <title>Data Science Community Recruitments</title>
            <Header />
            <main className="container mx-auto px-4 py-8 flex flex-col">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                    }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center"
                >
                    Data Science Community Recruitments
                </motion.h1>
                <section id="home" className="flex-grow">
                    <Introduction />
                </section>
                <History />
                <section id="domain">
                    <div className="mt-36">
                        <Domain />
                    </div>
                </section>
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

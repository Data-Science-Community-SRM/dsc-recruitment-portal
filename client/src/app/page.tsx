"use client";
import React, { useEffect } from "react";
import Header from "@/components/home/header";
import Footer from "@/components/footer";
import Introduction from "@/components/home/introduction";
import History from "@/components/home/history";
import Hero from "@/components/home/hero";
import Domain from "@/components/home/domain-cards";

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

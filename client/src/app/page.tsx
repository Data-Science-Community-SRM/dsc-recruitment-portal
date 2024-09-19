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
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('2D context not supported or canvas initialization failed.');
            return;
        }

        canvas.width = 200;
        canvas.height = 20;
        ctx.font = '12px Arial';

        const text = "Data Science Community Recruitments";
        let textX = canvas.width;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.fillText(text, textX, 15);

            textX--;
            if (textX < -ctx.measureText(text).width) {
                textX = canvas.width;
            }

            const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
            if (link) {
                link.href = canvas.toDataURL();
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E0D2D] to-[#0D0513] text-white font-sans">
            <title>
                Data Science Community Recruitments
            </title>
            <Header />
            <main className="container mx-auto px-4 py-8">
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
                </motion.h1>
                <Introduction />
                <History />
                <section id="domain">
                    <div className="mt-36">
                        <Domain/>
                    </div>

                </section>

                <Hero/>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;

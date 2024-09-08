"use client";
import React, { useEffect, useState } from 'react';
const History: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const text = "Thriving since 2019";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(prev => {
                const newText = text.slice(0, index + 1);
                index += 1;
                if (index >= text.length) {
                    clearInterval(interval);
                }
                return newText;
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center animate-fade-in-up px-6 lg:px-20 mt-8 lg:mt-16">
            <div className="w-full lg:w-2/3 mb-6 lg:mb-0 text-center"> {/* Increase width */}
                <h2 className="text-2xl lg:text-4xl xl:text-5xl mb-4 font-light Montserrat relative inline-block">
                    {displayText}
                    <span className="absolute animate-blink text-3xl" style={{ right: '-30px', top: '0' }}> |</span>
                </h2>
                <p className="text-base lg:text-lg xl:text-xl text-gray-400 mt-4 mx-auto max-w-6xl text-left">
                    We are a technology-driven Data Science-based student-led Innovation community at SRMIST.
                    Our aim is to foster development and entrepreneurial skills among students and work as a community that inspires thousands.
                </p>
            </div>
        </section>
    );
};
export default History;

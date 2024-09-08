import React from 'react';
import Image from 'next/image';
import Juniper from './white.svg';

const Introduction: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between mb-12 relative px-6 lg:px-20 pt-16 lg:pt-24">
            <div className="flex items-center lg:justify-start w-full lg:w-auto">
                <div className="w-64 h-64 lg:w-80 lg:h-80 relative mr-8 lg:mr-16 transform transition-transform duration-500 hover:scale-105">
                    <Image
                        src={Juniper}
                        alt="Cube Logo representing Data Science Community SRM"
                        layout="fill"
                        objectFit="contain"
                        className="filter drop-shadow-[0_0_20px_rgba(138,43,226,0.7)]"
                    />
                </div>
                <div className="text-center lg:text-left lg:ml-12">
                    <h1 className="text-xl lg:text-3xl xl:text-4xl mb-4 font-bold animate-fade-in">
                        Hello! We are <span className="text-[#8B55E9]">Data Science Community SRM</span>
                    </h1>
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-snug animate-slide-in">
                        Fosters Development<br />
                        and Entrepreneurial{' '}
                        <span className="text-[#8B55E9] rounded-lg px-2 py-1 bg-[#2B183E] text-lg lg:text-xl xl:text-2xl">
                            skills...
                        </span>
                    </h2>
                    <p className="text-base lg:text-lg xl:text-xl italic text-gray-400">
                        Because, you've gotta start somewhere.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

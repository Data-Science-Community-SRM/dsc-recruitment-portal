
import React from 'react';
import Header from '@/components/home/header';
import Introduction from '@/components/home/introduction';
import History from '@/components/home/history';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E0D2D] to-[#0D0513] text-white font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Introduction />
                <History />
            </main>
        </div>
    );
};

export default Home;

import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#11071F]">
      <Navbar/>
    </div>
  );
}


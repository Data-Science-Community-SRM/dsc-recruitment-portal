import React from 'react';
import Header from '@/components/home/header';
import Introduction from '@/components/home/introduction';
import History from '@/components/home/history';
import Domains from '@/components/domains/doms';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E0D2D] to-[#0D0513] text-white font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Introduction />
                <History />
            </main>
            <Domains/>
        </div>
    );
};

export default Home;

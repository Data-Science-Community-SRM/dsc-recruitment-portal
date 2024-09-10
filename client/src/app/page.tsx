import React from 'react';
import Header from './components/header';
import Introduction from './components/introduction';
import History from './components/history';

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

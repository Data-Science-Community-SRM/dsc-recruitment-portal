import React from 'react';
import Image from 'next/image';
import Logo from './colour.svg';
const Header: React.FC = () => {
    return (
        <header className="p-4 flex justify-between items-center bg-[#1A0B2E] text-white">
            <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                    <Image src={Logo} alt="Logo" layout="responsive" width={48} height={48} />
                </div>
                <div className="text-xl font-bold">
                    <span className="text-white">Data</span><span className="text-[#8B55E9]"> Science</span><br/>
                    Community <span className="text-[#8B55E9]">SRM</span>
                </div>
            </div>
            <nav>
                <a href="#" className="mx-2 text-sm">Home</a>
                <a href="#" className="mx-2 text-sm">About Us</a>
            </nav>
        </header>
    );
};
export default Header;
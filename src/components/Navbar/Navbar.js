import React, { useState,useEffect } from "react";
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <nav
            className="bg-white bg-opacity-80 backdrop-blur-md shadow-[8px_8px_24px_rgba(0,0,0,0.15),-8px_-8px_24px_rgba(255,255,255,0.9)] fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
                {/* Logo / Branding */}
                <div
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 tracking-tight">
                    <a href="#profile" style={{textDecoration: 'none', border: 'none'}}>
                        &lt;thanujaDev/&gt;
                    </a>
                </div>
                {/*<div*/}
                {/*    className="flex rounded-full hover:bg-blue-100 transition-all duration-300 ease-in-out cursor-pointer" */}
                {/*    onClick={() => setDarkMode(!darkMode)}*/}
                {/*>*/}
                {/*    <div*/}
                {/*        className={`w-7 h-7 ${darkMode ? 'bg-gradient-to-r from-yellow-500 to-pink-500' : 'bg-gradient-to-r from-cyan-500 to-pink-500'} rounded-full flex items-center justify-center`}>*/}
                {/*        <span className={`text-white ${darkMode ? 'neon-light' : 'neon-dark'} font-bold text-xl`}>*/}
                {/*            {darkMode ? '🌙' : '🌞'}*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="hidden md:flex space-x-6">
                    <a href="#about"
                       className="neon-hover text-lg border-2 border-black hover:border-cyan-500 rounded-full px-3 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                        About
                    </a>
                    <a href="#experience"
                       className="neon-hover text-lg border-2 border-black hover:border-cyan-500 rounded-full px-3 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                        Experience
                    </a>
                    <a href="#projects"
                       className="neon-hover text-lg border-2 border-black hover:border-cyan-500 rounded-full px-3 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                        Projects
                    </a>
                    <a href="#blogs"
                       className="neon-hover text-lg border-2 border-black hover:border-cyan-500 rounded-full px-3 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                        Blogs
                    </a>
                    <a href="#contact"
                       className="neon-hover text-lg border-2 border-black hover:border-cyan-500 rounded-full px-3 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                        Contact
                    </a>
                </div>


                <div
                    className="md:hidden flex items-center justify-center p-3 rounded-full hover:bg-blue-100 transition-all duration-300 ease-in-out"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
                        <div className="w-7 h-0.5 bg-black mb-2 transition-all duration-300 ease-in-out"></div>
                        <div className="w-7 h-0.5 bg-black mb-2 transition-all duration-300 ease-in-out"></div>
                        <div className="w-7 h-0.5 bg-black transition-all duration-300 ease-in-out"></div>
                    </div>
                </div>
            </div>


            {menuOpen && (
                <div
                    className="bg-white bg-opacity-90 backdrop-blur-md shadow-md p-6 space-y-6 md:hidden rounded-lg flex flex-col items-center">
                    <a href="#about"
                       className="block text-2xl font-semibold bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-blue-500 border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        About
                    </a>
                    <a href="#experience"
                       className="block text-2xl font-semibold bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-blue-500 border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Experience
                    </a>
                    <a href="#projects"
                       className="block text-2xl font-semibold bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-blue-500 border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Projects
                    </a>
                    <a href="#blogs"
                       className="block text-2xl font-semibold bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-blue-500 border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Blogs
                    </a>
                    <a href="#contact"
                       className="block text-2xl font-semibold bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-blue-500 border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Contact
                    </a>
                </div>

            )}
        </nav>
    );
}

export default Navbar;

import React, { useState, useEffect } from "react";
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
        <nav className="bg-black text-white backdrop-blur-md shadow-md fixed w-full z-20 navbar">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
                <div className="flex items-center">
                </div>
                <div className="hidden md:flex flex-grow justify-center items-center space-x-6">
                    <div className="flex space-x-6 md:space-x-10 border-2 border-white rounded-full p-2">
                        <a href="#about" className="text-lg border-none px-3 py-2">About</a>
                        <a href="#projects" className="text-lg border-none px-3 py-2">Projects</a>
                        <a href="#blogs" className="text-lg border-none rounded-full px-3 py-2">Blogs</a>
                        <a href="#contact" className="text-lg border-none rounded-full px-3 py-2">Contact</a>
                    </div>
                </div>

                <div className="hidden lg:flex lg:justify-end">
                    <a href="#contact" className="text-lg border-2 border-white rounded-full px-3 py-2">Let's Talk</a>
                </div>
            </div>
            <div
                className="md:hidden flex items-center justify-center p-3 rounded-full hamburger-menu-container"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
                    <div className="w-7 h-0.5 bg-white mb-2 transition-all duration-300 ease-in-out"></div>
                    <div className="w-7 h-0.5 bg-white mb-2 transition-all duration-300 ease-in-out"></div>
                    <div className="w-7 h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="bg-black text-white backdrop-blur-md shadow-md p-6 space-y-6 md:hidden rounded-lg flex flex-col items-center">
                    <a href="#about" className="block text-2xl font-semibold  border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        About
                    </a>
                    <a href="#projects" className="block text-2xl font-semibold  border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Projects
                    </a>
                    <a href="#blogs" className="block text-2xl font-semibold  border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Blogs
                    </a>
                    <a href="#contact" className="block text-2xl font-semibold  border-2 border-transparent rounded-full px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

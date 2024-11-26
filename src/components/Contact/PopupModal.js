import React from 'react';
import './duck.css'

const PopupModal = ({ isOpen, onClose, title, message }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300">
            <div
                className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 transform transition-transform duration-300 scale-100">
                <div className="flex flex-col items-center text-center">
                    <div className="duck-walk-animation w-16 h-16 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                            className="w-full h-full">
                            <g>
                                <circle cx="32" cy="32" r="30" fill="#FFD700"/>
                                <circle cx="20" cy="24" r="4" fill="white"/>
                                <circle cx="44" cy="24" r="4" fill="white"/>
                                <path fill="black" d="M32 42C27 42 18 44 18 48s9 6 14 6 14-3 14-7-7-5-14-5z"/>
                                <path fill="#FF6347" d="M32 20c6 0 10-3 10-6s-4-6-10-6-10 3-10 6 4 6 10 6z"/>
                                <path fill="black" d="M34 16c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"/>
                            </g>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
                    <p className="text-gray-600 mb-6">{message}</p>
                    <button
                        onClick={onClose}
                        className="rounded-full border-2 border-black bg-transparent py-3 px-5 text-black font-semibold hover:bg-black hover:text-white hover:border-transparent transition-all"
                    >
                        Got it!
                    </button>
                </div>
            </div>
        </div>

    );
};

export default PopupModal;

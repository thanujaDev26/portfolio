import React from "react";
import './Profile.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Profile() {
    let navigate = useNavigate();
    return (
        <section id="profile"
                 className="flex flex-col items-center py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">

            <div className="neon-border mb-6" style={{marginTop: '2vh'}}>
                <img
                    src={require("../../asserts/images/mine.jpg")}
                    alt="Thanuja Priyadarshane"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gradient-to-r from-yellow-400 to-orange-500 shadow-xl object-cover transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
                />
            </div>


            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 text-black text-center transition-all duration-300 transform hover:scale-105">
                Thanuja Priyadarshane
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 text-center font-medium mt-2 typewriter">
                Full Stack Developer - DevOps Enthusiast
            </p>


            <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
                <button
                    className="neon-hover text-xl border-2 border-black hover:border-cyan-500 rounded-full
    px-4 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out animate-pulse"
                    onClick={() => {
                        document.getElementById("cvDownloadLink").click();
                    }}
                >
                    Download CV
                </button>


                <a
                    id="cvDownloadLink"
                    href={require("../../asserts/pdf/Thanuja.pdf")}
                    download="thanujaDev.pdf"
                    style={{display: "none"}}
                >
                </a>

                <a href="#contact"
                    className="neon-hover text-xl border-2 border-black hover:border-cyan-500 rounded-full
        px-4 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out animate-pulse">
                    Contact Info
                </a>
            </div>

            <div
                className="absolute inset-0 rounded-3xl blur-md opacity-10 bg-gradient-to-r from-blue-400 to-purple-500"></div>


            <div className="flex space-x-6 mt-8">

                <FaLinkedin
                    className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-blue-600"
                    onClick={() => window.open("https://www.linkedin.com/in/thanuja-priyadarshane/", "_blank")}
                />

                <FaGithub
                    className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-blue-600"
                    onClick={() => window.open("https://github.com/thanujaDev26", "_blank")}
                />
            </div>
        </section>
    );
}

export default Profile;

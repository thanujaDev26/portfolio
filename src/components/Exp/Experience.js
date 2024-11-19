import React from "react";
import './Experience.css'

function Experience() {
    const skills = [
        { title: "JavaScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { title: "Golang", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { title: "Node.js & Express.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { title: "Python & FastAPI", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { title: "GitHub Actions", level: "Intermediate", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
        { title: "AWS Cloud", level: "Intermediate", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        // { title: "Firebase", level: "Intermediate", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        // { title: "Python OpenCV", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        // { title: "Cloudflare", level: "Intermediate", icon: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" }
    ];


    return (
        <section id="experience" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-500">Explore My</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                    Experience
                </h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-7xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center bg-gray-50 p-8 rounded-3xl shadow-[8px_8px_24px_rgba(0,0,0,0.15),-8px_-8px_24px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_40px_rgba(0,0,0,0.25),-12px_-12px_40px_rgba(255,255,255,0.9)] transform transition-transform duration-500 hover:scale-105"
                    >

                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg flex items-center justify-center -mt-16 mb-6">
                            <img
                                src={skill.icon}
                                alt={skill.title}
                                className="w-16 h-16 animate-pulse"
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-700 tracking-wide">
                            {skill.title}
                        </h2>

                        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4"></div>

                        <p className="text-gray-500 text-sm mt-4 uppercase tracking-wider">
                            {skill.level}
                        </p>

                        <div className="absolute inset-0 rounded-3xl blur-md opacity-10 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;

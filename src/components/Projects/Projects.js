import React from "react";

function Projects() {
    const projects = [
        { title: "Rotaract Ruhuna", img: "./assets/project-1.png", link: "#" },
        { title: "Research Circle", img: "./assets/project-2.png", link: "#" },
        { title: "Go Dominate Marketing", img: "./assets/project-3.png", link: "#" },
        { title: "X  - World", img: "./assets/project-4.png", link: "#" },
        { title: "Dharmapala Vidyalaya", img: "./assets/project-5.png", link: "#" },
        { title: "Combined Mathematics", img: "./assets/project-6.png", link: "#" },
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-500">Browse My Recent</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                    Projects
                </h1>
            </div>

            <div className="mt-8 overflow-x-auto hide-scrollbar" style={{padding: '2rem'}}>
                <div className="flex space-x-12 px-4 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 p-6 bg-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
                        >

                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-2xl"
                            />
                            <div className="mt-4">
                                <h2 className="text-2xl font-bold text-gray-700">{project.title}</h2>
                                <p className="text-gray-600 mt-2">Here you can add more description about the project.
                                    Mention key details, technologies used, and outcomes.</p>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    className="neon-hover text-xl border-2 border-black hover:border-cyan-500 rounded-full px-4 py-2 hover:text-cyan-500 transition-all duration-300 ease-in-out"
                                    onClick={() => window.location.href = project.link}
                                >
                                    Go Live
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Projects;

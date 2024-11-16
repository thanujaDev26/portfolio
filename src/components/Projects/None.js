import React from "react";

function None() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100" id="projects">
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-500">All of my projects are currently ongoing.</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight mb-4">
                    Projects Coming Soon
                </h1>
                <p className="text-lg text-gray-600">
                    In the meantime, you can explore my ongoing projects on my GitHub.
                </p>
                <a
                    href="https://github.com/thanujaDev26"
                    className="mt-8 inline-block text-xl font-semibold text-cyan-500 hover:text-cyan-700 border-b-2 border-transparent transition-all duration-300"
                >
                    &lt;Visit My GitHub/&gt;
                </a>

                <div className="mt-12 relative">
                    <img
                        src={require("../../asserts/images/Screenshot 2024-11-16 at 09.35.26.png")}
                        alt="GitHub Repos Screenshot"
                        className="w-full h-auto md:w-3/4 lg:w-2/3 mx-auto rounded-xl object-cover"
                    />
                    <div
                        className="absolute inset-0  to-black opacity-20 rounded-xl"></div>
                </div>


            </div>
        </section>
    );
}

export default None;

import React from "react";

function None() {
    return (
        <section className="py-20 px-6 bg-black text-white" id="projects">
            <div className="text-center mb-12">
                <p className="text-lg md:text-xl">All of my projects are currently ongoing.</p>
                <h1 className="text-4xl md:text-6xl font-extrabold  tracking-tight mb-4">
                    Projects Coming Soon
                </h1>
                <p className="text-lg">
                    In the meantime, you can explore my ongoing projects on my GitHub.
                </p>
                
                <div className="flex justify-center items-center mt-8">
                    <div
                        className="w-32 h-32 border-6 border-t-4 border-t-green-400 border-black rounded-full animate-spin-slow"
                    ></div>
                </div>

                {/* <div className="mt-12 relative">
                   <img
                     src={require("../../asserts/images/Screenshot 2024-11-16 at 09.35.26.png")}
                        alt="GitHub Repos Screenshot"
                className="w-full h-auto md:w-3/4 lg:w-2/3 mx-auto rounded-xl object-cover"
                  />
                <div
                className="absolute inset-0  to-black opacity-20 rounded-xl"></div>
                </div> */}
            </div>
        </section>
    );
}

export default None;

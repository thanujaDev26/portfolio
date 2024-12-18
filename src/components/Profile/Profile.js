import React, { useEffect } from "react";

const Profile = () => {

  return (
    <section id="profile" className="bg-black text-white">
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide relative">
            Full Stack Developer & <br />
            <span className="text-green-400 inline-flex items-center">
              DevOps Engineer
              <img
                src={require("../../asserts/images/d1ac8c80d4c0165c4863973ac24f6dbf.png")}
                alt="DevOps Icon"
                className="inline-block w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-64 lg:h-64 -mt-8 -ml-3 z-0" 
              />
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto">
            Crafting seamless solutions while driving innovation in DevOps and modern web technologies.
          </p>
        </div>
        
        <div className="mt-8">
          <a
            href="#about"
            className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg transition-transform duration-2000 hover:bg-green-400 hover:scale-105"
          >
            Get Started
          </a>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gray-500 rounded-full blur-2xl opacity-20"></div>
      </div>
    </section>
  );
};

export default Profile;

import React from "react";
import { FaLinkedin, FaGithub,FaInstagram,FaFacebook } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-black text-white py-10 px-6">

      <div className="text-center mb-10">
        <p className="text-green-400 font-medium mb-2 tracking-wider text-2xl">ABOUT ME</p>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        

          <div className="bg-black p-6 md:p-10 shadow-lg space-y-4 text-gray-300 leading-relaxed" style={{ border: '1px solid gray', borderRadius: '2vh' }}>
            <h1 className="text-2xl md:text-3xl tracking-tight">
              Hello! 👋 I’m Thanuja
            </h1>
            <p>
              I’m a software developer studying Computer Science at the University of Ruhuna, Sri Lanka. 
              With over three years of experience, I work mainly with backend technologies like 
              Golang, Java, Python and JavaScript alongside frontend development with React. 
              I also build cross-platform mobile applications using Flutter.
            </p>
            <p>
              Currently, I’m an intern DevSecOps Engineer at 
              <a href="https://n-vision.com/" target="_blank" rel="noopener noreferrer" className="none"> NVISION</a>, 
              where I help integrate security into DevOps workflows. I deploy projects on AWS using 
              CI/CD pipelines built with GitHub Actions and Jenkins. 
              My toolkit includes Docker, Kubernetes, Ansible, and Terraform to build scalable, automated infrastructure.
            </p>
            <p>
              I’m passionate about microservices, DevOps, and machine learning. 
              Outside work, I contribute to open source projects and love sharing knowledge within the tech community.
            </p>
          </div>
       
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md">
            <img
              src={require('../../asserts/images/avatar.png')} 
              alt="Profile"
              className="w-full h-full object-cover user-select-none select-none pointer-events-none"
              draggable={false}
            />
          </div>


          <div className="relative z-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
                <button
                    className="text-lg border-2 border-white rounded-full px-3 py-2 transition-all duration-300 ease-in-out"
                    onClick={() => {
                        document.getElementById("cvDownloadLink").click();
                    }}
                >
                    Download CV
                </button>


                <a
                    id="cvDownloadLink"
                    href={require("../../asserts/pdf/Thanuja.pdf")}
                    download="Thanuja_Priyadatshane_CV.pdf"
                    style={{display: "none"}}
                >
                </a>

                <a href="#contact"
                   className="text-lg border-2 border-white rounded-full px-3 py-2 transition-all duration-300 ease-in-out">
                    Contact Info
                </a>
            </div>


            <div className="flex space-x-6 mt-8">
                <FaLinkedin
                    className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#0077B5]"
                    onClick={() => window.open("https://www.linkedin.com/in/thanuja-priyadarshane/", "_blank")}
                />

                <FaGithub
                    className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-purple-600"
                    onClick={() => window.open("https://github.com/thanujaDev26", "_blank")}
                />
                <FaInstagram
                    className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#E4405F]"
                    onClick={() => window.open("https://www.instagram.com/_thanuja10_/profilecard/?igsh=MWIxZGI0aHVjNnloaQ%3D%3D", "_blank")}
                />

                <FaFacebook
                    className="w-8 h-8 cursor-pointer neon-icon transition-all duration-300 transform hover:scale-125 hover:text-[#1877F2]"
                    onClick={() => window.open("https://www.facebook.com/thanuja.priyadarshana.14", "_blank")}
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;

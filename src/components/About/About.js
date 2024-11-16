import React from "react";
import './About.css';

function About() {
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 text-center relative">
            <p className="text-lg md:text-xl text-gray-500 font-medium">Get To Know Me</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2 text-gray-800 tracking-tight">
                About Me
            </h1>

            <div className="mt-10 text-gray-500 space-y-6">
                <p>
                    Hello! I'm a passionate software developer currently pursuing my Bachelor's degree in Computer
                    Science at the <strong>University of Ruhuna</strong>, Sri Lanka. With over two years of experience in full-stack development,
                    I have worked with technologies like React, Angular, and Django to build scalable and user-friendly web
                    applications.
                </p>

                <p>
                    In addition to development, I have a growing interest in DevOps, and I've worked on setting up CI/CD
                    pipelines, containerization, and using cloud platforms to improve efficiency and streamline the
                    development process.
                    I'm also diving into the world of Machine Learning and applying algorithms to real-world problems.
                </p>

                <p>
                    I believe in continuous learning and am always eager to improve my skills. Whether it's exploring new
                    technologies, contributing to open-source projects, I'm committed to
                    staying at the forefront of the tech industry. I also enjoy helping others learn and grow in their tech
                    journey.
                </p>
            </div>

        </section>
    );
}

export default About;

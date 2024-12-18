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
                    Science at the <strong>University of Ruhuna</strong>, Sri Lanka. With over two years of experience
                    in full-stack development,
                    I have a solid understanding of backend technologies like Express.js, FastAPI, and Django, along
                    with frontend expertise
                    in frameworks like React and Angular.
                </p>

                <p>
                    As a full-stack developer, I deploy my projects using cloud platforms like AWS, leveraging CI/CD
                    pipelines
                    with GitHub Actions to ensure efficient and seamless integration and development. I also have
                    experience developing
                    cloud-based software solutions using Golang, focusing on scalability and performance optimization.
                </p>

                <p>
                    Beyond development, I use tools like Docker and Kubernetes for containerization and orchestration,
                    Apache Kafka
                    for real-time data streaming, and Kong API Gateway for API management. Additionally, I work with
                    Terraform to
                    automate infrastructure as code(IaC), ensuring that deployments are consistent and scalable across
                    environments.
                    I am also exploring microservices architecture to leverage these tools more effectively for advanced
                    and scalable systems.
                </p>

                <p>
                    I have a growing interest in DevOps and Machine Learning, applying my knowledge to real-world
                    challenges and
                    exploring innovative solutions. I believe in continuous learning and am always eager to improve my
                    skills,
                    whether it's exploring new technologies, contributing to open-source projects, or helping others
                    grow in their tech journeys.
                </p>
            </div>


        </section>
    );
}

export default About;

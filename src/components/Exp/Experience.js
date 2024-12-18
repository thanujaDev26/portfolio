import React from "react";

function Experience() {
  const skills = [
    { title: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { title: "Python", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { title: "Golang", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { title: "React.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    {
      title: "Flutter",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg",
    },
    { title: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { title: "AWS Cloud", level: "Intermediate", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    {
      title: "Firebase",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    { title: "GitHub Actions", level: "Intermediate", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    { 
      title: "Jenkins", 
      level: "Intermediate", 
      icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" 
    },
    { title: "Docker & K8S", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },

    { title: "Terraform", level: "Basic", icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
    
  ];

  return (
    <section className="bg-black py-12">
      {/* Title */}
      <div className="text-center text-green-400 font-bold tracking-wider mb-10 text-2xl">
        TECH STACK
      </div>

      {/* Skills Section */}
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-b from-green-800 to-black rounded-xl p-6 shadow-lg w-full max-w-5xl">
          {/* Grid of skills */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-12 justify-items-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="h-16 w-16 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

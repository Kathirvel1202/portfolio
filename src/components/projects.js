import React from "react";
import websiteImg1 from "../assets/po.png";
import websiteImg2 from "../assets/jwt1.png";
import websiteImg3 from "../assets/cms2.png";

export default function Projects() {
  // Project Configuration
  const projects = [
    {
      image: websiteImg1,
      description: "Basic personal portfolio website. Built with React and Tailwind CSS",
      link: "https://github.com/Kathirvel1202/Protfolio", // Replace with actual project link
    },
    {
      image: websiteImg2,
      description: "A role-based authentication website. Built with Python, Django, RESTapi and React.js",
      link: "https://github.com/Kathirvel1202/RBAC", // Replace with actual project link
    },
    {
      image: websiteImg3,
      description: "Building an AI chatbot with JavaScript, HTML, CSS, React, and integrating AI.",
      link: "https://github.com/Kathirvel1202/AI-chabox", // Actual project link
    },
  ];

  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      {/* Section Heading */}
      <div className="w-full mb-10">
        <div className="flex justify-center">
          <h1 className="text-4xl md:text-3xl text-white border-b-4 w-full max-w-[140px] border-secondary mb-4 font-bold tracking-wide text-center"id="project">
            PROJECTS
          </h1>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-[80px] px-5 md:px-20 lg:px-40">
        {projects.map((project, index) => (
          <div className="relative text-center" key={index}>
            {/* Project Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                className="h-[250px] w-[300px] md:h-[350px] md:w-[400px] p-2 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
            </a>

            {/* Project Description */}
            <div className="project-desc mt-4">
              <p className="px-5 py-2 text-sm">{project.description}</p>
            </div>

            {/* View Project Button */}
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-dark transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EcopePro (Waste Management System)",
    description:
      "A waste management system in Japan optimized for low-end devices, reducing user work completion time by 50% through frontend optimizations and comprehensive end-to-end testing.",
    technologies: ["React", "Node.js", "AWS"],
    category: "Professional",
  },
  {
    id: 2,
    title: "Kansai Government Startup System",
    description:
      "Developed microservices using Golang, React, and Next.js for a scalable healthcare platform for the Kansai Government in Japan.",
    technologies: ["Golang", "React", "Next.js", "Microservices"],
    category: "Professional",
  },
  {
    id: 3,
    title: "Teamplace",
    description:
      "Deployed Docker and Gin application on Google App Engine while providing guidance and leadership to the team.",
    link: "#",
    technologies: ["Docker", "Gin", "Google App Engine"],
    category: "Professional",
  },
  {
    id: 4,
    title: "Stride App (Sport Management System)",
    description:
      "Served as the project architect for an Australian sport management system, handling both React Native and React.js projects while optimizing systems for large-scale usage.",
    technologies: ["React Native", "React.js", "Node.js"],
    category: "Professional",
  },
  {
    id: 5,
    title: "React Material UI Dashboard",
    description:
      "Created a dashboard boilerplate with complete REST API CRUD, authentication, and authorization using React and Material UI.",
    link: "https://github.com/nabinstha1234/react-material-ui-dashboard",
    technologies: ["React", "Material UI", "REST API"],
    category: "Open Source",
  },
  {
    id: 6,
    title: "Node Mongo Boilerplate with Firebase Auth",
    description:
      "A project boilerplate with Firebase authentication implemented to work with MongoDB for quick project starts.",
    link: "https://github.com/nabinstha1234/node-mongo-boilerplate-firebase-auth",
    technologies: ["Node.js", "MongoDB", "Firebase Auth"],
    category: "Open Source",
  },
];

export default function BlogSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of professional and open-source projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card group hover:border-teal-400/30 transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="mt-auto pt-4 border-t border-gray-800">
                    <Link
                      href={project.link}
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center text-sm font-medium"
                    >
                      View Project
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/nabinstha1234"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            View More on GitHub
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

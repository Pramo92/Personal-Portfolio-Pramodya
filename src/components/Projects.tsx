import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="pb-10 relative pt-[10px]">
      <h2 className="mt-[60px] absolute inset-0 text-center text-7xl font-extrabold text-gray-800 opacity-50 z-0">
        Projects
      </h2>
      <div className="relative z-10">
        <motion.h1 className="my-12 text-center text-4xl z-10">Projects</motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-20 px-[70px]">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              className="bg-[#161314] text-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-110"
            >
              <div className="relative w-full pb-[50.25%] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-2.5 text-left">
                <h2 className="text-xl font-light mb-2">{project.title}</h2>
                <p className="text-sm font-light mb-2 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-neutral-900 text-cyan-400 rounded px-1 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-2 bg-gray-900 text-cyan-400 px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                    GitHub
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

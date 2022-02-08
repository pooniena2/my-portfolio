import { React, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import ProjectData from "../data/ProjectData";
function Projects() {
    useEffect(() => {
      Aos.init(
        {
          once: true,
        },
        []
      );
    });
  return (
    <div className="max-w-full mx-auto py-12 min-h-screen" id="skill">
      <p className="text-2xl text-black md:text-4xl text-center font-serif">
        My Projects
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        {ProjectData.map(function (project, i) {
          var fadePosition = "fade-right"
          if(i % 3 === 1) {
            fadePosition = "fade-up"
          }
          else if(i % 3 === 2) {
            fadePosition = "fade-left"
          }
        
          
          return (
            <div
              className="p-10 hover:scale-105"
              data-aos={fadePosition}
              data-aos-duration="1000"
              key={i}
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-80" src={ project.icon} alt="Mountain" />
                <div className="px-6 py-4">
                  <div className=" text-xl mb-2">{project.name}</div>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                  <a className="text-cyan-500" href={project.link}>
                    View Project
                  </a>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {project.tech.map(function (techs, j) {
                    return (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={j}>
                        { techs}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
     
      </div>
    </div>
  );
}

export default Projects;

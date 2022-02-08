import { React, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import profile from "../image/profile.jpg";
import talaria from "../image/Talaria.png";
import library from "../image/library.jpg";

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
        <div
          className="p-10 hover:scale-105"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-80" src={talaria} alt="Mountain" />
            <div className="px-6 py-4">
              <div className=" text-xl mb-2">Talaria - HackRX 2021</div>
              <p className="text-gray-700 text-base">
                A Pharmaceutical Services Chatbot that helps patients to
                understand their medications via a personalized Flash Card game.
              </p>
              <a
                className="text-cyan-500"
                href="https://devpost.com/software/talaria-tjzrl7"
              >
                See More
              </a>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TypeScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Google Gloud Platform
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Firebase
              </span>
            </div>
          </div>
        </div>

        <div
          className="p-10 hover:scale-105"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-80" src={library} alt="Mountain" />
            <div className="px-6 py-4">
              <div className=" text-xl mb-2">Library Management System</div>
              <p className="text-gray-700 text-base">
                A full-stack website that allows faster book access for students
                as well as easier inventory management for librarians.
              </p>
              <a className="text-cyan-500" href="url">
                See More
              </a>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TypeScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Nodejs
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Express
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MySQL
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #AWS
              </span>
            </div>
          </div>
        </div>

        <div
          className="p-10 hover:scale-105"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-80" src={profile} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="text-xl mb-2">Moosique - 2nd Place HTC 2021</div>
              <p className="text-gray-700 text-base">
                A web application that detects facial emotions and
                recommendsappropriate Spotify music in order to help people
                relieve stress
              </p>
              <a
                className="text-cyan-500"
                href="https://devpost.com/software/moosique"
              >
                See More
              </a>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TypeScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Python
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #AWS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Firebase
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Spotify API
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

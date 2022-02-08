import React from "react";
import {
  FaPython,
  FaReact,
  FaAws,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPowerbi, } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";


function Skill() {

  return (
    <div className="max-w-full mx-auto py-12 min-h-screen" id="skill">
      <p className="text-2xl text-black md:text-4xl text-center font-serif">
        My Technical Skills
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaPython color="#4B8BBE" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            Python
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaJava color="#4B8BBE" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            Java
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript
            color="Yellow"
            className="mx-auto text-center text-5xl"
          />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            Javascript
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTypescript color="Blue" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            Typescript
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#61DBFB" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            React
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaAws color="#FF9900" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            AWS
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FcGoogle className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            GCP
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaDocker color="#33F0FF" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            Docker
          </p>
        </div>
        <div className="flex-col w-60 p-16 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPowerbi color="#FFCA33" className="mx-auto text-center text-5xl" />
          <p className="text-xl sm:text-2xl font-semibold flex align-center justify-center mt-4">
            PowerBi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
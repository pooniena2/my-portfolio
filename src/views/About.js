import React from "react";
import ScrollInto from "../components/ScrollIntoView";
import "../styles/About.css";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl text-center font-serif">
        Wassup!!!
        <span className="wave">👋</span>
        <span className="wave">👋</span>
        <span className="wave">👋</span>
      </p>
      <p className="text-base text-gray-600 sm:text-xl text-center leading-relaxed mt-4 ">
        I'm Senior Computer Science student at the University of Calgary,
        Canada. I love learning new technologies and apply my knowledge to solve
        real-world problems. I'm also interested in Finance as well as how to
        predict its future data by utilizing machine learning.
      </p>
      <ScrollInto selector="#skill">
        <div className="mx-auto p-28 text-center">
          <button className="animate-bounce mx-auto text-3xl text-blue-500">
            <FaChevronDown></FaChevronDown>
          </button>
        </div>
      </ScrollInto>
    </div>
  );
}

export default About;
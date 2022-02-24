import "./App.css";
import { React, useEffect } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "aos/dist/aos.css";
import Aos from "aos";

export default function App() {
  useEffect(() => {
    Aos.init(
      {
        once: true,
      },
      []
    );
  });
  return (
    <div>
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate">
        <div data-aos="fade-down" data-aos-duration="1000">
          <Card />
        </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <About />
        </div>
      </div>
      <Skill />
      <Experience />
      <Projects className="min-h-screen" />
      <Footer />
    </div>
  );
}

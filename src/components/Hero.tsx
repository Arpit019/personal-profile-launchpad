
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
            John Doe
          </h1>
          <h2 className="text-xl md:text-3xl text-blue-600 font-medium mb-6">
            Software Engineer
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8 text-lg">
            I build exceptional digital experiences with clean, efficient code. 
            Specializing in full-stack development with expertise in modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              View Projects
            </a>
          </div>
          <a
            href="#about"
            className="absolute bottom-10 animate-bounce mt-16"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

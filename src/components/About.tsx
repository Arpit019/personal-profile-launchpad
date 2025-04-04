
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="bg-blue-600 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Profile"
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-80 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto"></div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-800">
              Software Engineer & Web Developer
            </h3>
            <p className="text-slate-600 mb-6">
              I'm a passionate software engineer with over 5 years of experience building web applications
              and digital products. I specialize in creating efficient, maintainable, and user-friendly
              solutions that solve real-world problems.
            </p>
            <p className="text-slate-600 mb-6">
              My approach combines technical expertise with a deep understanding of user experience and business needs.
              I'm constantly learning and adapting to new technologies and methodologies to deliver the best possible results.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-100 px-4 py-2 rounded-md">
                <span className="font-medium text-slate-800">Location:</span>{" "}
                <span className="text-slate-600">San Francisco, CA</span>
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-md">
                <span className="font-medium text-slate-800">Experience:</span>{" "}
                <span className="text-slate-600">5+ Years</span>
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-md">
                <span className="font-medium text-slate-800">Email:</span>{" "}
                <span className="text-slate-600">john.doe@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

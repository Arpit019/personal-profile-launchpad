
import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      period: "2021 - Present",
      description: "Leading the development of a React-based SaaS platform. Implemented new features, improved performance by 40%, and mentored junior developers.",
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2018 - 2021",
      description: "Developed and maintained multiple web applications using React, Node.js, and MongoDB. Reduced API response time by 30% through code optimization.",
    },
    {
      position: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2016 - 2018",
      description: "Created responsive web interfaces for clients across various industries. Collaborated with designers to implement pixel-perfect designs.",
    },
    {
      position: "Web Development Intern",
      company: "StartUp Hub",
      period: "2015 - 2016",
      description: "Assisted in developing web applications and learned modern web development practices and technologies.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          Work Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-200 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] mt-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <Briefcase size={16} className="text-white" />
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 mb-3">
                    <span className="text-blue-600 font-medium">
                      {exp.company}
                    </span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 text-xs rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

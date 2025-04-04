
import React from "react";
import { Check } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Redux",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "Python",
    "Django",
    "RESTful APIs",
    "GraphQL",
    "MongoDB",
  ];

  const otherSkills = [
    "Git & GitHub",
    "CI/CD",
    "AWS",
    "Docker",
    "Jest & RTL",
    "Agile/Scrum",
    "UI/UX Design",
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Frontend Development
            </h3>
            <ul className="space-y-2">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Backend Development
            </h3>
            <ul className="space-y-2">
              {backendSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Other Skills
            </h3>
            <ul className="space-y-2">
              {otherSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

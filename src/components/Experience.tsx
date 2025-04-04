
import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Head of Product",
      company: "Celestial IT Verse Pvt. Ltd.",
      period: "Oct 2024 - Present",
      description: "Spearheading the creation of a Winzo/MPL-style gaming ecosystem from scratch. Built and scaled a full product + dev team for end-to-end game development. Defined architecture, tech stack, and monetization strategy. Leading vendor onboarding, gameplay UX, and backend scalability.",
    },
    {
      position: "Product Manager",
      company: "Tap for Tech Pvt Ltd",
      period: "July 2024 - Oct 2024",
      description: "Launched a full-scale Hospital Management System (HMS) boosting operational efficiency by 30%. Designed and deployed adventure booking & event systems for Pinak Adventure Park. Rolled out custom enterprise software, automating operations and improving productivity by 40%.",
    },
    {
      position: "Product Analyst",
      company: "Zippee",
      period: "March 2023 - July 2024",
      description: "Reduced NDR from 70% to 25% and transitioned to a prepaid model, improving cash flow. Designed a prepaid wallet system, optimized delivery using QCF + hyperlocal models. Created a Shopify zipcode validator, introduced automated workflows (Arigato, Mesa, Thrive).",
    },
    {
      position: "Script Developer",
      company: "Uplers",
      period: "Dec 2022 - Mar 2023",
      description: "Boosted email open rates by 25% and CTR by 35% via AMP innovations. Reduced email production time by 30% with streamlined development.",
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

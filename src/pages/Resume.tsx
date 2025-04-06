
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Product Manager",
      period: "2020 - Present",
      description: "Led product strategy and development for the company's flagship SaaS platform. Increased user engagement by 45% and reduced churn by 30% through data-driven feature prioritization.",
      achievements: [
        "Spearheaded the redesign of core user flows, resulting in a 35% improvement in task completion rates",
        "Collaborated with engineering teams to implement new architecture, reducing load times by 60%",
        "Managed a cross-functional team of 12 members across design, engineering, and marketing"
      ]
    },
    {
      company: "Digital Solutions Ltd.",
      role: "Product Manager",
      period: "2018 - 2020",
      description: "Managed the product lifecycle for multiple web and mobile applications, focusing on healthcare and finance verticals.",
      achievements: [
        "Launched 4 major product features that generated $1.2M in additional annual revenue",
        "Implemented Agile methodologies across the product development process",
        "Created comprehensive product documentation and roadmaps"
      ]
    },
    {
      company: "Web Crafters",
      role: "UX Designer & Developer",
      period: "2016 - 2018",
      description: "Designed and developed web applications for clients across various industries, with a focus on usability and performance.",
      achievements: [
        "Designed and implemented responsive interfaces for 20+ client projects",
        "Reduced average page load times by 40% through performance optimizations",
        "Created component libraries that accelerated development time by 30%"
      ]
    }
  ];

  const education = [
    {
      institution: "Stanford University",
      degree: "Master of Science in Computer Science",
      period: "2014 - 2016",
      specialization: "Human-Computer Interaction"
    },
    {
      institution: "University of Michigan",
      degree: "Bachelor of Science in Information Technology",
      period: "2010 - 2014",
      specialization: "Software Development"
    }
  ];

  const certifications = [
    "Certified Scrum Product Owner (CSPO)",
    "Professional Product Manager (PPM)",
    "Google UX Design Professional Certificate",
    "AWS Certified Solutions Architect"
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <motion.div
        className="py-12 container mx-auto px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
      >
        <motion.div 
          className="flex justify-between items-center mb-8"
          variants={itemAnimation}
        >
          <Button 
            variant="outline" 
            className="flex gap-2 items-center bg-slate-800 hover:bg-slate-700 border-slate-700"
            asChild
          >
            <Link to="/">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </Button>
          
          <Button 
            className="flex gap-2 items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-0"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download size={16} />
            Download PDF
          </Button>
        </motion.div>
        
        <motion.div 
          className="bg-slate-800 rounded-xl p-8 mb-8 border border-slate-700 shadow-lg"
          variants={itemAnimation}
        >
          <h1 className="text-3xl font-bold text-white mb-2">Arpit Tripathi</h1>
          <p className="text-xl text-blue-400 mb-4">Senior Product Manager & Technical Leader</p>
          <p className="text-slate-300 max-w-3xl">
            Innovative product leader with over 8 years of experience building digital products 
            that combine exceptional UX with technical excellence. Specializing in SaaS platforms, 
            e-commerce solutions, and enterprise applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-12"
          variants={itemAnimation}
        >
          <div className="flex items-center mb-6">
            <FileText className="text-purple-500 mr-2" size={24} />
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/80 rounded-lg p-6 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-blue-400 mt-2 md:mt-0">
                    <Calendar size={14} className="mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{exp.description}</p>
                
                <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            variants={itemAnimation}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4 py-1">
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-purple-400">{edu.institution}</p>
                  <div className="flex items-center text-blue-400 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <p className="text-slate-300 mt-1">{edu.specialization}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemAnimation}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className="flex items-center bg-slate-700/50 p-3 rounded-lg border border-slate-600/50"
                >
                  <div className="bg-purple-500/20 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemAnimation}
          className="text-center mt-12"
        >
          <p className="text-slate-300 mb-4">Interested in working together? Let's discuss your project!</p>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3"
            asChild
          >
            <Link to="/#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Resume;

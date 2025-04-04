
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-blue-600 rounded-xl"></div>
              <div className="relative z-10 bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Profile"
                  className="w-full h-96 object-cover mix-blend-overlay opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800">
              Software Engineer & Web Developer
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              I'm a passionate software engineer with over 5 years of experience building web applications
              and digital products. I specialize in creating efficient, maintainable, and user-friendly
              solutions that solve real-world problems.
            </p>
            <p className="text-slate-600 mb-8 text-lg">
              My approach combines technical expertise with a deep understanding of user experience and business needs.
              I'm constantly learning and adapting to new technologies and methodologies to deliver the best possible results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Location</h4>
                  <p className="text-slate-800">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Email</h4>
                  <p className="text-slate-800">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <Briefcase className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Experience</h4>
                  <p className="text-slate-800">5+ Years</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from "react";
import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Arpit Tripathi
            </a>
            <p className="text-slate-400 mt-2 max-w-md">
              A product strategist and tech leader crafting impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://linkedin.com/in/arpit-tripathi" className="flex items-center text-slate-400 hover:text-white transition-colors">
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="flex items-center text-slate-400 hover:text-white transition-colors">
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:arpit01999@gmail.com" className="flex items-center text-slate-400 hover:text-white transition-colors">
                    <Mail size={16} className="mr-2" /> Email
                  </a>
                </li>
                <li>
                  <a href="#contact" className="flex items-center text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={16} className="mr-2" /> Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} Arpit Tripathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

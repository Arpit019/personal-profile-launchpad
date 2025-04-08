
import React from "react";
import { Linkedin, Mail, Github, ExternalLink, Gamepad } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkItems = [
    { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/arpit-tripathi" },
    { icon: Github, text: "GitHub", href: "https://github.com/arpittripathii" },
    { icon: Mail, text: "Email", href: "mailto:arpit01999@gmail.com" },
    { icon: ExternalLink, text: "Contact", href: "#contact" }
  ];

  const linkVariants = {
    initial: { y: 0 },
    hover: { y: -3, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-purple-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Gamepad className="h-6 w-6 text-purple-500" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Arpit Tripathi
              </span>
            </motion.a>
            <p className="text-slate-400 mt-2 max-w-md">
              A product strategist and tech leader crafting impactful digital experiences for Gaming, Healthcare, and Enterprise.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Quest Log</h3>
              <ul className="space-y-2">
                <li>
                  <motion.a 
                    href="#home" 
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <span className="text-xs text-purple-500">→</span> Home
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#about" 
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <span className="text-xs text-purple-500">→</span> About
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#skills" 
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <span className="text-xs text-purple-500">→</span> Skills
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#projects" 
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <span className="text-xs text-purple-500">→</span> Projects
                  </motion.a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Connect</h3>
              <ul className="space-y-2">
                {linkItems.map((item, index) => (
                  <li key={index}>
                    <motion.a 
                      href={item.href} 
                      className="flex items-center text-slate-400 hover:text-purple-400 transition-colors"
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <item.icon size={16} className="mr-2 text-purple-500" /> {item.text}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500">
            <span className="text-purple-500">©</span> {currentYear} Arpit Tripathi. All rights reserved.
          </p>
          <motion.p 
            className="text-xs text-slate-600 mt-1"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
          >
            Character Level: Product Leader • Class: Tech Strategist • XP: {currentYear - 2020} years
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

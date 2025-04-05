
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Award, Brain, Heart, Code, Zap } from "lucide-react";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Attribute cards
  const attributes = [
    { name: "Strategy", value: 95, icon: Brain, color: "from-purple-500 to-purple-700" },
    { name: "Leadership", value: 90, icon: Award, color: "from-blue-500 to-blue-700" },
    { name: "Creativity", value: 88, icon: Zap, color: "from-pink-500 to-pink-700" },
    { name: "Technical", value: 85, icon: Code, color: "from-green-500 to-green-700" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Technology grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="circuit-lines">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-purple-900/20"
              style={{ top: `${i * 7}%` }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={i + 'v'}
              className="absolute h-full w-px bg-purple-900/20"
              style={{ left: `${i * 7}%` }}
            />
          ))}
        </div>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 70%, rgba(0, 0, 0, 0) 100%)`,
            }}
            animate={{
              y: [0, Math.random() * 20, 0],
              transition: {
                duration: Math.random() * 5 + 8,
                repeat: Infinity,
                repeatType: "reverse" as const
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl font-bold text-white mb-2 relative">
            Character Profile
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-300 text-lg font-mono mb-4"
          >
            &lt; Profile.details(expertise, skills, background) /&gt;
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-purple-600 rounded-xl"></div>
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl border border-purple-900/30">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Profile"
                  className="w-full h-96 object-cover mix-blend-overlay opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                
                {/* Character Stats */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="mb-6">
                    <div className="text-xs font-mono text-purple-400 mb-1">CHARACTER CLASS</div>
                    <div className="text-2xl font-bold text-white mb-3">Product Strategist</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-purple-900/50 text-purple-300 px-2 py-1 text-xs rounded-md border border-purple-800/30">
                        Gaming Tech
                      </span>
                      <span className="bg-blue-900/50 text-blue-300 px-2 py-1 text-xs rounded-md border border-blue-800/30">
                        Leadership
                      </span>
                      <span className="bg-green-900/50 text-green-300 px-2 py-1 text-xs rounded-md border border-green-800/30">
                        Product Design
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {attributes.map((attr, index) => (
                      <div key={index} className="bg-slate-800/70 p-3 rounded-lg border border-slate-700/70">
                        <div className="flex items-center gap-2 mb-2">
                          <attr.icon className="h-4 w-4 text-white" />
                          <span className="text-xs font-medium text-white">{attr.name}</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                          <motion.div 
                            className={`h-2 rounded-full bg-gradient-to-r ${attr.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${attr.value}%` }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                        <div className="text-right text-xs text-slate-400 mt-1">{attr.value}/100</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Info Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-center bg-slate-800/70 backdrop-blur-sm p-4 rounded-lg shadow-md border border-purple-900/30"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
              >
                <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Location</h4>
                  <p className="text-white">India</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center bg-slate-800/70 backdrop-blur-sm p-4 rounded-lg shadow-md border border-purple-900/30"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
              >
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Email</h4>
                  <p className="text-white">arpit01999@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center bg-slate-800/70 backdrop-blur-sm p-4 rounded-lg shadow-md border border-purple-900/30"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
              >
                <Briefcase className="h-5 w-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Experience</h4>
                  <p className="text-white">Product Leadership</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center bg-slate-800/70 backdrop-blur-sm p-4 rounded-lg shadow-md border border-purple-900/30"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
              >
                <Heart className="h-5 w-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Passion</h4>
                  <p className="text-white">Gaming & Innovation</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-purple-900/30 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="mr-3">Arpit's Saga</span>
                <span className="h-px flex-1 bg-gradient-to-r from-purple-600 to-transparent"></span>
              </h3>
              
              <div className="space-y-6 text-slate-300">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  Currently heading product at Celestial IT Verse Pvt. Ltd.. I lead the vision and execution of a 
                  social, fantasy gaming platform, building it from the ground up — games, mechanics, monetization models, 
                  influencer onboarding, and more.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  I connect dots across users, tech, design, and business to build products that work beautifully 
                  and perform powerfully. My approach combines technical expertise with a deep understanding of 
                  user experience and business needs.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  With a background spanning gaming, healthcare tech, and fintech, I've developed a versatile skillset
                  that allows me to tackle complex problems from multiple angles. My passion lies in creating
                  digital experiences that not only solve real-world problems but also delight users through
                  thoughtful design and intuitive functionality.
                </motion.p>
              </div>
              
              {/* Key strengths */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="mr-3">Key Abilities</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-purple-600 to-transparent"></span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-900/20">
                    <h5 className="text-purple-400 font-medium mb-2">Product Strategy</h5>
                    <p className="text-slate-300">Crafting innovative roadmaps aligned with business goals and user needs.</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-900/20">
                    <h5 className="text-purple-400 font-medium mb-2">Tech Leadership</h5>
                    <p className="text-slate-300">Guiding cross-functional teams from concept to delivery with clear vision.</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-900/20">
                    <h5 className="text-purple-400 font-medium mb-2">Gaming Monetization</h5>
                    <p className="text-slate-300">Designing sustainable revenue models for gaming platforms.</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-900/20">
                    <h5 className="text-purple-400 font-medium mb-2">System Design</h5>
                    <p className="text-slate-300">Architecting scalable solutions with attention to performance and UX.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10 flex justify-center"
              >
                <a 
                  href="#skills" 
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-900/30 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">Explore Skills</span>
                  <motion.span 
                    className="ml-2"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

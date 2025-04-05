
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-lines">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-purple-900/20"
              style={{ top: `${i * 5}%` }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i + 'v'}
              className="absolute h-full w-px bg-purple-900/20"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
        {[...Array(8)].map((_, i) => (
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
              y: [0, Math.random() * 30, 0],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse" as const
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl font-bold text-white mb-2 relative">
            Connect Mission
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
            &lt; await Contact.send(message) /&gt;
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-6 text-white">
              Player Communications
            </motion.h3>
            <motion.p variants={itemVariants} className="text-slate-300 mb-8">
              I'm always open to interesting conversations, collaborations, and consulting opportunities 
              in product strategy, gaming, health tech, or digital innovation.
            </motion.p>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center">
                <div className="bg-gradient-to-br from-purple-700 to-blue-700 p-3 rounded-full mr-4 shadow-lg shadow-purple-900/30">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300">Email</h4>
                  <a
                    href="mailto:arpit01999@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    arpit01999@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
                <div className="bg-gradient-to-br from-purple-700 to-blue-700 p-3 rounded-full mr-4 shadow-lg shadow-purple-900/30">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300">Phone</h4>
                  <a
                    href="tel:+917290809136"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91 7290809136
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
                <div className="bg-gradient-to-br from-purple-700 to-blue-700 p-3 rounded-full mr-4 shadow-lg shadow-purple-900/30">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300">Location</h4>
                  <p className="text-white">India</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center">
                <div className="bg-gradient-to-br from-purple-700 to-blue-700 p-3 rounded-full mr-4 shadow-lg shadow-purple-900/30">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-purple-300">Response Time</h4>
                  <p className="text-white">Usually within 24 hours</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-10 bg-slate-800/70 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30 shadow-lg">
              <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                Achievement Unlocked
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20">
                  <div className="text-yellow-500 text-xl">🏆</div>
                  <div>
                    <p className="text-white font-medium">Most Innovative Employee</p>
                    <p className="text-slate-400 text-sm">2024 • Celestial IT Verse</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20">
                  <div className="text-yellow-500 text-xl">🚀</div>
                  <div>
                    <p className="text-white font-medium">Product Milestone Achiever</p>
                    <p className="text-slate-400 text-sm">2024 • Tap for Tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-700/50 p-3 rounded-md border border-purple-900/20">
                  <div className="text-yellow-500 text-xl">🎓</div>
                  <div>
                    <p className="text-white font-medium">B.E. in Computer Science</p>
                    <p className="text-slate-400 text-sm">AKTU</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30 shadow-lg relative overflow-hidden"
            >
              {/* Form status indicator */}
              {formStatus === "submitting" && (
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                  <div className="text-center">
                    <motion.div 
                      className="w-12 h-12 border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-purple-300 font-medium">Sending message...</p>
                  </div>
                </div>
              )}
              
              {formStatus === "success" && (
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                  <div className="text-center p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-300 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus("idle");
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                  <div className="text-center p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Failed</h3>
                    <p className="text-slate-300 mb-6">Something went wrong. Please try again.</p>
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              <div className="relative mb-8">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-mono border border-blue-800/30">
                  New Message
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">
                    Character Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700/70 border border-purple-900/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">
                    Communication Link
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700/70 border border-purple-900/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-1">
                  Quest Title
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700/70 border border-purple-900/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-1">
                  Quest Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700/70 border border-purple-900/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-3 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-900/30 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === "submitting"}
              >
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  <Send className="h-4 w-4 mr-2" />
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </span>
              </motion.button>
              
              <div className="mt-4 text-xs text-slate-400 text-center">
                * This form is for demonstration purposes only
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

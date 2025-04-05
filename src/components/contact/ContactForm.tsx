
import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ContactStatusOverlay from "./ContactStatusOverlay";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const formRef = useRef(null);
  const isInView = useInView(formRef, { 
    once: true,
    amount: 0.25,
    margin: "-100px 0px"
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

  const resetForm = () => {
    setFormStatus("idle");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      ref={formRef}
      style={{ 
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0px)" : "translateX(50px)",
        transition: "opacity 0.5s ease, transform 0.5s ease"
      }}
    >
      <form 
        onSubmit={handleSubmit}
        className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30 shadow-lg relative overflow-hidden"
      >
        <ContactStatusOverlay status={formStatus} resetForm={resetForm} />

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
  );
};

export default ContactForm;

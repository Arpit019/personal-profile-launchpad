
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import BackgroundElements from "./contact/BackgroundElements";

const Contact = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { 
    once: true,
    amount: 0.5
  });

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <BackgroundElements />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-12"
          style={{ 
            opacity: isTitleInView ? 1 : 0,
            transform: isTitleInView ? "translateY(0px)" : "translateY(-20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease"
          }}
        >
          <h2 className="inline-block text-3xl font-bold text-white mb-2 relative">
            Connect Mission
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
              style={{ 
                transform: isTitleInView ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.5s ease 0.3s"
              }}
            />
          </h2>
          <motion.p
            className="text-purple-300 text-lg font-mono mb-4"
            style={{ 
              opacity: isTitleInView ? 1 : 0,
              transition: "opacity 0.5s ease 0.2s"
            }}
          >
            Send a Message to Start Collaboration
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

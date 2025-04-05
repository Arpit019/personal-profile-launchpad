
import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import BackgroundElements from "./contact/BackgroundElements";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <BackgroundElements />

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
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

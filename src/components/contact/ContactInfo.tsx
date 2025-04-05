
import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import ContactAchievementCard from "./ContactAchievementCard";

const ContactInfo = () => {
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

      <ContactAchievementCard />
    </motion.div>
  );
};

export default ContactInfo;


import React, { useRef } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ContactAchievementCard from "./ContactAchievementCard";

const ContactInfo = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: true,
    amount: 0.25,
    margin: "-100px 0px"
  });
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        opacity: isInView ? 1 : 0,
        transition: "opacity 0.5s ease"
      }}
    >
      <motion.h3 
        style={{ 
          transform: isInView ? "translateY(0px)" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.5s ease, opacity 0.5s ease"
        }}
        className="text-xl font-semibold mb-6 text-white"
      >
        Player Communications
      </motion.h3>
      <motion.p 
        style={{ 
          transform: isInView ? "translateY(0px)" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s"
        }}
        className="text-slate-300 mb-8"
      >
        I'm always open to interesting conversations, collaborations, and consulting opportunities 
        in product strategy, gaming, health tech, or digital innovation.
      </motion.p>

      <div className="space-y-6">
        {[
          { 
            icon: Mail, 
            title: "Email", 
            content: "arpit01999@gmail.com", 
            href: "mailto:arpit01999@gmail.com",
            delay: 0.2
          },
          { 
            icon: Phone, 
            title: "Phone", 
            content: "+91 7290809136", 
            href: "tel:+917290809136",
            delay: 0.3
          },
          { 
            icon: MapPin, 
            title: "Location", 
            content: "India", 
            href: null,
            delay: 0.4
          },
          { 
            icon: MessageSquare, 
            title: "Response Time", 
            content: "Usually within 24 hours", 
            href: null,
            delay: 0.5
          }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-center"
            style={{ 
              transform: isInView ? "translateY(0px)" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: `transform 0.5s ease ${item.delay}s, opacity 0.5s ease ${item.delay}s`
            }}
          >
            <div className="bg-gradient-to-br from-purple-700 to-blue-700 p-3 rounded-full mr-4 shadow-lg shadow-purple-900/30">
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-purple-300">{item.title}</h4>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-white">{item.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <ContactAchievementCard inView={isInView} />
    </motion.div>
  );
};

export default ContactInfo;

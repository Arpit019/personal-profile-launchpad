
import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ContactStatusOverlay from "./ContactStatusOverlay";
import { toast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { 
    once: true,
    amount: 0.25,
    margin: "-100px 0px"
  });

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user types
    if (formErrors[id as keyof FormData]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: undefined
      }));
    }
  };

  const submitToGoogleSheet = async (data: FormData) => {
    // Updated with the new Google Script Web App URL provided by the user
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8i5akBxotg5HDeRtI7-6gAG8cGkKouSuy491R4Y8CEORvQISOA1_SfnrzV7Cxgwb50Q/exec';
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', data.name);
    formDataToSend.append('email', data.email);
    formDataToSend.append('subject', data.subject);
    formDataToSend.append('message', data.message);
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });
      
      // Since we're using no-cors, we don't get a valid response to check
      // So we'll assume success if no exception was thrown
      toast({
        title: "Message Sent!",
        description: "We've received your message. We'll get back to you soon.",
      });
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus("submitting");
    
    try {
      const success = await submitToGoogleSheet(formData);
      
      // Since we're using no-cors, we don't get a valid response to check
      // So we'll assume success if no exception was thrown
      setFormStatus("success");
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus("error");
    }
  };

  const resetForm = () => {
    setFormStatus("idle");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFormErrors({});
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
              className={`w-full px-4 py-2 bg-slate-700/70 border ${formErrors.name ? 'border-red-500' : 'border-purple-900/30'} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="Your name"
            />
            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
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
              className={`w-full px-4 py-2 bg-slate-700/70 border ${formErrors.email ? 'border-red-500' : 'border-purple-900/30'} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="Your email"
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
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
            className={`w-full px-4 py-2 bg-slate-700/70 border ${formErrors.subject ? 'border-red-500' : 'border-purple-900/30'} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            placeholder="Subject"
          />
          {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
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
            className={`w-full px-4 py-2 bg-slate-700/70 border ${formErrors.message ? 'border-red-500' : 'border-purple-900/30'} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none`}
            placeholder="Your message"
          ></textarea>
          {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
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
          * Your data will be saved to a Google Sheet
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;

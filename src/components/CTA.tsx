
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  interest: z.string({
    required_error: "Please select an area of interest.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const CTA = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Create FormData to submit to Google Sheet
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.interest); // Using interest as subject
      formData.append("message", values.message);
      
      // Submit to Google Sheet
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8i5akBxotg5HDeRtI7-6gAG8cGkKouSuy491R4Y8CEORvQISOA1_SfnrzV7Cxgwb50Q/exec';
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      // Show success toast
      toast({
        title: "Engagement Successful!",
        description: "Thank you for reaching out. I'll respond within 24 hours.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const containerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="engage" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 70%, rgba(0, 0, 0, 0) 100%)`,
            }}
            animate={{
              y: [0, Math.random() * 30, 0],
              x: [0, Math.random() * 20, 0],
              transition: {
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        variants={containerAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <motion.div 
          variants={itemAnimation}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-3"
            variants={itemAnimation}
          >
            Ready to Level Up Your Project?
          </motion.h2>
          <motion.p 
            className="text-slate-300 text-lg mb-6"
            variants={itemAnimation}
          >
            Drop your details below and let's discuss how I can help bring your vision to life.
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: 80,
                transition: { duration: 0.6, delay: 0.4 }
              }
            }}
          />
        </motion.div>

        <motion.div 
          variants={itemAnimation}
          className="max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-purple-800/20 shadow-lg"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemAnimation}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            {...field} 
                            className="bg-slate-700/50 border-slate-600 text-white"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div variants={itemAnimation}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email" 
                            type="email" 
                            {...field} 
                            className="bg-slate-700/50 border-slate-600 text-white"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemAnimation}>
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Area of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                            <SelectValue placeholder="Select your area of interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                          <SelectItem value="product_development">Product Development</SelectItem>
                          <SelectItem value="ux_design">UX/UI Design</SelectItem>
                          <SelectItem value="technical_leadership">Technical Leadership</SelectItem>
                          <SelectItem value="system_architecture">System Architecture</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-slate-400">
                        What area would you like to collaborate on?
                      </FormDescription>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div variants={itemAnimation}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <textarea 
                          {...field} 
                          placeholder="Tell me about your project or inquiry" 
                          className="w-full min-h-24 rounded-md border border-slate-600 bg-slate-700/50 p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div 
                variants={itemAnimation}
                className="flex justify-center"
              >
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-md font-medium transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="mr-2 h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>Join Forces</>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;

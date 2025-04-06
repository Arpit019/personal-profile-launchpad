import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  // Blog posts with data from LinkedIn profile
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Revolutionizing Logistics: How We Reduced NDR from 70% to 25%",
      excerpt: "In the competitive landscape of e-commerce, managing last-mile delivery and reducing non-delivery rates (NDR) remains a significant challenge. Here's how our innovative delivery model and prepaid wallet system transformed operations.",
      date: "April 2, 2025",
      author: "Arpit Tripathi",
      category: "E-commerce Logistics",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Robust Hospital Management Systems: A Case Study",
      excerpt: "Healthcare institutions face unique challenges when it comes to digitizing operations. Our HMS solution improved operational efficiency by 30% through streamlined patient management, billing, and inventory systems.",
      date: "March 15, 2025",
      author: "Arpit Tripathi",
      category: "Healthcare Tech",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Future of Social Gaming: Engagement & Monetization Strategies",
      excerpt: "Fantasy gaming platforms are revolutionizing how users interact with sports and entertainment. Discover how thoughtful UX design and innovative monetization approaches can create sustainable gaming ecosystems.",
      date: "February 28, 2025",
      author: "Arpit Tripathi",
      category: "Game Development",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Leveraging AI in Product Strategy: Beyond the Buzzwords",
      excerpt: "Artificial intelligence isn't just a trending topic—it's transforming how we approach product strategy and development. Learn how to practically implement AI solutions that drive real business value.",
      date: "January 22, 2025",
      author: "Arpit Tripathi",
      category: "Product Strategy",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "From Concept to Execution: Building High-Performance Teams",
      excerpt: "The journey from innovative concept to successful execution requires more than just technical skills. Discover strategies for building cross-functional teams that consistently deliver exceptional results.",
      date: "December 12, 2024",
      author: "Arpit Tripathi",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Tech Pattern Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 70%, rgba(0, 0, 0, 0) 100%)`,
              }}
              animate={{
                y: [0, 30, 0],
                transition: {
                  duration: Math.random() * 5 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-4xl font-bold text-white mb-2 relative"
            >
              Knowledge Base
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-purple-300 text-lg font-mono mb-4"
            >
              Insights and Solutions from My Journey
            </motion.p>

            <motion.div 
              className="flex justify-center items-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/" className="text-purple-300 hover:text-purple-200 transition-colors">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-white">Blog</span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50 
                }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-900/30 shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 z-20 bg-purple-900/60 backdrop-blur-sm px-2 py-1 rounded-md border border-purple-800/30 text-xs font-mono text-purple-300">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-xs text-slate-400 mb-3 gap-4">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Book size={12} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white">
                        <User size={14} />
                      </div>
                      <span className="ml-2 text-sm text-slate-300">{post.author}</span>
                    </div>
                    
                    <Button 
                      variant="link" 
                      className="text-purple-400 hover:text-purple-300 p-0 h-auto font-medium"
                    >
                      <span>Read more</span>
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Separator className="mb-16 bg-slate-700/50" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe to My Newsletter</h3>
              <p className="text-slate-300 mb-6">Get the latest insights on product strategy, tech leadership, and innovation directly in your inbox.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="mr-2">←</span>
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;

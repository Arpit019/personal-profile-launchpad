import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Calendar, Folder, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { dataLogs } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = dataLogs.find(log => log.id === id);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      // Fetch the markdown file for the post if it exists
      fetch(`${import.meta.env.BASE_URL}content/blogs/${post.id}.md`)
        .then(res => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.text();
        })
        .then(text => {
          setMarkdownContent(text);
          setLoading(false);
        })
        .catch(err => {
          // Fallback to the summary/content in the JSON if the file doesn't exist yet
          setMarkdownContent(post.content || post.summary);
          setLoading(false);
        });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 font-mono text-cyan-400 flex items-center justify-center flex-col">
        <h1 className="text-6xl font-orbitron font-bold mb-4">404</h1>
        <p className="mb-8">LOG_NOT_FOUND</p>
        <Link to="/blog" className="border border-cyan-400 px-4 py-2 hover:bg-cyan-900 transition-colors">RETURN_TO_DATABANKS</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 font-mono relative text-slate-300 pb-20">
      <Helmet>
        <title>{post.title} | Arpit Tripathi</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="scanlines z-50 pointer-events-none" />
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/80 z-10" />
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-30" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center text-pink-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={16} /> RETURN_TO_DATABANKS
          </Link>
          
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
            <span className="flex items-center gap-1"><Terminal size={14} /> {post.id}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1 text-purple-400"><Folder size={14} /> {post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-400 border-l-4 border-pink-500 pl-4 py-2 bg-slate-900/50">
            {post.summary}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-cyan-400">
            <Loader2 className="animate-spin mr-2" /> DECRYPTING_CONTENT...
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-cyan max-w-none prose-headings:font-orbitron prose-headings:text-white prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-pink-400 prose-li:text-slate-300 prose-img:rounded-md prose-img:border prose-img:border-slate-700"
          >
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
            >
              {markdownContent}
            </ReactMarkdown>
          </motion.div>
        )}
        
        <div className="mt-20 pt-8 border-t-2 border-slate-800 text-center">
          <p className="text-slate-500 text-sm mb-6">END_OF_TRANSMISSION</p>
          <Link to="/blog" className="inline-block bg-cyan-500 text-black font-orbitron font-bold px-8 py-3 pixel-corners hover:bg-white transition-colors shadow-[0_0_15px_#00f3ff]">
            ACKNOWLEDGE_&_RETURN
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

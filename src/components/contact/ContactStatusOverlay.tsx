
import React from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";

type ContactStatusProps = {
  status: "idle" | "submitting" | "success" | "error";
  resetForm: () => void;
};

const ContactStatusOverlay = ({ status, resetForm }: ContactStatusProps) => {
  if (status === "idle") return null;

  return (
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
      {status === "submitting" && (
        <div className="text-center">
          <motion.div 
            className="w-12 h-12 border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-purple-300 font-medium">Sending message...</p>
        </div>
      )}
      
      {status === "success" && (
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
            onClick={() => resetForm()}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Send Another
          </button>
        </div>
      )}
      
      {status === "error" && (
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
            onClick={() => resetForm()}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactStatusOverlay;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, User, AlertTriangle, Terminal, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const CommandCenterLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [authenticating, setAuthenticating] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Check active session on load
    const checkSession = async () => {
      const { data } = await supabase?.auth.getSession() || { data: { session: null } };
      if (data.session) {
        navigate("/command-center");
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // HARDCODED BYPASS FOR TESTING
    if ((email === "not_sosocial" || email === "noy_sosocial") && password === "ARA0211man1902@") {
      setAuthenticating(true);
      setBootLines([
        "> INITIATING_SECURE_HANDSHAKE...",
        "> VERIFYING_MASTER_CREDENTIALS...",
        "> IDENTITY_CONFIRMED: ADMIN_OVERRIDE",
        "> CLEARANCE_LEVEL: COMMANDER",
        "> ACCESS_GRANTED ✓",
      ]);
      
      sessionStorage.setItem("dev_bypass", "true");
      setTimeout(() => navigate("/command-center"), 2000);
      return;
    }

    if (!supabase) {
      setError("SYSTEM_ERROR: Supabase connection not established.");
      return;
    }

    setAuthenticating(true);
    setBootLines(["> INITIATING_SECURE_HANDSHAKE..."]);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (authError) {
      setAuthenticating(false);
      setError(`ACCESS_DENIED: ${authError.message}`);
      return;
    }

    const lines = [
      "> VERIFYING_CREDENTIALS...",
      `> IDENTITY_CONFIRMED: ${data.user?.email}`,
      "> CLEARANCE_LEVEL: COMMANDER",
      "> DECRYPTING_COMMAND_CENTER...",
      "> ACCESS_GRANTED ✓",
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setBootLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => navigate("/command-center"), 600);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center font-mono relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,243,255,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-4 border-2 border-cyan-500 bg-slate-900 flex items-center justify-center shadow-[0_0_30px_rgba(0,243,255,0.3)]"
          >
            <Shield className="text-cyan-400" size={36} />
          </motion.div>
          <h1 className="text-2xl font-bold text-white tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            COMMAND_CENTER
          </h1>
          <p className="text-cyan-400 text-sm mt-2">LINKEDIN_OPS // RESTRICTED_ACCESS</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/80 border-2 border-cyan-800/50 backdrop-blur-sm p-8 relative overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

          {authenticating ? (
            <div className="space-y-3 py-4">
              {bootLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm ${line?.includes("✓") ? "text-green-400" : "text-cyan-400"}`}
                >
                  {line}
                </motion.div>
              ))}
              {bootLines.length < 5 && (
                <div className="w-3 h-5 bg-cyan-400 animate-pulse" />
              )}
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Account Name */}
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">
                  <User size={12} className="inline mr-1" /> AGENT_ID
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter account name..."
                  className="w-full bg-slate-950 border-2 border-slate-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                  autoFocus
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2">
                  <Lock size={12} className="inline mr-1" /> ACCESS_KEY
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full bg-slate-950 border-2 border-slate-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-400 text-xs bg-red-950/30 border border-red-900/50 px-3 py-2"
                  >
                    <AlertTriangle size={14} /> {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] text-sm"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                AUTHENTICATE
              </button>
            </form>
          )}
        </div>

        {/* Footer hint */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1">
            <Terminal size={12} /> ARPIT_OS // SECURE_TERMINAL v2.0
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CommandCenterLogin;

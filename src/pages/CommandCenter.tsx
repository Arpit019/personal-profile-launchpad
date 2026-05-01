import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RefreshCw, LogOut, PenLine, Briefcase, MessageSquare,
  UserCheck, Copy, Check, ChevronRight, Sparkles, Calendar,
  MapPin, Building, FileText, Send, ArrowLeft, Plus, Edit3, Trash2, Save, X
} from "lucide-react";
import { usePosts, useJobs, useReplies, useProfile, refreshFromLinkedIn, usePortfolioContent } from "../hooks/useCommandData";
import { supabase } from "../lib/supabase";

type Tab = "posts" | "jobs" | "engage" | "profile" | "cms";

const CopyBtn = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button onClick={copy} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 px-3 py-1.5 transition-all">
      {copied ? <><Check size={12}/>COPIED</> : <><Copy size={12}/>COPY</>}
    </button>
  );
};

const CommandCenter: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("posts");
  const [refreshing, setRefreshing] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const postsHook = usePosts();
  const jobsHook = useJobs();
  const repliesHook = useReplies();
  const profileHook = useProfile();
  const portfolioHook = usePortfolioContent();

  useEffect(() => {
    const checkSession = async () => {
      if (sessionStorage.getItem("dev_bypass") === "true") {
        return; // Allow bypass
      }
      
      const { data } = await supabase?.auth.getSession() || { data: { session: null } };
      if (!data.session) {
        navigate("/command-center-login");
      }
    };
    checkSession();
  }, [navigate]);

  const handleRefresh = () => {
    setRefreshing(true);
    refreshFromLinkedIn();
    setTimeout(() => setRefreshing(false), 2000);
  };

  const logout = async () => {
    sessionStorage.removeItem("dev_bypass");
    if (supabase) await supabase.auth.signOut();
    navigate("/command-center-login");
  };

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "posts", label: "DAILY_POSTS", icon: <PenLine size={16}/> },
    { id: "jobs", label: "JOB_RADAR", icon: <Briefcase size={16}/> },
    { id: "engage", label: "FEED_OPS", icon: <MessageSquare size={16}/> },
    { id: "profile", label: "PROFILE_AUDIT", icon: <UserCheck size={16}/> },
    { id: "cms", label: "PORTFOLIO_CMS", icon: <FileText size={16}/> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-mono text-white">
      {/* Top bar */}
      <div className="bg-slate-900 border-b border-cyan-900/40 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="text-slate-500 hover:text-cyan-400 transition-colors">
            <ArrowLeft size={18}/>
          </button>
          <h1 className="text-lg font-bold tracking-widest text-cyan-400" style={{fontFamily:"'Orbitron',sans-serif"}}>
            COMMAND_CENTER
          </h1>
          <span className="text-[10px] bg-green-900/50 text-green-400 border border-green-800/50 px-2 py-0.5">ONLINE</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleRefresh} className={`flex items-center gap-1 text-xs bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 px-3 py-1.5 transition-all ${refreshing?"animate-pulse":""}`}>
            <RefreshCw size={12} className={refreshing?"animate-spin":""}/> {refreshing?"SYNCING...":"REFRESH"}
          </button>
          <button onClick={logout} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-red-500 hover:text-black text-red-400 px-3 py-1.5 transition-all">
            <LogOut size={12}/> LOGOUT
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 bg-slate-900/50 border-r border-slate-800 min-h-[calc(100vh-52px)] p-4 space-y-2 hidden md:block">
          <div className="mb-6 p-3 bg-slate-900 border border-slate-700">
            <p className="text-xs text-slate-500">AGENT</p>
            <p className="text-sm text-white font-bold">{profileHook.profile.name}</p>
            <p className="text-[10px] text-cyan-400 mt-1">{profileHook.profile.headline}</p>
          </div>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`w-full flex items-center gap-2 px-3 py-2.5 text-xs text-left transition-all ${tab===t.id?"bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400":"text-slate-400 hover:text-white hover:bg-slate-800 border-l-2 border-transparent"}`}>
              {t.icon}{t.label}
            </button>
          ))}
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 flex z-50">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] ${tab===t.id?"text-cyan-400":"text-slate-500"}`}>
              {t.icon}{t.label}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 pb-24 md:pb-6 max-w-5xl">
          {tab === "posts" && <PostsTab {...postsHook} />}
          {tab === "jobs" && <JobsTab selectedJob={selectedJob} setSelectedJob={setSelectedJob} {...jobsHook} />}
          {tab === "engage" && <EngageTab {...repliesHook} />}
          {tab === "profile" && <ProfileTab {...profileHook} />}
          {tab === "cms" && <CmsTab {...portfolioHook} />}
        </div>
      </div>
    </div>
  );
};

/* ========== CMS TAB ========== */
const CmsTab = ({ hero, updateHero, about, updateAbout }: any) => {
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const heroFields = [
    { key: "title", label: "HERO_TITLE", value: hero?.title || "" },
    { key: "tagline", label: "HERO_TAGLINE", value: hero?.tagline || "" },
    { key: "status", label: "CURRENT_STATUS", value: hero?.status || "" },
  ];

  const aboutFields = [
    { key: "bio", label: "BIOGRAPHY", value: about?.bio || "", multiline: true },
    { key: "Level", label: "STAT_LEVEL", value: about?.stats?.Level || "" },
    { key: "Class", label: "STAT_CLASS", value: about?.stats?.Class || "" },
    { key: "HP", label: "STAT_HP", value: about?.stats?.HP || "" },
  ];

  const handleSaveHero = (data: Record<string, string>) => {
    updateHero({ ...hero, ...data });
    setEditingSection(null);
  };

  const handleSaveAbout = (data: Record<string, string>) => {
    updateAbout({ 
      bio: data.bio, 
      stats: { Level: data.Level, Class: data.Class, HP: data.HP } 
    });
    setEditingSection(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold tracking-widest text-white mb-6" style={{fontFamily:"'Orbitron',sans-serif"}}>
        <FileText size={18} className="inline mr-2 text-cyan-400"/>PORTFOLIO_CMS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* HERO SECTION */}
        <div className="bg-slate-900 border border-slate-700 p-6 relative group hover:border-cyan-800 transition-all">
          <button onClick={() => setEditingSection("hero")} className="absolute top-4 right-4 text-xs bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 px-3 py-1.5 transition-all">
            <Edit3 size={12} className="inline mr-1"/> EDIT
          </button>
          <h3 className="text-sm text-slate-500 uppercase tracking-widest mb-4">HERO_SECTION</h3>
          <p className="text-xl font-bold text-white mb-1">{hero?.title}</p>
          <p className="text-sm text-cyan-400 mb-4">{hero?.tagline}</p>
          <div className="inline-block bg-green-900/30 text-green-400 border border-green-800/50 px-2 py-1 text-xs">
            {hero?.status}
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="bg-slate-900 border border-slate-700 p-6 relative group hover:border-cyan-800 transition-all">
          <button onClick={() => setEditingSection("about")} className="absolute top-4 right-4 text-xs bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 px-3 py-1.5 transition-all">
            <Edit3 size={12} className="inline mr-1"/> EDIT
          </button>
          <h3 className="text-sm text-slate-500 uppercase tracking-widest mb-4">ABOUT_SECTION</h3>
          <p className="text-sm text-slate-300 mb-4 line-clamp-3">{about?.bio}</p>
          <div className="flex gap-4">
            <div className="text-xs text-slate-500">LEVEL: <span className="text-cyan-400">{about?.stats?.Level}</span></div>
            <div className="text-xs text-slate-500">CLASS: <span className="text-purple-400">{about?.stats?.Class}</span></div>
          </div>
        </div>
      </div>

      {editingSection === "hero" && (
        <InlineEdit title="EDIT_HERO_CONTENT" fields={heroFields} onSave={handleSaveHero} onClose={() => setEditingSection(null)} />
      )}
      {editingSection === "about" && (
        <InlineEdit title="EDIT_ABOUT_CONTENT" fields={aboutFields} onSave={handleSaveAbout} onClose={() => setEditingSection(null)} />
      )}
    </div>
  );
};

/* ========== INLINE EDIT MODAL ========== */
const InlineEdit = ({ title, fields, onSave, onClose }: {
  title: string; fields: { key: string; label: string; value: string; multiline?: boolean }[];
  onSave: (d: Record<string, string>) => void; onClose: () => void;
}) => {
  const [vals, setVals] = useState<Record<string, string>>(Object.fromEntries(fields.map(f => [f.key, f.value])));
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}/>
      <div className="relative bg-slate-900 border-2 border-cyan-500 w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-[0_0_30px_rgba(0,243,255,0.2)]">
        <div className="bg-cyan-500 text-black px-4 py-2 font-bold flex justify-between items-center sticky top-0" style={{fontFamily:"'Orbitron',sans-serif"}}>
          <span>{title}</span><button onClick={onClose}><X size={18}/></button>
        </div>
        <div className="p-6 space-y-4">
          {fields.map(f => (
            <div key={f.key}>
              <label className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{f.label}</label>
              {f.multiline ? (
                <textarea value={vals[f.key]||""} onChange={e => setVals({...vals,[f.key]:e.target.value})} rows={6}
                  className="w-full bg-slate-950 border border-slate-700 text-white text-sm p-3 focus:outline-none focus:border-cyan-400 resize-y font-mono"/>
              ) : (
                <input value={vals[f.key]||""} onChange={e => setVals({...vals,[f.key]:e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 text-white text-sm px-3 py-2 focus:outline-none focus:border-cyan-400 font-mono"/>
              )}
            </div>
          ))}
          <button onClick={() => onSave(vals)} className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 text-sm transition-all" style={{fontFamily:"'Orbitron',sans-serif"}}>
            <Save size={14}/> SAVE_CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

/* ========== POSTS TAB ========== */
const PostsTab = ({ posts, setPosts }: { posts: any[]; setPosts: (p: any[]) => void }) => {
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [adding, setAdding] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const todayPost = posts.find((p: any) => p.date === today) || posts[0];

  const saveEdit = (i: number, d: Record<string, string>) => {
    const updated = [...posts]; updated[i] = { ...updated[i], ...d }; setPosts(updated); setEditIdx(null);
  };
  const addPost = (d: Record<string, string>) => {
    setPosts([...posts, d]); setAdding(false);
  };
  const deletePost = (i: number) => { setPosts(posts.filter((_: any, j: number) => j !== i)); };

  return (
    <div>
      <h2 className="text-xl font-bold tracking-widest text-white mb-6" style={{fontFamily:"'Orbitron',sans-serif"}}>
        <Sparkles size={18} className="inline mr-2 text-cyan-400"/>DAILY_POST_GENERATOR
      </h2>
      <div className="bg-slate-900 border-2 border-cyan-800/50 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1">TODAY'S POST</span>
          <span className="text-xs text-slate-500"><Calendar size={12} className="inline mr-1"/>{todayPost.date}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{todayPost.title}</h3>
        <span className="text-[10px] bg-purple-900/50 text-purple-400 px-2 py-0.5 mb-4 inline-block">{todayPost.category}</span>
        <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed mt-3 bg-slate-950 p-4 border border-slate-800 max-h-80 overflow-y-auto">{todayPost.content}</pre>
        <div className="flex items-center gap-3 mt-4"><CopyBtn text={todayPost.content}/><span className="text-[10px] text-slate-600">Copy and paste to LinkedIn</span></div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm text-slate-400 uppercase tracking-widest">CONTENT CALENDAR ({posts.length} POSTS)</h3>
        <button onClick={() => setAdding(true)} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-green-500 hover:text-black text-green-400 px-3 py-1.5 transition-all"><Plus size={12}/> ADD_POST</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.map((post: any, i: number) => (
          <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*0.03}}
            className="bg-slate-900 border border-slate-700 p-4 hover:border-cyan-800 transition-all group">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] text-slate-500">{post.date}</span>
              <div className="flex gap-1">
                <button onClick={() => setEditIdx(i)} className="text-[10px] bg-slate-800 hover:bg-purple-500 hover:text-black text-purple-400 px-2 py-0.5 transition-all"><Edit3 size={10}/></button>
                <button onClick={() => deletePost(i)} className="text-[10px] bg-slate-800 hover:bg-red-500 hover:text-black text-red-400 px-2 py-0.5 transition-all"><Trash2 size={10}/></button>
              </div>
            </div>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 mb-2 inline-block">{post.category}</span>
            <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{post.title}</h4>
            <p className="text-xs text-slate-500 line-clamp-2 mb-3">{post.content?.substring(0,120)}...</p>
            <CopyBtn text={post.content}/>
          </motion.div>
        ))}
      </div>
      {editIdx !== null && <InlineEdit title="EDIT_POST" fields={[
        {key:"date",label:"Date",value:posts[editIdx].date},{key:"title",label:"Title",value:posts[editIdx].title},
        {key:"category",label:"Category",value:posts[editIdx].category},{key:"content",label:"Content",value:posts[editIdx].content,multiline:true}
      ]} onSave={d => saveEdit(editIdx, d)} onClose={() => setEditIdx(null)}/>}
      {adding && <InlineEdit title="ADD_NEW_POST" fields={[
        {key:"date",label:"Date (YYYY-MM-DD)",value:""},{key:"title",label:"Title",value:""},
        {key:"category",label:"Category",value:""},{key:"content",label:"Content",value:"",multiline:true}
      ]} onSave={addPost} onClose={() => setAdding(false)}/>}
    </div>
  );
};

/* ========== JOBS TAB ========== */
const JobsTab = ({ selectedJob, setSelectedJob, jobs, setJobs }: { selectedJob: number|null; setSelectedJob: (n:number|null)=>void; jobs: any[]; setJobs: (j: any[]) => void }) => {
  const [adding, setAdding] = useState(false);
  const job = selectedJob !== null ? jobs[selectedJob] : null;

  const addJob = (d: Record<string, string>) => {
    setJobs([...jobs, { ...d, tags: d.tags?.split(",").map((t:string)=>t.trim()) || [], matchScore: 75, interviewQuestions: [], cvSummary: d.cvSummary || "" }]);
    setAdding(false);
  };
  const deleteJob = (i: number) => { setJobs(jobs.filter((_: any, j: number) => j !== i)); setSelectedJob(null); };

  if (job) {
    return (
      <div>
        <button onClick={() => setSelectedJob(null)} className="flex items-center gap-1 text-xs text-cyan-400 hover:text-white mb-6 transition-colors"><ArrowLeft size={14}/> BACK</button>
        <div className="bg-slate-900 border-2 border-cyan-800/50 p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-1">{job.title}</h2>
          <p className="text-cyan-400 text-sm mb-4"><Building size={14} className="inline mr-1"/>{job.company} • <MapPin size={14} className="inline mr-1"/>{job.location}</p>
          <div className="flex gap-2 mb-4 flex-wrap">{job.tags?.map((t:string,i:number) => <span key={i} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5">{t}</span>)}</div>
          <div className="flex items-center gap-2"><span className="text-xs bg-green-900/50 text-green-400 px-2 py-1">MATCH: {job.matchScore}%</span><span className="text-xs text-slate-500">{job.salary}</span></div>
        </div>
        {job.coverLetter && <div className="bg-slate-900 border border-slate-700 p-6 mb-4">
          <h3 className="text-sm font-bold text-purple-400 mb-3 tracking-widest"><FileText size={14} className="inline mr-1"/>COVER_LETTER</h3>
          <pre className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed bg-slate-950 p-4 border border-slate-800 max-h-60 overflow-y-auto">{job.coverLetter}</pre>
          <div className="mt-3"><CopyBtn text={job.coverLetter}/></div>
        </div>}
        {job.interviewQuestions?.length > 0 && <div className="bg-slate-900 border border-slate-700 p-6 mb-4">
          <h3 className="text-sm font-bold text-pink-400 mb-3 tracking-widest">INTERVIEW_PREP</h3>
          <div className="space-y-3">{job.interviewQuestions.map((q:any,i:number) => (
            <div key={i} className="bg-slate-950 border border-slate-800 p-3">
              <p className="text-xs text-white font-bold mb-1">Q{i+1}: {q.question}</p>
              <p className="text-xs text-slate-400">{q.answer}</p>
            </div>
          ))}</div>
        </div>}
        {job.cvSummary && <div className="bg-slate-900 border border-slate-700 p-6">
          <h3 className="text-sm font-bold text-cyan-400 mb-3 tracking-widest">TAILORED_CV</h3>
          <pre className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed bg-slate-950 p-4 border border-slate-800 max-h-60 overflow-y-auto">{job.cvSummary}</pre>
          <div className="mt-3"><CopyBtn text={job.cvSummary}/></div>
        </div>}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-widest text-white" style={{fontFamily:"'Orbitron',sans-serif"}}><Briefcase size={18} className="inline mr-2 text-pink-400"/>JOB_RADAR</h2>
        <button onClick={() => setAdding(true)} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-green-500 hover:text-black text-green-400 px-3 py-1.5 transition-all"><Plus size={12}/> ADD_JOB</button>
      </div>
      <div className="space-y-4">
        {jobs.map((j:any, i:number) => (
          <motion.div key={i} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:i*0.08}}
            onClick={() => setSelectedJob(i)}
            className="bg-slate-900 border border-slate-700 p-5 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(255,0,60,0.15)] transition-all cursor-pointer group flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">{j.title}</h3>
              <p className="text-xs text-slate-400 mt-1"><Building size={12} className="inline mr-1"/>{j.company} • <MapPin size={12} className="inline mr-1"/>{j.location}</p>
              <div className="flex gap-2 mt-2"><span className="text-[10px] bg-green-900/50 text-green-400 px-2 py-0.5">MATCH {j.matchScore}%</span><span className="text-[10px] text-slate-500">{j.salary}</span></div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={(e) => {e.stopPropagation(); deleteJob(i);}} className="text-[10px] bg-slate-800 hover:bg-red-500 hover:text-black text-red-400 px-2 py-1 transition-all"><Trash2 size={10}/></button>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-pink-400 transition-colors"/>
            </div>
          </motion.div>
        ))}
      </div>
      {adding && <InlineEdit title="ADD_JOB" fields={[
        {key:"title",label:"Job Title",value:""},{key:"company",label:"Company",value:""},
        {key:"location",label:"Location",value:""},{key:"salary",label:"Salary",value:""},
        {key:"tags",label:"Tags (comma separated)",value:""},{key:"coverLetter",label:"Cover Letter",value:"",multiline:true},
        {key:"cvSummary",label:"CV Summary",value:"",multiline:true}
      ]} onSave={addJob} onClose={() => setAdding(false)}/>}
    </div>
  );
};

/* ========== ENGAGE TAB ========== */
const EngageTab = ({ replies, setReplies }: { replies: any[]; setReplies: (r: any[]) => void }) => {
  const [adding, setAdding] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);

  const addReply = (d: Record<string, string>) => {
    setReplies([...replies, { scenario: d.scenario, context: d.context, templates: d.templates.split("\n---\n") }]);
    setAdding(false);
  };
  const deleteReply = (i: number) => { setReplies(replies.filter((_: any, j: number) => j !== i)); };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-widest text-white" style={{fontFamily:"'Orbitron',sans-serif"}}><MessageSquare size={18} className="inline mr-2 text-purple-400"/>FEED_ENGAGEMENT_OPS</h2>
        <button onClick={() => setAdding(true)} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-green-500 hover:text-black text-green-400 px-3 py-1.5 transition-all"><Plus size={12}/> ADD_SCENARIO</button>
      </div>
      <p className="text-xs text-slate-400 mb-6">Strategic reply templates. Copy and customize before posting.</p>
      <div className="space-y-6">
        {replies.map((r:any, i:number) => (
          <div key={i} className="bg-slate-900 border border-slate-700 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2"><Send size={14} className="text-purple-400"/><h3 className="text-sm font-bold text-white">{r.scenario}</h3></div>
              <div className="flex gap-1">
                <button onClick={() => setEditIdx(i)} className="text-[10px] bg-slate-800 hover:bg-purple-500 hover:text-black text-purple-400 px-2 py-0.5 transition-all"><Edit3 size={10}/></button>
                <button onClick={() => deleteReply(i)} className="text-[10px] bg-slate-800 hover:bg-red-500 hover:text-black text-red-400 px-2 py-0.5 transition-all"><Trash2 size={10}/></button>
              </div>
            </div>
            <p className="text-xs text-slate-500 mb-4">{r.context}</p>
            <div className="space-y-3">
              {r.templates.map((t:string, j:number) => (
                <div key={j} className="bg-slate-950 border border-slate-800 p-3 flex justify-between items-start gap-3">
                  <p className="text-xs text-slate-300 flex-1">{t}</p>
                  <CopyBtn text={t}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {adding && <InlineEdit title="ADD_SCENARIO" fields={[
        {key:"scenario",label:"Scenario Name",value:""},{key:"context",label:"Context",value:""},
        {key:"templates",label:"Reply Templates (separate with ---)",value:"",multiline:true}
      ]} onSave={addReply} onClose={() => setAdding(false)}/>}
      {editIdx !== null && <InlineEdit title="EDIT_SCENARIO" fields={[
        {key:"scenario",label:"Scenario",value:replies[editIdx].scenario},{key:"context",label:"Context",value:replies[editIdx].context},
        {key:"templates",label:"Templates (separate with ---)",value:replies[editIdx].templates.join("\n---\n"),multiline:true}
      ]} onSave={d => {
        const updated = [...replies]; updated[editIdx] = { scenario: d.scenario, context: d.context, templates: d.templates.split("\n---\n") };
        setReplies(updated); setEditIdx(null);
      }} onClose={() => setEditIdx(null)}/>}
    </div>
  );
};

/* ========== PROFILE TAB ========== */
const ProfileTab = ({ profile, setProfile }: { profile: any; setProfile: (p: any) => void }) => {
  const [editing, setEditing] = useState(false);
  const improvements = [
    { area: "Headline", current: profile.headline, suggestion: "Head of Product | Building 7+ Platforms from 0→1 | Gaming • E-commerce • HealthTech | Ex-Zippee, State Street", impact: "HIGH" },
    { area: "About Section", current: "Short generic summary", suggestion: "Rewrite with a hook, 3 key achievements with metrics, and a clear CTA.", impact: "HIGH" },
    { area: "Featured Section", current: "Not utilized", suggestion: "Add: AAG App case study, Portfolio website link, Best-performing LinkedIn post", impact: "MEDIUM" },
    { area: "Skills Endorsements", current: "Basic list", suggestion: "Pin top 3: Product Management, Product Strategy, Agile. Request endorsements.", impact: "MEDIUM" },
    { area: "Activity", current: "Mostly reposts", suggestion: "Post 3-5x/week original content. Engage on 10+ posts daily.", impact: "CRITICAL" },
    { area: "Banner Image", current: "Generic photo", suggestion: "Create custom banner with your key metrics and title.", impact: "HIGH" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-widest text-white" style={{fontFamily:"'Orbitron',sans-serif"}}><UserCheck size={18} className="inline mr-2 text-green-400"/>PROFILE_OPTIMIZER</h2>
        <button onClick={() => setEditing(true)} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-purple-500 hover:text-black text-purple-400 px-3 py-1.5 transition-all"><Edit3 size={12}/> EDIT_PROFILE</button>
      </div>
      <div className="bg-slate-900 border-2 border-cyan-800/50 p-6 mb-8 flex items-center gap-6">
        <div className="w-20 h-20 border-4 border-yellow-500 flex items-center justify-center bg-slate-950">
          <span className="text-2xl font-bold text-yellow-400" style={{fontFamily:"'Orbitron',sans-serif"}}>62</span>
        </div>
        <div>
          <p className="text-sm text-white font-bold">PROFILE_STRENGTH: INTERMEDIATE</p>
          <p className="text-xs text-slate-400 mt-1">Implement recommendations below to reach All-Star (90+)</p>
          <div className="w-48 h-2 bg-slate-800 mt-2"><div className="h-full bg-yellow-500 w-[62%]"/></div>
        </div>
      </div>
      <div className="space-y-4">
        {improvements.map((item, i) => (
          <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}}
            className="bg-slate-900 border border-slate-700 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white">{item.area}</h3>
              <span className={`text-[10px] px-2 py-0.5 font-bold ${item.impact==="CRITICAL"?"bg-red-900/50 text-red-400":item.impact==="HIGH"?"bg-orange-900/50 text-orange-400":"bg-blue-900/50 text-blue-400"}`}>{item.impact}</span>
            </div>
            <p className="text-xs text-slate-500 mb-2">Current: {item.current}</p>
            <p className="text-xs text-cyan-400">→ {item.suggestion}</p>
            {item.area === "Headline" && <div className="mt-3"><CopyBtn text={item.suggestion}/></div>}
          </motion.div>
        ))}
      </div>
      {editing && <InlineEdit title="EDIT_PROFILE" fields={[
        {key:"name",label:"Name",value:profile.name},{key:"headline",label:"Headline",value:profile.headline},
        {key:"location",label:"Location",value:profile.location},{key:"email",label:"Email",value:profile.email},
        {key:"summary",label:"Summary",value:profile.summary,multiline:true}
      ]} onSave={d => { setProfile({...profile,...d}); setEditing(false); }} onClose={() => setEditing(false)}/>}
    </div>
  );
};

export default CommandCenter;

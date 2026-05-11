import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb, Search, Map, FileText, Layers, BarChart3,
  Plus, Edit3, Trash2, ChevronRight, Star, Target, TrendingUp,
  CheckCircle, Clock, AlertTriangle, X, Save
} from "lucide-react";
import { useIdeas, useResearch, useRoadmap, usePRDs, usePrototypes, useMetrics,
  PmIdea, PmResearch, PmMilestone, PmPrd, PmMetric } from "../hooks/usePmAgentData";

type PmSection = "ideas" | "research" | "roadmap" | "prds" | "prototypes" | "metrics";

const statusColors: Record<string, string> = {
  draft: "bg-slate-700 text-slate-300",
  exploring: "bg-blue-900/50 text-blue-400",
  validated: "bg-green-900/50 text-green-400",
  killed: "bg-red-900/50 text-red-400",
  "not-started": "bg-slate-700 text-slate-300",
  "in-progress": "bg-amber-900/50 text-amber-400",
  completed: "bg-green-900/50 text-green-400",
  "in-review": "bg-purple-900/50 text-purple-400",
  approved: "bg-cyan-900/50 text-cyan-400",
  testing: "bg-amber-900/50 text-amber-400",
  active: "bg-green-900/50 text-green-400",
  upcoming: "bg-blue-900/50 text-blue-400",
  tracking: "bg-green-900/50 text-green-400",
  "needs-instrumentation": "bg-amber-900/50 text-amber-400",
  "on-track": "bg-green-900/50 text-green-400",
  "at-risk": "bg-red-900/50 text-red-400",
  blocked: "bg-red-900/50 text-red-400",
  deprecated: "bg-slate-700 text-slate-400",
  missed: "bg-red-900/50 text-red-400",
};

const VfdBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-[10px] text-slate-500 w-6">{label}</span>
    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${value * 10}%` }} />
    </div>
    <span className="text-[10px] text-slate-400 w-6 text-right">{value}</span>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => (
  <span className={`text-[10px] px-2 py-0.5 uppercase tracking-wider ${statusColors[status] || "bg-slate-700 text-slate-300"}`}>
    {status.replace(/-/g, " ")}
  </span>
);

const SectionNav = ({ sections, active, onSelect }: {
  sections: { id: PmSection; label: string; icon: React.ReactNode; count: number }[];
  active: PmSection; onSelect: (s: PmSection) => void;
}) => (
  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
    {sections.map(s => (
      <button key={s.id} onClick={() => onSelect(s.id)}
        className={`flex items-center gap-2 px-4 py-2.5 text-xs whitespace-nowrap transition-all border ${
          active === s.id
            ? "bg-cyan-500/10 text-cyan-400 border-cyan-800/50"
            : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-600"
        }`}>
        {s.icon}<span>{s.label}</span>
        <span className={`text-[10px] px-1.5 py-0.5 ${active === s.id ? "bg-cyan-500/20" : "bg-slate-800"}`}>{s.count}</span>
      </button>
    ))}
  </div>
);

const PmAgentTab: React.FC = () => {
  const [section, setSection] = useState<PmSection>("ideas");
  const ideasHook = useIdeas();
  const researchHook = useResearch();
  const roadmapHook = useRoadmap();
  const prdsHook = usePRDs();
  const prototypesHook = usePrototypes();
  const metricsHook = useMetrics();

  const sections: { id: PmSection; label: string; icon: React.ReactNode; count: number }[] = [
    { id: "ideas", label: "IDEA_FORGE", icon: <Lightbulb size={14} />, count: ideasHook.ideas.length },
    { id: "research", label: "RESEARCH_HUB", icon: <Search size={14} />, count: researchHook.research.length },
    { id: "roadmap", label: "ROADMAP", icon: <Map size={14} />, count: roadmapHook.milestones.length },
    { id: "prds", label: "PRD_FACTORY", icon: <FileText size={14} />, count: prdsHook.prds.length },
    { id: "prototypes", label: "PROTO_LAB", icon: <Layers size={14} />, count: prototypesHook.prototypes.length },
    { id: "metrics", label: "METRICS", icon: <BarChart3 size={14} />, count: metricsHook.metrics.length },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold tracking-widest text-white mb-2" style={{ fontFamily: "'Orbitron',sans-serif" }}>
        <Target size={18} className="inline mr-2 text-cyan-400" />PM_AGENT_HQ
      </h2>
      <p className="text-xs text-slate-500 mb-6">Product Management automation — Ideation → Research → Planning → PRD → Prototype → Metrics</p>

      {/* Lifecycle Progress */}
      <div className="bg-slate-900 border border-slate-700 p-4 mb-6">
        <div className="flex items-center justify-between gap-1">
          {["Ideation", "Research", "Planning", "PRD", "Prototype", "Launch"].map((stage, i) => (
            <React.Fragment key={stage}>
              <div className={`flex flex-col items-center gap-1 ${i <= 2 ? "text-cyan-400" : "text-slate-600"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${
                  i <= 2 ? "border-cyan-400 bg-cyan-500/10" : "border-slate-700 bg-slate-900"
                }`}>{i + 1}</div>
                <span className="text-[10px] hidden sm:block">{stage}</span>
              </div>
              {i < 5 && <div className={`flex-1 h-0.5 ${i < 2 ? "bg-cyan-400" : "bg-slate-700"}`} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <SectionNav sections={sections} active={section} onSelect={setSection} />

      {section === "ideas" && <IdeasSection {...ideasHook} />}
      {section === "research" && <ResearchSection {...researchHook} />}
      {section === "roadmap" && <RoadmapSection {...roadmapHook} />}
      {section === "prds" && <PrdsSection {...prdsHook} />}
      {section === "prototypes" && <PrototypesSection prototypes={prototypesHook.prototypes} />}
      {section === "metrics" && <MetricsSection {...metricsHook} />}
    </div>
  );
};

/* ===== IDEAS SECTION ===== */
const IdeasSection = ({ ideas, setIdeas }: { ideas: PmIdea[]; setIdeas: (i: PmIdea[]) => void }) => {
  const deleteIdea = (id: string) => setIdeas(ideas.filter(i => i.id !== id));
  const composite = (i: PmIdea) => ((i.viability * 0.3) + (i.feasibility * 0.3) + (i.desirability * 0.4)).toFixed(1);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-white tracking-widest"><Lightbulb size={14} className="inline mr-2 text-amber-400" />IDEA_FORGE</h3>
      </div>
      <div className="space-y-4">
        {ideas.map((idea, idx) => (
          <motion.div key={idea.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
            className="bg-slate-900 border border-slate-700 p-5 hover:border-amber-800/50 transition-all group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{idea.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{idea.persona}</p>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={idea.status} />
                <button onClick={() => deleteIdea(idea.id)} className="text-[10px] bg-slate-800 hover:bg-red-500 hover:text-black text-red-400 px-2 py-0.5 transition-all"><Trash2 size={10} /></button>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-4">{idea.problem}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <VfdBar label="V" value={idea.viability} color="bg-green-500" />
                <VfdBar label="F" value={idea.feasibility} color="bg-blue-500" />
                <VfdBar label="D" value={idea.desirability} color="bg-purple-500" />
              </div>
              <div className="flex flex-col items-center justify-center bg-slate-950 border border-slate-800 p-3">
                <span className="text-2xl font-bold text-cyan-400" style={{ fontFamily: "'Orbitron',sans-serif" }}>{composite(idea)}</span>
                <span className="text-[10px] text-slate-500 mt-1">VFD SCORE</span>
              </div>
            </div>
            {idea.assumptions.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Key Assumptions</span>
                {idea.assumptions.map((a, i) => (
                  <p key={i} className="text-[11px] text-slate-400 mt-1">• {a}</p>
                ))}
              </div>
            )}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-[10px] text-slate-600">Stage:</span>
              <StatusBadge status={idea.stage} />
              <span className="text-[10px] text-slate-600 ml-auto">{idea.updated_at}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ===== RESEARCH SECTION ===== */
const ResearchSection = ({ research, setResearch }: { research: PmResearch[]; setResearch: (r: PmResearch[]) => void }) => (
  <div>
    <h3 className="text-sm font-bold text-white tracking-widest mb-4"><Search size={14} className="inline mr-2 text-blue-400" />RESEARCH_HUB</h3>
    <div className="space-y-4">
      {research.map((r, idx) => (
        <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
          className="bg-slate-900 border border-slate-700 p-5 hover:border-blue-800/50 transition-all">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="text-sm font-bold text-white">{r.title}</h4>
              <div className="flex gap-2 mt-1">
                <span className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-0.5">{r.type}</span>
                <StatusBadge status={r.status} />
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mb-3">{r.summary}</p>
          {r.competitors.length > 0 && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {r.competitors.map(c => <span key={c} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5">{c}</span>)}
            </div>
          )}
          <div className="bg-slate-950 border border-slate-800 p-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Key Findings</span>
            {r.keyFindings.map((f, i) => (
              <p key={i} className="text-[11px] text-cyan-400 mt-1.5 flex items-start gap-1.5">
                <TrendingUp size={10} className="mt-0.5 flex-shrink-0" />{f}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ===== ROADMAP SECTION ===== */
const RoadmapSection = ({ milestones, setMilestones }: { milestones: PmMilestone[]; setMilestones: (m: PmMilestone[]) => void }) => {
  const featureStatusIcon = (s: string) => {
    if (s === "completed") return <CheckCircle size={12} className="text-green-400" />;
    if (s === "in-progress") return <Clock size={12} className="text-amber-400" />;
    if (s === "blocked") return <AlertTriangle size={12} className="text-red-400" />;
    return <div className="w-3 h-3 rounded-full border border-slate-600" />;
  };

  return (
    <div>
      <h3 className="text-sm font-bold text-white tracking-widest mb-4"><Map size={14} className="inline mr-2 text-green-400" />ROADMAP_BUILDER</h3>
      <div className="space-y-6">
        {milestones.map((m, idx) => (
          <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
            className="bg-slate-900 border border-slate-700 p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{m.theme}</p>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status={m.status} />
                <span className="text-[10px] text-slate-600">{m.startDate} → {m.endDate}</span>
              </div>
            </div>
            <div className="space-y-2">
              {m.features.map((f, i) => {
                const completed = m.features.filter(x => x.status === "completed").length;
                return (
                  <div key={i} className="flex items-center gap-3 bg-slate-950 border border-slate-800 px-3 py-2">
                    {featureStatusIcon(f.status)}
                    <span className={`text-xs flex-1 ${f.status === "completed" ? "text-slate-500 line-through" : "text-slate-300"}`}>{f.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 ${f.priority === "Must Have" ? "bg-red-900/30 text-red-400" : f.priority === "Should Have" ? "bg-amber-900/30 text-amber-400" : "bg-slate-800 text-slate-400"}`}>{f.priority}</span>
                    <span className="text-[10px] text-slate-500">RICE: {f.rice}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${(m.features.filter(f => f.status === "completed").length / m.features.length) * 100}%` }} />
              </div>
              <span className="text-[10px] text-slate-500">{m.features.filter(f => f.status === "completed").length}/{m.features.length}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ===== PRDS SECTION ===== */
const PrdsSection = ({ prds, setPrds }: { prds: PmPrd[]; setPrds: (p: PmPrd[]) => void }) => (
  <div>
    <h3 className="text-sm font-bold text-white tracking-widest mb-4"><FileText size={14} className="inline mr-2 text-purple-400" />PRD_FACTORY</h3>
    <div className="space-y-4">
      {prds.map((prd, idx) => (
        <motion.div key={prd.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
          className="bg-slate-900 border border-slate-700 p-5 hover:border-purple-800/50 transition-all">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="text-sm font-bold text-white">{prd.title}</h4>
              <div className="flex gap-2 mt-1">
                <span className="text-[10px] bg-purple-900/30 text-purple-400 px-2 py-0.5">{prd.product}</span>
                <span className="text-[10px] text-slate-600">v{prd.version}</span>
                <StatusBadge status={prd.status} />
              </div>
            </div>
            <span className="text-[10px] text-slate-600">{prd.lastUpdated}</span>
          </div>
          <p className="text-xs text-slate-400 mb-3">{prd.problemStatement}</p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-slate-950 border border-slate-800 p-3">
              <span className="text-[10px] text-slate-500 block mb-1">GOALS</span>
              {prd.goals.map((g, i) => <p key={i} className="text-[11px] text-green-400 mt-1">✓ {g}</p>)}
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3">
              <span className="text-[10px] text-slate-500 block mb-1">NON-GOALS</span>
              {prd.nonGoals.map((g, i) => <p key={i} className="text-[11px] text-red-400 mt-1">✗ {g}</p>)}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-slate-500">{prd.userStoryCount} User Stories</span>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${prd.completeness}%` }} />
              </div>
              <span className="text-[10px] text-slate-500">{prd.completeness}%</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ===== PROTOTYPES SECTION ===== */
const PrototypesSection = ({ prototypes }: { prototypes: any[] }) => (
  <div>
    <h3 className="text-sm font-bold text-white tracking-widest mb-4"><Layers size={14} className="inline mr-2 text-orange-400" />PROTOTYPE_LAB</h3>
    <div className="space-y-4">
      {prototypes.map((p, idx) => (
        <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
          className="bg-slate-900 border border-slate-700 p-5 hover:border-orange-800/50 transition-all">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-sm font-bold text-white">{p.title}</h4>
            <div className="flex gap-2">
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5">{p.version}</span>
              <StatusBadge status={p.status} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-lg font-bold text-orange-400" style={{ fontFamily: "'Orbitron',sans-serif" }}>{p.feedbackCount}</span>
              <span className="text-[10px] text-slate-500 block mt-1">FEEDBACK</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-lg font-bold text-cyan-400" style={{ fontFamily: "'Orbitron',sans-serif" }}>{p.version.replace("v", "")}</span>
              <span className="text-[10px] text-slate-500 block mt-1">VERSION</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-[10px] text-slate-400">{p.lastTested}</span>
              <span className="text-[10px] text-slate-500 block mt-1">LAST TEST</span>
            </div>
          </div>
          {p.testResults && (
            <div className="mt-3 bg-slate-950 border border-slate-800 p-3">
              <span className="text-[10px] text-slate-500">TEST RESULTS</span>
              <p className="text-xs text-slate-300 mt-1">{p.testResults}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

/* ===== METRICS SECTION ===== */
const MetricsSection = ({ metrics, setMetrics }: { metrics: PmMetric[]; setMetrics: (m: PmMetric[]) => void }) => {
  const typeIcons: Record<string, React.ReactNode> = {
    "north-star": <Star size={12} className="text-amber-400" />,
    input: <TrendingUp size={12} className="text-green-400" />,
    health: <BarChart3 size={12} className="text-blue-400" />,
    guardrail: <AlertTriangle size={12} className="text-red-400" />,
  };

  return (
    <div>
      <h3 className="text-sm font-bold text-white tracking-widest mb-4"><BarChart3 size={14} className="inline mr-2 text-cyan-400" />METRICS_COCKPIT</h3>
      <div className="space-y-3">
        {metrics.map((m, idx) => (
          <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
            className={`bg-slate-900 border p-4 transition-all ${
              m.type === "north-star" ? "border-amber-800/50 border-l-4 border-l-amber-400" : "border-slate-700"
            }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {typeIcons[m.type]}
                <span className="text-sm font-bold text-white">{m.name}</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 uppercase">{m.type}</span>
              </div>
              <StatusBadge status={m.status} />
            </div>
            <div className="flex items-center gap-6 mt-3">
              <div>
                <span className="text-[10px] text-slate-500 block">CURRENT</span>
                <span className="text-sm text-slate-300 font-mono">{m.current}</span>
              </div>
              <ChevronRight size={14} className="text-slate-600" />
              <div>
                <span className="text-[10px] text-slate-500 block">TARGET</span>
                <span className="text-sm text-cyan-400 font-mono font-bold">{m.target}</span>
              </div>
              <span className="text-[10px] text-slate-600 ml-auto">{m.linkedProduct}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PmAgentTab;

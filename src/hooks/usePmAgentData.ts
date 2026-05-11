import { useState, useCallback, useEffect } from "react";
import defaultPmData from "../data/pm-data.json";
import { supabase, hasSupabaseConfig } from "../lib/supabase";

function load<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch { return fallback; }
}

function save(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export interface PmIdea {
  id: string;
  title: string;
  problem: string;
  persona: string;
  viability: number;
  feasibility: number;
  desirability: number;
  status: "draft" | "exploring" | "validated" | "killed";
  stage: "ideation" | "research" | "planning" | "prd" | "prototype" | "metrics";
  assumptions: string[];
  created_at: string;
  updated_at: string;
}

export interface PmResearch {
  id: string;
  title: string;
  type: "competitive" | "market-sizing" | "user-research" | "technology";
  status: "not-started" | "in-progress" | "completed";
  summary: string;
  competitors: string[];
  keyFindings: string[];
  linkedIdea: string;
  created_at: string;
}

export interface RoadmapFeature {
  name: string;
  priority: "Must Have" | "Should Have" | "Could Have" | "Won't Have";
  rice: number;
  status: "completed" | "in-progress" | "not-started" | "blocked";
}

export interface PmMilestone {
  id: string;
  title: string;
  theme: string;
  status: "active" | "upcoming" | "completed";
  startDate: string;
  endDate: string;
  features: RoadmapFeature[];
}

export interface PmPrd {
  id: string;
  title: string;
  product: string;
  version: string;
  status: "draft" | "in-review" | "approved" | "in-progress" | "completed";
  author: string;
  lastUpdated: string;
  problemStatement: string;
  goals: string[];
  nonGoals: string[];
  userStoryCount: number;
  completeness: number;
}

export interface PmPrototype {
  id: string;
  title: string;
  version: string;
  status: "draft" | "testing" | "validated" | "deprecated";
  linkedPrd: string;
  feedbackCount: number;
  lastTested: string;
  testResults: string;
}

export interface PmMetric {
  id: string;
  name: string;
  type: "north-star" | "input" | "health" | "guardrail";
  current: string;
  target: string;
  status: "tracking" | "needs-instrumentation" | "on-track" | "at-risk" | "missed";
  linkedProduct: string;
}

export function useIdeas() {
  const [ideas, setIdeas] = useState<PmIdea[]>(load("pm_ideas", defaultPmData.ideas as PmIdea[]));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('pm_ideas').select('*').order('created_at', { ascending: false }).then(({ data }) => {
        if (data && data.length > 0) setIdeas(data);
      });
    }
  }, []);

  const update = useCallback(async (newIdeas: PmIdea[]) => {
    setIdeas(newIdeas);
    save("pm_ideas", newIdeas);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('pm_ideas').upsert(newIdeas);
    }
  }, []);

  return { ideas, setIdeas: update };
}

export function useResearch() {
  const [research, setResearch] = useState<PmResearch[]>(load("pm_research", defaultPmData.research as PmResearch[]));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('pm_research').select('*').order('created_at', { ascending: false }).then(({ data }) => {
        if (data && data.length > 0) setResearch(data);
      });
    }
  }, []);

  const update = useCallback(async (newResearch: PmResearch[]) => {
    setResearch(newResearch);
    save("pm_research", newResearch);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('pm_research').upsert(newResearch);
    }
  }, []);

  return { research, setResearch: update };
}

export function useRoadmap() {
  const [milestones, setMilestones] = useState<PmMilestone[]>(load("pm_roadmap", defaultPmData.roadmap as PmMilestone[]));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('pm_roadmap').select('*').then(({ data }) => {
        if (data && data.length > 0) setMilestones(data);
      });
    }
  }, []);

  const update = useCallback(async (newMilestones: PmMilestone[]) => {
    setMilestones(newMilestones);
    save("pm_roadmap", newMilestones);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('pm_roadmap').upsert(newMilestones);
    }
  }, []);

  return { milestones, setMilestones: update };
}

export function usePRDs() {
  const [prds, setPrds] = useState<PmPrd[]>(load("pm_prds", defaultPmData.prds as PmPrd[]));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('pm_prds').select('*').then(({ data }) => {
        if (data && data.length > 0) setPrds(data);
      });
    }
  }, []);

  const update = useCallback(async (newPrds: PmPrd[]) => {
    setPrds(newPrds);
    save("pm_prds", newPrds);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('pm_prds').upsert(newPrds);
    }
  }, []);

  return { prds, setPrds: update };
}

export function usePrototypes() {
  const [prototypes, setPrototypes] = useState<PmPrototype[]>(load("pm_prototypes", defaultPmData.prototypes as PmPrototype[]));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('pm_prototypes').select('*').then(({ data }) => {
        if (data && data.length > 0) setPrototypes(data);
      });
    }
  }, []);

  const update = useCallback(async (newPrototypes: PmPrototype[]) => {
    setPrototypes(newPrototypes);
    save("pm_prototypes", newPrototypes);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('pm_prototypes').upsert(newPrototypes);
    }
  }, []);

  return { prototypes, setPrototypes: update };
}

export function useMetrics() {
  const [metrics, setMetrics] = useState<PmMetric[]>(load("pm_metrics", defaultPmData.metrics as PmMetric[]));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('pm_metrics').select('*').then(({ data }) => {
        if (data && data.length > 0) setMetrics(data);
      });
    }
  }, []);

  const update = useCallback(async (newMetrics: PmMetric[]) => {
    setMetrics(newMetrics);
    save("pm_metrics", newMetrics);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('pm_metrics').upsert(newMetrics);
    }
  }, []);

  return { metrics, setMetrics: update };
}

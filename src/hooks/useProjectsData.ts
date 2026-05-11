import { useState, useEffect } from "react";
import defaultProjectsData from "../data/projects-data.json";

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  company: string;
  role: string;
  duration: string;
  skills: string[];
  context: string;
  problem: string;
  process: string;
  solution: string;
  impact: string[];
  learnings: string;
  imageUrl: string;
  liveUrl?: string;
}

export function useProjectsData() {
  const [caseStudies, setCaseStudies] = useState<ProjectCaseStudy[]>([]);

  useEffect(() => {
    setCaseStudies(defaultProjectsData.caseStudies);
  }, []);

  return { caseStudies };
}

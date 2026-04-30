import { useState, useCallback, useEffect } from "react";
import defaultPosts from "../data/posts.json";
import defaultJobs from "../data/jobs.json";
import defaultReplies from "../data/replies.json";
import defaultProfile from "../data/profile.json";
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

export function usePosts() {
  const [posts, setPosts] = useState<any[]>(load("cc_posts", defaultPosts));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('posts').select('*').order('date', { ascending: false }).then(({ data }) => {
        if (data && data.length > 0) setPosts(data);
      });
    }
  }, []);

  const update = useCallback(async (newPosts: any[]) => {
    setPosts(newPosts);
    save("cc_posts", newPosts);
    if (hasSupabaseConfig && supabase) {
      // In a real scenario, we'd upsert based on an ID. 
      // For simplicity in this demo transition, we'll clear and insert or upsert if IDs exist.
      // Assuming simple insert for now for new posts.
      await supabase.from('posts').upsert(newPosts);
    }
  }, []);

  return { posts, setPosts: update };
}

export function useJobs() {
  const [jobs, setJobs] = useState<any[]>(load("cc_jobs", defaultJobs));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('jobs').select('*').then(({ data }) => {
        if (data && data.length > 0) setJobs(data);
      });
    }
  }, []);

  const update = useCallback(async (newJobs: any[]) => {
    setJobs(newJobs);
    save("cc_jobs", newJobs);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('jobs').upsert(newJobs);
    }
  }, []);

  return { jobs, setJobs: update };
}

export function useReplies() {
  const [replies, setReplies] = useState<any[]>(load("cc_replies", defaultReplies));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('replies').select('*').then(({ data }) => {
        if (data && data.length > 0) setReplies(data);
      });
    }
  }, []);

  const update = useCallback(async (newReplies: any[]) => {
    setReplies(newReplies);
    save("cc_replies", newReplies);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('replies').upsert(newReplies);
    }
  }, []);

  return { replies, setReplies: update };
}

export function useProfile() {
  const [profile, setProfile] = useState<any>(load("cc_profile", defaultProfile));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('profiles').select('*').single().then(({ data }) => {
        if (data) setProfile(data);
      });
    }
  }, []);

  const update = useCallback(async (newProfile: any) => {
    setProfile(newProfile);
    save("cc_profile", newProfile);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('profiles').upsert([{ id: 1, ...newProfile }]);
    }
  }, []);

  return { profile, setProfile: update };
}

import { defaultHero, defaultAbout } from "../data/portfolio";

export function usePortfolioContent() {
  const [hero, setHero] = useState<any>(load("cc_hero", defaultHero));
  const [about, setAbout] = useState<any>(load("cc_about", defaultAbout));

  useEffect(() => {
    if (hasSupabaseConfig && supabase) {
      supabase.from('portfolio_content').select('*').then(({ data }) => {
        if (data && data.length > 0) {
          const heroData = data.find(d => d.section_id === 'hero');
          const aboutData = data.find(d => d.section_id === 'about');
          if (heroData) setHero(heroData.content);
          if (aboutData) setAbout(aboutData.content);
        }
      });
    }
  }, []);

  const updateHero = useCallback(async (newHero: any) => {
    setHero(newHero);
    save("cc_hero", newHero);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('portfolio_content').upsert([{ section_id: 'hero', content: newHero }]);
    }
  }, []);

  const updateAbout = useCallback(async (newAbout: any) => {
    setAbout(newAbout);
    save("cc_about", newAbout);
    if (hasSupabaseConfig && supabase) {
      await supabase.from('portfolio_content').upsert([{ section_id: 'about', content: newAbout }]);
    }
  }, []);

  return { hero, updateHero, about, updateAbout };
}

export function refreshFromLinkedIn(): Promise<boolean> {
  // Opens LinkedIn profile in a new tab for manual data sync
  window.open("https://www.linkedin.com/in/arpittripathii/", "_blank");
  return Promise.resolve(true);
}

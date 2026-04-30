import { useState, useCallback } from "react";
import defaultPosts from "../data/posts.json";
import defaultJobs from "../data/jobs.json";
import defaultReplies from "../data/replies.json";
import defaultProfile from "../data/profile.json";

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
  const update = useCallback((newPosts: any[]) => { setPosts(newPosts); save("cc_posts", newPosts); }, []);
  return { posts, setPosts: update };
}

export function useJobs() {
  const [jobs, setJobs] = useState<any[]>(load("cc_jobs", defaultJobs));
  const update = useCallback((newJobs: any[]) => { setJobs(newJobs); save("cc_jobs", newJobs); }, []);
  return { jobs, setJobs: update };
}

export function useReplies() {
  const [replies, setReplies] = useState<any[]>(load("cc_replies", defaultReplies));
  const update = useCallback((newReplies: any[]) => { setReplies(newReplies); save("cc_replies", newReplies); }, []);
  return { replies, setReplies: update };
}

export function useProfile() {
  const [profile, setProfile] = useState<any>(load("cc_profile", defaultProfile));
  const update = useCallback((newProfile: any) => { setProfile(newProfile); save("cc_profile", newProfile); }, []);
  return { profile, setProfile: update };
}

export function refreshFromLinkedIn(): Promise<boolean> {
  // Opens LinkedIn profile in a new tab for manual data sync
  window.open("https://www.linkedin.com/in/arpittripathii/", "_blank");
  return Promise.resolve(true);
}

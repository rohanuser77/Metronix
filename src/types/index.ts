export interface WaitlistEntry {
  id?: string;
  email: string;
  name?: string;
  role?: "student" | "parent" | "teacher" | "other";
  classLevel?: string;
  state?: string;
  source?: string;
  created_at?: string;
}

export interface Scholarship {
  id: string;
  title: string;
  titleHindi: string;
  provider: string;
  amount: string;
  eligibility: string;
  eligibilityHindi: string;
  category: "all" | "sc_st" | "obc" | "girls" | "merit";
  minMarks: number;
  maxIncomeLakhs: number;
  deadline: string;
  applyUrl?: string;
  tag: string;
}

export interface Pillar {
  id: string;
  title: string;
  titleHindi: string;
  subtitle: string;
  description: string;
  descriptionHindi: string;
  accent: string;
  category: "stem" | "mentor" | "scholarship" | "routine" | "opportunities" | "community" | "exams" | "leaderboard" | "teacher" | "kiosk";
  features: string[];
  featuresHindi: string[];
  size?: "sm" | "md" | "lg";
}

export interface TestimonialQuestion {
  question: string;
  student: string;
  grade: string;
  location: string;
  status: string;
}

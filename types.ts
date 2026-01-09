import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Job {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  rank: string;
  description: string;
}
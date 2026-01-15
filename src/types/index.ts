export interface Project {
  title: string;
  role: string;
  tech: string[];
  description: string;
  contributions: string[];
  status: string;
  gradient: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface ContactInfo {
  title: string;
  value: string;
  href: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

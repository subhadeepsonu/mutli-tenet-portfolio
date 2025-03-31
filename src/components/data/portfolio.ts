
export interface Skill {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  index: number;
  title: string;
  description: string;
  link: string;
  github: string;
}

export interface Experience {
  id: string;
  index: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string
}

export interface PortfolioData {
  user: {
    id: string;
    domain: string;
    email: string;
    bio?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    theme: string;
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
  };
}

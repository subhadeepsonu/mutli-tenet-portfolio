
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
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  id: string;
  index: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioData {
  user: {
    id: string;
    domain: string;
    email: string;
    bio?: string;
    socialLink: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
    style: {
      id: number;
      name: string;
    };
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
    createdAt: string;
    updatedAt: string;
  };
}

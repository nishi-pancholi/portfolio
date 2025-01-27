// frontend/src/types/index.ts
export interface Project {
    _id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
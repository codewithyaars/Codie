export interface User {
  username: string;
  password: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  logo: string;
  color: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  completed: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  completed: boolean;
  aiSummary?: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export interface Progress {
  courseId: string;
  completedLessons: string[];
  totalLessons: number;
  percentage: number;
}
import React from 'react';
import { Course } from '../types';
import { BookOpen, Trophy, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  progress: number;
  onSelect: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, progress, onSelect }) => {
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <div 
      onClick={() => onSelect(course.id)}
      className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{course.logo}</div>
        <div>
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
          <p className="text-gray-400 text-sm">{course.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
        <div className="flex items-center">
          <BookOpen className="h-4 w-4 mr-1" />
          <span>{course.modules.length} Modules</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{totalLessons} Lessons</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress</span>
          <span className="text-green-400 font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {progress === 100 && (
        <div className="flex items-center justify-center text-yellow-400 font-semibold">
          <Trophy className="h-4 w-4 mr-1" />
          <span>Completed!</span>
        </div>
      )}
    </div>
  );
};
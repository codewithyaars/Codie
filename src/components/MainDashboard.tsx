import React from 'react';
import { CourseCard } from './CourseCard';
import { courses } from '../data/courses';
import { useProgress } from '../hooks/useProgress';
import { LogOut, Code, Zap, Wrench } from 'lucide-react';

interface MainDashboardProps {
  username: string;
  onCourseSelect: (courseId: string) => void;
  onLogout: () => void;
}

export const MainDashboard: React.FC<MainDashboardProps> = ({ 
  username, 
  onCourseSelect, 
  onLogout 
}) => {
  const htmlProgress = useProgress('html');
  const cssProgress = useProgress('css');
  const jsProgress = useProgress('javascript');

  // Map progress values for each course
  const progressMap = {
    html: htmlProgress.progress.percentage,
    css: cssProgress.progress.percentage,
    javascript: jsProgress.progress.percentage
  };

  const comingSoonLanguages = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Vue.js', icon: '💚', color: '#4FC08D' },
    { name: 'Angular', icon: '🅰️', color: '#DD0031' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
              <Code className="h-10 w-10 mr-3 text-green-400" />
              CodeRoadmap
            </h1>
            {/* Fixed: Using username directly instead of undefined user */}
            <p className="text-gray-400">
              Welcome back, {username}! Continue your learning journey.
            </p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Overall Progress */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
            <div className="flex items-center">
              <div className="bg-green-500/20 p-3 rounded-full mr-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {Math.round((progressMap.html + progressMap.css + progressMap.javascript) / 3)}%
                </div>
                <div className="text-gray-400">Overall Progress</div>
              </div>
            </div>
          </div>

          {/* Active Courses */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
            <div className="flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                <Wrench className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-gray-400">Active Courses</div>
              </div>
            </div>
          </div>

          {/* Completed Courses */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
            <div className="flex items-center">
              <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                <Code className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {Object.values(progressMap).filter(p => p === 100).length}
                </div>
                <div className="text-gray-400">Completed Courses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                progress={progressMap[course.id as keyof typeof progressMap]}
                onSelect={onCourseSelect}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {comingSoonLanguages.map((lang) => (
              <div
                key={lang.name}
                className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 text-center opacity-60 cursor-not-allowed"
              >
                <div className="text-4xl mb-2">{lang.icon}</div>
                <div className="text-white font-semibold text-sm">{lang.name}</div>
                <div className="text-gray-500 text-xs mt-1">Coming Soon</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

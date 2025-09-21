import React, { useState } from 'react';
import { Course, Lesson } from '../types';
import { useProgress } from '../hooks/useProgress';
import { VideoPlayer } from './VideoPlayer';
import { ProgressTracker } from './ProgressTracker';
import { ChevronRight, ChevronDown, Play, CheckCircle, BookOpen } from 'lucide-react';

interface CourseDashboardProps {
  course: Course;
  onBack: () => void;
}

export const CourseDashboard: React.FC<CourseDashboardProps> = ({ course, onBack }) => {
  const { progress, markLessonComplete, isLessonComplete } = useProgress(course.id);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [expandedModules, setExpandedModules] = useState<string[]>([course.modules[0]?.id || '']);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleLessonComplete = () => {
    if (selectedLesson) {
      const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
      markLessonComplete(selectedLesson.id, totalLessons);
    }
  };

  const completedLessonsCount = course.modules
    .flatMap(module => module.lessons)
    .filter(lesson => isLessonComplete(lesson.id)).length;

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const progressPercentage = Math.round((completedLessonsCount / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white mr-4 text-2xl"
            >
              ←
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <span className="mr-3">{course.logo}</span>
                {course.title}
              </h1>
              <p className="text-gray-400">{course.description}</p>
            </div>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 min-w-48">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">{progressPercentage}%</div>
              <div className="text-sm text-gray-400 mb-2">Course Progress</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {completedLessonsCount} of {totalLessons} lessons
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Course Modules
              </h2>
              
              <div className="space-y-2">
                {course.modules.map((module) => {
                  const isExpanded = expandedModules.includes(module.id);
                  const completedInModule = module.lessons.filter(lesson => 
                    isLessonComplete(lesson.id)
                  ).length;
                  
                  return (
                    <div key={module.id} className="border border-gray-700/50 rounded-lg">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full p-3 text-left hover:bg-gray-700/50 transition-colors rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold text-sm">{module.title}</span>
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {completedInModule}/{module.lessons.length} lessons completed
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="px-3 pb-3 space-y-1">
                          {module.lessons.map((lesson) => {
                            const completed = isLessonComplete(lesson.id);
                            return (
                              <button
                                key={lesson.id}
                                onClick={() => setSelectedLesson(lesson)}
                                className={`w-full p-2 text-left rounded text-sm transition-colors ${
                                  selectedLesson?.id === lesson.id
                                    ? 'bg-blue-600/50 text-white'
                                    : 'hover:bg-gray-700/30 text-gray-300'
                                }`}
                              >
                                <div className="flex items-center">
                                  {completed ? (
                                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                                  ) : (
                                    <Play className="h-4 w-4 text-gray-400 mr-2" />
                                  )}
                                  <span>{lesson.title}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Progress Tracker */}
            <ProgressTracker courseId={course.id} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedLesson ? (
              <VideoPlayer
                videoUrl={selectedLesson.videoUrl}
                lessonTitle={selectedLesson.title}
                lessonContent={selectedLesson.content}
                onComplete={handleLessonComplete}
                isCompleted={isLessonComplete(selectedLesson.id)}
              />
            ) : (
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-12 text-center">
                <div className="text-6xl mb-4">{course.logo}</div>
                <h2 className="text-2xl font-bold text-white mb-4">Welcome to {course.title}</h2>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Select a lesson from the sidebar to start your learning journey. Track your progress
                  and get AI-powered summaries to enhance your understanding.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">{course.modules.length}</div>
                    <div className="text-sm text-gray-400">Modules</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">{totalLessons}</div>
                    <div className="text-sm text-gray-400">Lessons</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">{progressPercentage}%</div>
                    <div className="text-sm text-gray-400">Complete</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
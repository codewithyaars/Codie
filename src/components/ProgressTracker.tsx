import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Award, Calendar, Brain, Zap } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { geminiService } from '../utils/geminiApi';

interface ProgressTrackerProps {
  courseId: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ courseId }) => {
  const { user } = useAuth();
  const { progress } = useProgress(courseId);
  const [prediction, setPrediction] = useState<string>('');
  const [loadingPrediction, setLoadingPrediction] = useState(false);

  useEffect(() => {
    if (progress.completedLessons.length > 0) {
      generatePrediction();
    }
  }, [progress.completedLessons]);

  const generatePrediction = async () => {
    setLoadingPrediction(true);
    try {
      const progressInfo = `Course: ${courseId}, Completed lessons: ${progress.completedLessons.length}, Total lessons: ${progress.totalLessons}, Progress: ${progress.percentage}%`;
      const aiPrediction = await geminiService.predictProgress(progressInfo);
      setPrediction(aiPrediction);
    } catch (error) {
      console.error('Error generating prediction:', error);
    } finally {
      setLoadingPrediction(false);
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'from-green-500 to-emerald-600';
    if (percentage >= 60) return 'from-blue-500 to-cyan-600';
    if (percentage >= 40) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getMotivationalMessage = (percentage: number) => {
    if (percentage >= 90) return "Outstanding! You're almost there! 🎉";
    if (percentage >= 70) return "Great progress! Keep up the momentum! 🚀";
    if (percentage >= 50) return "You're halfway there! Don't give up! 💪";
    if (percentage >= 25) return "Good start! Every expert was once a beginner! 🌱";
    return "Just getting started! Every journey begins with a single step! ✨";
  };

  const estimatedCompletionDays = Math.ceil((progress.totalLessons - progress.completedLessons) / 2); // Assuming 2 lessons per day

  return (
    <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
          Progress Tracker
        </h2>
        <div className="text-sm text-gray-400">
          Course: {courseId.toUpperCase()}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{progress.percentage}%</div>
          <div className="text-sm text-gray-400">Complete</div>
        </div>
        
        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{progress.completedLessons.length}</div>
          <div className="text-sm text-gray-400">Lessons Done</div>
        </div>
        
        <div className="bg-gray-700/50 rounded-lg p-4 text-center">
          <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">{estimatedCompletionDays}</div>
          <div className="text-sm text-gray-400">Days to Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress</span>
          <span className="text-white font-semibold">{progress.completedLessons.length} / {progress.totalLessons} lessons</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className={`bg-gradient-to-r ${getProgressColor(progress.percentage)} h-3 rounded-full transition-all duration-500 relative overflow-hidden`}
            style={{ width: `${progress.percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <div className="text-center mt-2 text-green-400 font-semibold">
          {getMotivationalMessage(progress.percentage)}
        </div>
      </div>

      {/* AI Prediction Section */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
        <div className="flex items-center mb-3">
          <Brain className="h-5 w-5 text-purple-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">AI Learning Prediction</h3>
          {loadingPrediction && (
            <div className="ml-2">
              <Zap className="h-4 w-4 text-yellow-400 animate-pulse" />
            </div>
          )}
        </div>
        
        {loadingPrediction ? (
          <div className="flex items-center text-gray-400">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400 mr-2"></div>
            Analyzing your learning patterns...
          </div>
        ) : prediction ? (
          <div className="text-gray-300 text-sm space-y-2">
            {prediction.split('\n').slice(0, 3).map((line, index) => (
              line.trim() && <p key={index}>• {line.trim()}</p>
            ))}
          </div>
        ) : (
          <div className="text-gray-400 text-sm">
            Complete more lessons to get AI-powered insights about your learning journey!
          </div>
        )}
        
        {progress.completedLessons.length > 0 && (
          <button
            onClick={generatePrediction}
            disabled={loadingPrediction}
            className="mt-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
          >
            <Brain className="h-4 w-4 mr-1" />
            {loadingPrediction ? 'Analyzing...' : 'Get New Prediction'}
          </button>
        )}
      </div>

      {/* Achievement Badges */}
      {progress.percentage > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
          <div className="flex flex-wrap gap-2">
            {progress.percentage >= 25 && (
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1 text-xs text-yellow-400 flex items-center">
                <Award className="h-3 w-3 mr-1" />
                First Steps
              </div>
            )}
            {progress.percentage >= 50 && (
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-xs text-blue-400 flex items-center">
                <Award className="h-3 w-3 mr-1" />
                Halfway Hero
              </div>
            )}
            {progress.percentage >= 75 && (
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs text-purple-400 flex items-center">
                <Award className="h-3 w-3 mr-1" />
                Almost There
              </div>
            )}
            {progress.percentage >= 100 && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 text-xs text-green-400 flex items-center">
                <Award className="h-3 w-3 mr-1" />
                Course Master
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
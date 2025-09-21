import { useState, useEffect, useCallback } from 'react';
import { firebaseService } from '../config/firebase';
import { useAuth } from './useAuth';
import { Progress } from '../types';

export const useProgress = (courseId: string) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress>({
    courseId,
    completedLessons: [],
    totalLessons: 0,
    percentage: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      if (!user?.uid) {
        setLoading(false);
        return;
      }

      try {
        const userProgress = await firebaseService.getUserProgress(user.uid);
        if (userProgress && userProgress[courseId]) {
          const courseProgress = userProgress[courseId];
          setProgress({
            courseId,
            completedLessons: courseProgress.completedLessons || [],
            totalLessons: courseProgress.totalLessons || 0,
            percentage: courseProgress.percentage || 0
          });
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [courseId, user?.uid]);

  const markLessonComplete = useCallback(async (lessonId: string, totalLessons: number) => {
    if (!user?.uid || progress.completedLessons.includes(lessonId)) {
      return;
    }

    try {
      await firebaseService.updateUserProgress(user.uid, courseId, lessonId, totalLessons);
      
      // Update local state
      const newCompletedLessons = [...progress.completedLessons, lessonId];
      const newPercentage = Math.round((newCompletedLessons.length / totalLessons) * 100);
      
      setProgress({
        courseId,
        completedLessons: newCompletedLessons,
        totalLessons,
        percentage: newPercentage
      });
    } catch (error) {
      console.error('Error marking lesson complete:', error);
    }
  }, [user?.uid, courseId, progress.completedLessons]);

  const markLessonCompleteLocal = (lessonId: string, totalLessons: number) => {
    const updatedProgress = {
      courseId,
      completedLessons: [...progress.completedLessons, lessonId],
      totalLessons,
      percentage: Math.round(((progress.completedLessons.length + 1) / totalLessons) * 100)
    };
    
    setProgress(updatedProgress);
  };

  const isLessonComplete = (lessonId: string): boolean => {
    return progress.completedLessons.includes(lessonId);
  };

  return { progress, markLessonComplete, isLessonComplete, loading };
};
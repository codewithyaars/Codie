import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { MainDashboard } from './components/MainDashboard';
import { CourseDashboard } from './components/CourseDashboard';
import { ChatSystem } from './components/ChatSystem';
import { Scene3D } from './components/Scene3D';
import { useAuth } from './hooks/useAuth';
import { useTabWarning } from './hooks/useTabWarning';
import { courses } from './data/courses';

function App() {
  const { user, login, logout, loading, getUsername } = useAuth();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  useTabWarning();

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  const handleBackToDashboard = () => {
    setSelectedCourseId(null);
  };

  const selectedCourse = selectedCourseId 
    ? courses.find(course => course.id === selectedCourseId)
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative">
        <Scene3D />
        <LoginForm onLogin={login} />
      </div>
    );
  }

  const username = getUsername();

  return (
    <div className="relative">
      <Scene3D />
      {selectedCourse ? (
        <CourseDashboard 
          course={selectedCourse} 
          onBack={handleBackToDashboard} 
        />
      ) : (
        <MainDashboard
          username={username || 'User'}
          onCourseSelect={handleCourseSelect}
          onLogout={logout}
        />
      )}
      <ChatSystem />
    </div>
  );
}

export default App;
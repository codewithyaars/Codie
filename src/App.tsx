import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { LoginForm } from './components/LoginForm';
import { MainDashboard } from './components/MainDashboard';
import { CourseDashboard } from './components/CourseDashboard';
import { ChatSystem } from './components/ChatSystem';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Contact } from './components/Contact';
import { AIServices } from './components/AIServices';
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

  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={
            user ? (
              selectedCourse ? (
                <CourseDashboard 
                  course={selectedCourse} 
                  onBack={handleBackToDashboard} 
                />
              ) : (
                <MainDashboard
                  username={getUsername() || 'User'}
                  onCourseSelect={handleCourseSelect}
                  onLogout={logout}
                />
              )
            ) : (
              <LoginForm onLogin={login} />
            )
          } />
          <Route path="/dashboard" element={
            user ? (
              selectedCourse ? (
                <CourseDashboard 
                  course={selectedCourse} 
                  onBack={handleBackToDashboard} 
                />
              ) : (
                <MainDashboard
                  username={getUsername() || 'User'}
                  onCourseSelect={handleCourseSelect}
                  onLogout={logout}
                />
              )
            ) : (
              <LoginForm onLogin={login} />
            )
          } />
          <Route path="/ai-services" element={<AIServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ChatSystem />
      </div>
    </Router>
  );
}

export default App;
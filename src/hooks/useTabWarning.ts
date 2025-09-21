import { useEffect } from 'react';

export const useTabWarning = () => {
  useEffect(() => {
    const showAlert = () => {
      alert('🚨 Focus on your learning! Tab switching won\'t build your career - consistent practice will!');
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '🚨 Focus on Learning - CODIEE';
        showAlert();
      } else {
        document.title = 'CODIEE - Learn Programming';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
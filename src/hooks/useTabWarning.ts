import { useEffect } from 'react';

export const useTabWarning = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '🚨 Idhar dekhle kya karega tab switch karke career nhi banana!';
      } else {
        document.title = 'CodeRoadmap - Learn Programming';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
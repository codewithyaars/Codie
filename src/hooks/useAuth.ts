import { useState, useCallback, useEffect } from 'react';
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseService } from '../config/firebase';

// Mapping usernames to email addresses for Firebase Auth
const USER_MAPPING = {
  'Shravani': 'shravani@codie.com',
  'Harsh': 'harsh@codie.com'
};

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback(async (username: string, password: string): Promise<boolean> => {
    try {
      const email = USER_MAPPING[username as keyof typeof USER_MAPPING];
      if (!email) {
        return false;
      }

      await firebaseService.signIn(email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await firebaseService.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);

  const getUsername = () => {
    if (!user?.email) return null;
    const entry = Object.entries(USER_MAPPING).find(([, email]) => email === user.email);
    return entry ? entry[0] : null;
  };

  return { user, login, logout, loading, getUsername };
};
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBETJjMm9zlohsTZ9NXEmvT2fgACIxjpU8",
  authDomain: "codie-ce5d2.firebaseapp.com",
  projectId: "codie-ce5d2",
  storageBucket: "codie-ce5d2.firebasestorage.app",
  messagingSenderId: "633415120788",
  appId: "1:633415120788:web:bbe16daabaf8b7f6a14181",
  measurementId: "G-G5BLPVY658"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const firebaseService = {
  // Authentication
  async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  },

  async signOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  },

  // User Progress
  async getUserProgress(userId: string) {
    try {
      const docRef = doc(db, 'userProgress', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // Create initial progress document
        const initialProgress = {
          html: { completedLessons: [], percentage: 0 },
          css: { completedLessons: [], percentage: 0 },
          javascript: { completedLessons: [], percentage: 0 }
        };
        await setDoc(docRef, initialProgress);
        return initialProgress;
      }
    } catch (error) {
      console.error('Error getting user progress:', error);
      return null;
    }
  },

  async updateUserProgress(userId: string, courseId: string, lessonId: string, totalLessons: number) {
    try {
      const docRef = doc(db, 'userProgress', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const currentData = docSnap.data();
        const courseProgress = currentData[courseId] || { completedLessons: [], percentage: 0 };
        
        if (!courseProgress.completedLessons.includes(lessonId)) {
          const newCompletedLessons = [...courseProgress.completedLessons, lessonId];
          const newPercentage = Math.round((newCompletedLessons.length / totalLessons) * 100);
          
          await updateDoc(docRef, {
            [`${courseId}.completedLessons`]: newCompletedLessons,
            [`${courseId}.percentage`]: newPercentage
          });
        }
      }
    } catch (error) {
      console.error('Error updating user progress:', error);
    }
  },

  // Initialize users in Firestore (run once)
  async initializeUsers() {
    try {
      const users = [
        { id: 'shravani', email: 'shravani@codie.com', username: 'Shravani' },
        { id: 'harsh', email: 'harsh@codie.com', username: 'Harsh' }
      ];

      for (const user of users) {
        const docRef = doc(db, 'users', user.id);
        await setDoc(docRef, user);
      }
    } catch (error) {
      console.error('Error initializing users:', error);
    }
  }
};
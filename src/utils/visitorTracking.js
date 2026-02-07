import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebaseConfig';

/**
 * Track visitor information
 */
export const trackVisitor = async () => {
  // Skip tracking if Firebase is not configured
  if (!isFirebaseConfigured || !db) {
    return;
  }

  try {
    const visitorData = {
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'Direct',
      page: window.location.pathname,
      sessionId: getOrCreateSessionId(),
    };

    await addDoc(collection(db, 'visitors'), visitorData);
    console.log('✅ Visitor tracked successfully');
  } catch (error) {
    console.error('❌ Error tracking visitor:', error);
  }
};

/**
 * Get or create a session ID for tracking unique sessions
 */
const getOrCreateSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

/**
 * Track page view
 */
export const trackPageView = async (pageName) => {
  // Skip tracking if Firebase is not configured
  if (!isFirebaseConfigured || !db) {
    return;
  }

  try {
    await addDoc(collection(db, 'pageViews'), {
      timestamp: serverTimestamp(),
      page: pageName,
      pathname: window.location.pathname,
      sessionId: getOrCreateSessionId(),
    });
  } catch (error) {
    console.error('❌ Error tracking page view:', error);
  }
};


// src/utils/visitorTracking.js
import { db, isFirebaseConfigured } from "../firebaseConfig.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


/**
 * Get or create a session ID for tracking unique sessions
 */
const getOrCreateSessionId = () => {
  let sessionId = sessionStorage.getItem("sessionId");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 11)}`;
    sessionStorage.setItem("sessionId", sessionId);
  }
  return sessionId;
};

/**
 * Track visitor information (writes to /visitors)
 */
export const trackVisitor = async () => {
  if (!isFirebaseConfigured || !db) return;

  try {
    await addDoc(collection(db, "visitors"), {
      timestamp: serverTimestamp(),
      page: window.location.pathname,
      referrer: document.referrer || "Direct",
      platform: navigator.platform || "Unknown",
      userAgent: navigator.userAgent || "Unknown",
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || "Unknown",
      sessionId: getOrCreateSessionId(),
    });
  } catch (error) {
    console.error("❌ Error tracking visitor:", error);
  }
};

/**
 * Track page view (writes to /pageViews)
 */
export const trackPageView = async (pageName) => {
  if (!isFirebaseConfigured || !db) return;

  try {
    await addDoc(collection(db, "pageViews"), {
      timestamp: serverTimestamp(),
      page: pageName || "unknown",
      pathname: window.location.pathname,
      sessionId: getOrCreateSessionId(),
    });
  } catch (error) {
    console.error("❌ Error tracking page view:", error);
  }
};

# Admin Dashboard Setup Guide

## 🎯 What's Included

Your portfolio now has a **visitor tracking system** and **admin dashboard** that tracks:
- Total visitors
- Today's visitors  
- Page views
- Unique sessions
- Visitor details (platform, screen resolution, referrer, timestamp)

## 🚀 Setup Instructions

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name your project (e.g., "portfolio-analytics")
4. Disable Google Analytics (optional)
5. Click "Create project"

### Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database**
2. Click "Create database"
3. Select **"Start in test mode"** (for development)
4. Choose a location close to your users
5. Click "Enable"

### Step 3: Get Firebase Configuration

1. Go to Project Settings (⚙️ icon)
2. Scroll down to "Your apps"
3. Click on the web icon `</>`
4. Register your app
5. Copy the `firebaseConfig` object

### Step 4: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### Step 5: Update Firestore Security Rules

In Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write visitor data
    match /visitors/{document=**} {
      allow read: if false; // Nobody can read
      allow write: if true;  // Anyone can write
    }
    
    match /pageViews/{document=**} {
      allow read: if false;
      allow write: if true;
    }
    
    // TODO: Add authentication for admin dashboard
    // For now, /admin route is public - secure it later!
  }
}
```

## 📊 Access Your Dashboard

Once configured, visit: **`http://localhost:5180/admin`**

## 🔒 Security Recommendations

### For Production:

1. **Add Authentication**:
   - Install Firebase Auth
   - Protect `/admin` route with login
   - Update Firestore rules to require auth

2. **Environment Variables**:
   - Add Firebase config to Vercel/Netlify environment variables
   - Never commit `.env` file

3. **Rate Limiting**:
   - Implement rate limiting on visitor tracking
   - Prevent spam/abuse

## 📈 Features Available

✅ Real-time visitor tracking
✅ Device information (platform, screen resolution)
✅ Referrer tracking
✅ Session-based analytics
✅ Page view tracking
✅ Beautiful dashboard with stats cards
✅ Recent visitors table

## 🛠️ Customize

Edit `/src/pages/AdminDashboard.jsx` to:
- Add more stats
- Change time ranges
- Add charts/graphs
- Export data as CSV

## 📝 Notes

- Visitor tracking runs automatically on page load
- Data is stored in Firestore (free tier: 50k reads/day, 20k writes/day)
- Dashboard is currently **public** - add authentication before deploying!

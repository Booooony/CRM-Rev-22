// Firebase configuration and initialization
// 1) Create a Firebase project at https://console.firebase.google.com
// 2) Enable Firestore (in production mode if needed)
// 3) (Optional) Enable Storage if you plan to host files
// 4) Replace the config below with your project's settings
// 5) Ensure this file is served with your app and included after Firebase CDN scripts

// Firebase configuration for Nick's CRM Tool
const firebaseConfig = {
  apiKey: "AIzaSyBYY-rSKdznJlR2-pgkGswieqfVQP7SzYg",
  authDomain: "nick-s-crm-tool.firebaseapp.com",
  projectId: "nick-s-crm-tool",
  storageBucket: "nick-s-crm-tool.firebasestorage.app",
  messagingSenderId: "330994244044",
  appId: "1:330994244044:web:f7d51bf15ced8a6f79e569"
};

// Initialize Firebase (Compat SDK already loaded from CDN)
firebase.initializeApp(firebaseConfig);

// Firestore and Storage references (global)
window.db = firebase.firestore();
window.storage = firebase.storage ? firebase.storage() : null;

// Helpers
window.firestoreCollections = {
  projects: () => db.collection('projects'),
  costings: () => db.collection('costings'), // docId: `${projectId}_${milestoneId}`
};

// Utility to convert firestore doc to plain object with id
window.withId = (doc) => ({ id: doc.id, ...doc.data() });



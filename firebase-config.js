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
try {
    if (typeof firebase === 'undefined') {
        console.error('Firebase SDK not loaded');
        window.db = null;
        window.storage = null;
        window.firestoreCollections = {
            projects: () => null,
            costings: () => null,
            equipment: () => null,
            milestones: () => null,
            people: () => null,
            notes: () => null
        };
    } else {
        firebase.initializeApp(firebaseConfig);
        
        // Firestore and Storage references (global)
        if (typeof firebase.firestore === 'function') {
            window.db = firebase.firestore();
            console.log('Firestore initialized:', window.db ? 'success' : 'failed (returned null)');
        } else {
            console.error('firebase.firestore is not a function - Firestore script may not have loaded');
            window.db = null;
        }
        window.storage = firebase.storage ? firebase.storage() : null;
        
        // Helpers - only create if db is initialized
        if (window.db) {
        window.firestoreCollections = {
            projects: () => {
                try {
                    if (!window.db) {
                        console.error('Firestore db is not initialized');
                        return null;
                    }
                    if (typeof window.db.collection !== 'function') {
                        console.error('Firestore db.collection is not a function');
                        return null;
                    }
                    return window.db.collection('projects');
                } catch (e) {
                    console.error('Error accessing Firestore projects collection:', e);
                    return null;
                }
            },
            costings: () => {
                try {
                    if (!window.db) {
                        console.error('Firestore db is not initialized');
                        return null;
                    }
                    if (typeof window.db.collection !== 'function') {
                        console.error('Firestore db.collection is not a function');
                        return null;
                    }
                    return window.db.collection('costings'); // docId: `${projectId}_${milestoneId}`
                } catch (e) {
                    console.error('Error accessing Firestore costings collection:', e);
                    return null;
                }
            },
            equipment: () => {
                try {
                    if (!window.db) return null;
                    if (typeof window.db.collection !== 'function') return null;
                    return window.db.collection('equipment');
                } catch (e) {
                    console.error('Error accessing Firestore equipment collection:', e);
                    return null;
                }
            },
            milestones: () => {
                try {
                    if (!window.db) return null;
                    if (typeof window.db.collection !== 'function') return null;
                    return window.db.collection('milestones'); // docId: `${projectId}_${milestoneId}`
                } catch (e) {
                    console.error('Error accessing Firestore milestones collection:', e);
                    return null;
                }
            },
            people: () => {
                try {
                    if (!window.db) return null;
                    if (typeof window.db.collection !== 'function') return null;
                    return window.db.collection('people'); // docId: `project_${projectId}`
                } catch (e) {
                    console.error('Error accessing Firestore people collection:', e);
                    return null;
                }
            },
            notes: () => {
                try {
                    if (!window.db) return null;
                    if (typeof window.db.collection !== 'function') return null;
                    return window.db.collection('notes'); // docId: `project_${projectId}`
                } catch (e) {
                    console.error('Error accessing Firestore notes collection:', e);
                    return null;
                }
            }
        };
        } else {
            console.warn('Firebase Firestore initialization failed - db is null');
            console.warn('firebase object:', typeof firebase);
            console.warn('firebase.firestore:', typeof firebase.firestore);
            window.firestoreCollections = {
                projects: () => null,
                costings: () => null
            };
        }
    }
} catch (error) {
    console.error('Firebase initialization error:', error);
    window.db = null;
    window.storage = null;
    window.firestoreCollections = {
        projects: () => null,
        costings: () => null,
        equipment: () => null,
        milestones: () => null,
        people: () => null,
        notes: () => null
    };
}

// Utility to convert firestore doc to plain object with id
window.withId = (doc) => ({ id: doc.id, ...doc.data() });



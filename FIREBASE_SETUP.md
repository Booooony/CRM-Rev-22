# Firebase Setup Instructions

This CRM application now uses Firebase Firestore for data storage. Follow these steps to set up Firebase for your project.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the prompts to create your project
4. Disable Google Analytics if you don't need it (optional)

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database** in the left sidebar
2. Click **Create database**
3. Choose **Start in production mode** (we'll set up security rules next)
4. Select a location for your database (choose the closest to your users)
5. Click **Enable**

## Step 3: Get Your Firebase Configuration

1. In your Firebase project, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to the "Your apps" section
4. Click the **</>** (Web) icon to add a web app
5. Register your app (give it a nickname like "CRM App")
6. Copy the Firebase configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 4: Update firebase-config.js

1. Open the `firebase-config.js` file in your project
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
// Replace these values with your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 5: Set Up Firestore Security Rules

1. In Firebase Console, go to **Firestore Database** → **Rules**
2. Replace the default rules with these rules that allow read/write access (for development):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all documents for now
    // IMPORTANT: Update these rules for production!
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click **Publish**

⚠️ **Important**: These rules allow anyone to read/write your data. For production, you should implement proper authentication and security rules.

### Production Security Rules (Recommended)

For a more secure setup, consider these rules with authentication:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Projects collection
    match /projects/{projectId} {
      allow read, write: if request.auth != null;
    }
    
    // Costings collection
    match /costings/{costingId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Step 6: Test the Setup

1. Open your application in a web browser
2. Try creating a new project
3. Check the Firebase Console → Firestore Database to see if the data appears

## Data Migration

The application will automatically:
- Use Firestore when Firebase is configured
- Fall back to localStorage if Firebase is not configured
- Keep using localStorage as a backup

**To migrate existing data from localStorage to Firestore:**

1. The app will continue using localStorage until you configure Firebase
2. Once Firebase is configured, new data will go to Firestore
3. Existing localStorage data will remain accessible but won't sync to Firebase automatically

## Collections Structure

The app uses these Firestore collections:

### `projects` collection
- Document ID: Auto-generated or project ID
- Fields:
  - `name` (string)
  - `region` (string)
  - `crmReference` (string)
  - `forecast` (string: "WON", "WIV", "FWD")
  - `followUpDate` (string, optional)
  - `airtableLink` (string, optional)

### `costings` collection
- Document ID: `{projectId}_{milestoneId}` (e.g., "1_costing", "2_po")
- Fields:
  - `lineItems` (array of objects)
  - `counter` (number)
  - `discount` (number)

## Troubleshooting

### Data not appearing in Firestore
- Check browser console for errors
- Verify Firebase configuration in `firebase-config.js`
- Check Firestore security rules allow read/write
- Ensure Firestore is enabled in Firebase Console

### Still using localStorage
- Verify `firebase-config.js` has valid configuration values
- Check that Firebase SDK scripts are loaded (check Network tab in DevTools)
- Look for Firebase initialization errors in the console

## Next Steps

1. Set up Firebase Authentication if you want user accounts
2. Implement proper security rules for production
3. Set up backups for your Firestore database
4. Consider using Firebase Hosting to deploy your app

For more information, visit the [Firebase Documentation](https://firebase.google.com/docs).


# Firebase Setup Instructions for PHOTLOGY

## Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add Project"
3. Enter project name: **PHOTLOGY** (or any name)
4. Enable Google Analytics (optional)
5. Click "Create Project"

## Step 2: Register Web App

1. In Firebase Console, click the **Web icon** (</>)
2. Enter app nickname: **PHOTLOGY Website**
3. Check "Also set up Firebase Hosting" (optional)
4. Click "Register App"
5. **Copy the Firebase config code**

## Step 3: Update Firebase Config

1. Open `firebase-config.js` file
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",              // Replace this
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

## Step 4: Setup Firestore Database

1. In Firebase Console, go to **Build → Firestore Database**
2. Click "Create Database"
3. Select **Start in test mode** (for development)
4. Choose location: **asia-south1** (India)
5. Click "Enable"

## Step 5: Configure Firestore Rules (Optional - for production)

Go to **Firestore → Rules** and update:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write to contacts collection
    match /contacts/{document=**} {
      allow write: if true;  // Anyone can submit
      allow read: if false;  // Only you can read (via Firebase Console)
    }
  }
}
```

## Step 6: Test Contact Form

1. Open your website
2. Fill the contact form
3. Submit
4. Check Firebase Console → Firestore Database → contacts collection
5. Your form data should appear there!

## Features Enabled:

✅ Contact form submissions saved to Firestore
✅ Timestamp automatically added
✅ Form validation
✅ Success/error messages
✅ Firebase Analytics (optional)

## View Submissions:

Go to Firebase Console → Firestore Database → contacts collection

Each submission will have:
- name
- email
- message
- timestamp
- status (new/read/replied)

## Next Steps (Optional):

1. **Email Notifications**: Set up Cloud Functions to send email when form is submitted
2. **Admin Panel**: Create a simple admin page to view/manage submissions
3. **Firebase Hosting**: Deploy website to Firebase Hosting
4. **Custom Domain**: Connect your own domain

---

**Need Help?** Check Firebase documentation: https://firebase.google.com/docs

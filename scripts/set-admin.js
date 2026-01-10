// This script is used to set a custom user claim for an admin user in Firebase.
// It requires the Firebase Admin SDK and a service account with the necessary permissions.

// HOW TO RUN:
// 1. Make sure you have downloaded your Firebase service account JSON file.
// 2. Set the GOOGLE_APPLICATION_CREDENTIALS environment variable in your terminal:
//    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/serviceAccountKey.json"
// 3. Install the firebase-admin package if you haven't already:
//    npm install firebase-admin
// 4. Run this script from the root of your project:
//    node scripts/set-admin.js

const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
// The SDK will automatically find the credentials from the environment variable.
try {
  admin.initializeApp({
    // If you don't set the credential here, the SDK will look for the
    // GOOGLE_APPLICATION_CREDENTIALS environment variable.
    // Make sure your service account JSON file has the following project_id:
    projectId: 'studio-5243418223-ccb0b'
  });
} catch (error) {
  if (error.code === 'app/duplicate-app') {
    console.log('Firebase Admin SDK already initialized.');
  } else {
    console.error('Error initializing Firebase Admin SDK:', error);
    process.exit(1);
  }
}

// The UID of the user to make an admin.
const uid = 'Ng7jWBORCNTSN2w1GA7NSh2xIXz2';

// Set the custom claim { isAdmin: true }
admin.auth().setCustomUserClaims(uid, { isAdmin: true })
  .then(() => {
    console.log(`Successfully set custom claim 'isAdmin: true' for user: ${uid}`);
    console.log('The user will have admin privileges on their next sign-in or token refresh.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error setting custom user claims:', error);
    process.exit(1);
  });

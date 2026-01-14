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
    // scripts/set-admin.js
    const admin = require('firebase-admin');

    // Initialize Firebase Admin SDK
    // This expects the GOOGLE_APPLICATION_CREDENTIALS environment variable to be set
    // pointing to your service account key file.
    admin.initializeApp({
      // No explicit credential needed here if GOOGLE_APPLICATION_CREDENTIALS is set
    });

    // Your User ID
    const targetUid = 'Ng7jWBORCNTSN2w1GA7NSh2xIXz2';

    async function grantAdminPrivileges(uid) {
      try {
        // Set the custom claim for the user
        await admin.auth().setCustomUserClaims(uid, { isAdmin: true });
        console.log(`Successfully set custom claim 'isAdmin: true' for user: ${uid}`);

        // Optionally, verify the claims have been set
        const user = await admin.auth().getUser(uid);
        console.log('Updated user custom claims:', user.customClaims);
        console.log('Remember to sign out and sign back in to refresh your token.');
      } catch (error) {
        console.error('Error setting custom user claims:', error);
      } finally {
        // Exit the process after execution
        process.exit();
      }
    }

    grantAdminPrivileges(targetUid);
    ```

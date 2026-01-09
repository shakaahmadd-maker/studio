
import { initializeApp, getApps, App, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import "server-only";

// Define the shape of the service account key
interface ServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

// Function to safely parse the service account key from environment variable
function getServiceAccount(): ServiceAccount | null {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountJson) {
    console.error("FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.");
    return null;
  }
  try {
    const parsed = JSON.parse(serviceAccountJson);
    // Basic validation
    if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
        console.error("FIREBASE_SERVICE_ACCOUNT_KEY is missing required fields.");
        return null;
    }
    return parsed;
  } catch (error) {
    console.error("Error parsing FIREBASE_SERVICE_ACCOUNT_KEY:", error);
    return null;
  }
}


function initializeFirebaseAdmin(): App {
    const apps = getApps();
    if (apps.length) {
        return apps[0];
    }
    
    const serviceAccount = getServiceAccount();

    if (!serviceAccount) {
        // This will now throw an error that should be caught by Next.js error handling
        // and prevent the app from starting if the key is missing or invalid.
        throw new Error("Firebase Admin SDK service account key is missing or invalid. Please check your environment variables.");
    }
    
    return initializeApp({
        credential: cert(serviceAccount),
    });
}


let adminApp: App;
let auth: ReturnType<typeof getAuth>;
let firestore: ReturnType<typeof getFirestore>;

try {
    adminApp = initializeFirebaseAdmin();
    auth = getAuth(adminApp);
    firestore = getFirestore(adminApp);
} catch (error) {
    console.error("Failed to initialize Firebase Admin SDK. Some server-side functionality may not work.", error);
    // Set to null or a mock implementation if needed to prevent further errors
    // @ts-ignore
    adminApp = null;
    // @ts-ignore
    auth = null;
    // @ts-ignore
    firestore = null;
}


export const getSdks = () => {
    if (!adminApp) {
        throw new Error("Firebase Admin SDK is not initialized. Cannot get SDKs.");
    }
    return { auth, firestore };
};

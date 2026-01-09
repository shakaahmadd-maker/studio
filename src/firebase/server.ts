
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
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. Server-side Firebase functionality will be disabled.");
    return null;
  }
  try {
    const parsed = JSON.parse(serviceAccountJson);
    // Basic validation
    if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
        console.warn("FIREBASE_SERVICE_ACCOUNT_KEY is missing required fields. Server-side Firebase functionality will be disabled.");
        return null;
    }
    return parsed;
  } catch (error) {
    console.error("Error parsing FIREBASE_SERVICE_ACCOUNT_KEY:", error);
    return null;
  }
}


function initializeFirebaseAdmin(): App | null {
    if (getApps().length) {
        return getApps()[0];
    }
    
    const serviceAccount = getServiceAccount();

    if (!serviceAccount) {
        console.warn("Firebase Admin SDK service account key is missing or invalid. Initialization skipped.");
        return null;
    }
    
    try {
        return initializeApp({
            credential: cert(serviceAccount),
        });
    } catch (error) {
        console.error("Failed to initialize Firebase Admin SDK:", error);
        return null;
    }
}


let adminApp: App | null;
let auth: ReturnType<typeof getAuth> | null;
let firestore: ReturnType<typeof getFirestore> | null;

adminApp = initializeFirebaseAdmin();

if (adminApp) {
    auth = getAuth(adminApp);
    firestore = getFirestore(adminApp);
} else {
    auth = null;
    firestore = null;
}


export const getSdks = () => {
    if (!adminApp || !auth || !firestore) {
        // This makes it clear to the caller that the SDKs are not available.
        // It's better than throwing, as it allows for graceful degradation.
        throw new Error("Firebase Admin SDK is not initialized. This can happen if the FIREBASE_SERVICE_ACCOUNT_KEY is not set. Some server-side functionality may not work.");
    }
    return { auth, firestore };
};

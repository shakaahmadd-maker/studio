
import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// This is a server-only file.

function getAppForServer(): FirebaseApp {
    const apps = getApps();
    const serverApp = apps.find(app => app.name === 'server');
    if (serverApp) {
        return serverApp;
    }
    return initializeApp(firebaseConfig, 'server');
}

const app = getAppForServer();
const firestore = getFirestore(app);
const auth = getAuth(app);

export function getSdks() {
  return { firestore, auth };
}


'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  const apps = getApps();
  let firebaseApp;

  // Find the default app if it exists
  const defaultApp = apps.find(app => app.name === '[DEFAULT]');

  if (defaultApp) {
    firebaseApp = defaultApp;
  } else {
    // If the default app doesn't exist, initialize it.
    // This handles the case where no apps are initialized, or where a named app ('server') was initialized first.
    try {
      // Try to initialize from environment variables first (for App Hosting)
      firebaseApp = initializeApp();
    } catch (e) {
      if (process.env.NODE_ENV === "production") {
        console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
      }
      // Fallback to local config. Explicitly name it to avoid conflict if other apps are trying to initialize.
      firebaseApp = initializeApp(firebaseConfig, '[DEFAULT]');
    }
  }

  return getSdks(firebaseApp);
}


export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './server';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';

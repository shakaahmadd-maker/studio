
import { NextResponse, type NextRequest } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { firebaseConfig } from './firebase/config';

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
    return JSON.parse(serviceAccountJson);
  } catch (error) {
    console.error("Error parsing FIREBASE_SERVICE_ACCOUNT_KEY:", error);
    return null;
  }
}

// Initialize Firebase Admin SDK
function initializeFirebaseAdmin(): App | null {
  if (getApps().length > 0) {
    return getApps()[0];
  }
  
  const serviceAccount = getServiceAccount();
  if (!serviceAccount) {
    return null;
  }

  try {
    return initializeApp({
      credential: {
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
      },
      databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
    });
  } catch (error) {
    console.error("Error initializing Firebase Admin SDK:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('__session')?.value;

  const adminApp = initializeFirebaseAdmin();
  if (!adminApp) {
    // If Firebase Admin SDK fails to initialize, block access to admin routes
    if (pathname.startsWith('/admin')) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'server_config');
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }


  // If accessing the login page
  if (pathname === '/login') {
    if (sessionCookie) {
      try {
        await getAuth(adminApp).verifySessionCookie(sessionCookie, true);
        // If cookie is valid, redirect to admin dashboard
        return NextResponse.redirect(new URL('/admin', request.url));
      } catch (error) {
        // Invalid cookie, let them stay on the login page
        return NextResponse.next();
      }
    }
    // No cookie, let them stay on the login page
    return NextResponse.next();
  }

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    if (!sessionCookie) {
      // No cookie, redirect to login
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verify the session cookie
      await getAuth(adminApp).verifySessionCookie(sessionCookie, true);
      // Cookie is valid, allow the request to proceed
      return NextResponse.next();
    } catch (error) {
      // Invalid cookie, redirect to login
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};

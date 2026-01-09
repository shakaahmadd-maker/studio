
import { NextResponse, type NextRequest } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, getApps, App, cert } from 'firebase-admin/app';

// This is the crucial change to switch the runtime
export const runtime = 'nodejs';

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
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set in middleware.");
    return null;
  }
  try {
    const parsed = JSON.parse(serviceAccountJson);
    // Basic validation
    if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
        console.warn("FIREBASE_SERVICE_ACCOUNT_KEY in middleware is missing required fields.");
        return null;
    }
    return parsed;
  } catch (error) {
    console.error("Error parsing FIREBASE_SERVICE_ACCOUNT_KEY in middleware:", error);
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
      credential: cert(serviceAccount)
    });
  } catch (error) {
    console.error("Error initializing Firebase Admin SDK in middleware:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const sessionCookie = request.cookies.get('__session')?.value;

  const adminApp = initializeFirebaseAdmin();
  
  // If admin SDK is not available, we cannot perform auth checks.
  // We'll show an error for admin pages, but let others pass.
  if (!adminApp) {
    if (pathname.startsWith('/admin')) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'server_config_missing');
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  const auth = getAuth(adminApp);

  // Check if domain is authorized for Google Sign-In in dev environment
  if (process.env.NODE_ENV === 'development' && pathname === '/login') {
    try {
      const googleProviderConfig = await auth.getProviderConfig('google.com');
      if (googleProviderConfig.signIn.allowlist.indexOf(origin) === -1) {
          const projectId = (adminApp.options.credential as any)?.projectId;
          if (projectId) {
            const authDomainUrl = `https://console.firebase.google.com/u/0/project/${projectId}/authentication/settings`;
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('authDomainUrl', authDomainUrl);
            return NextResponse.redirect(loginUrl);
          }
      }
    } catch (e) {
      // This can happen if the provider is disabled. Silently ignore.
    }
  }


  // If accessing the login page
  if (pathname === '/login') {
    if (sessionCookie) {
      try {
        await auth.verifySessionCookie(sessionCookie, true);
        return NextResponse.redirect(new URL('/admin', request.url));
      } catch (error) {
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    if (!sessionCookie) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(loginUrl);
    }

    try {
      await auth.verifySessionCookie(sessionCookie, true);
      return NextResponse.next();
    } catch (error) {
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


import { NextResponse, type NextRequest } from 'next/server';

// This is the crucial change to switch the runtime
export const runtime = 'nodejs';


export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('__session')?.value;

  // If accessing the login page with a session, redirect to admin
  if (pathname === '/login') {
    if (sessionCookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
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

    // The client-side AuthWrapper will handle verification.
    // The presence of the cookie is enough for the middleware.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};

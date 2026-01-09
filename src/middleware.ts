
import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('__session')?.value;

  // Protect all /admin routes.
  // If the user is not logged in, redirect them to the login page.
  if (pathname.startsWith('/admin')) {
    if (!sessionCookie) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If the user is logged in and tries to access the login page,
  // redirect them to the admin dashboard.
  if (pathname === '/login') {
    if (sessionCookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // The matcher should apply to both /login and /admin routes
  // to handle both protection and redirection logic.
  matcher: ['/admin/:path*', '/login'],
};

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // If there's a hash in the URL, redirect to home page
  if (url.hash) {
    url.hash = '';
    return NextResponse.redirect(url);
  }

  // Get the pathname
  const pathname = url.pathname;

  // List of valid routes
  const validRoutes = ['/', '/about', '/contact']; // Add your valid routes here

  // If the pathname is not in validRoutes and not a static file/api route
  if (!validRoutes.includes(pathname) && 
      !pathname.startsWith('/_next') && 
      !pathname.startsWith('/api') &&
      !pathname.includes('.')) {
    // Return 404 for invalid routes
    url.pathname = '/not-found';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Configure which routes should be handled by middleware
export const config = {
  matcher: '/:path*',
}
import { NextRequest, NextResponse } from 'next/server'
import { getRouteByName } from '@/lib/routes'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const nonAuthenticatedRoutes: string[] = [getRouteByName('login').path]

  /** Delete our JWT token if NextAuth`s session token does not exists */
  const sessionToken = request.cookies.get('next-auth.session-token')?.value
  if (!sessionToken) {
    response.cookies.delete('token')
  } else {
    /** Redirect to home if logged user tries to navigate to public route */
    if (nonAuthenticatedRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL(getRouteByName('home').path, request.url))
    }
  }

  return response
}

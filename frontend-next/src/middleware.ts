import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  /** Delete our JWT token if NextAuth`s session token does not exists */
  const sessionToken = request.cookies.get('next-auth.session-token')?.value
  if (!sessionToken) {
    response.cookies.delete('token')
  }

  return response
}

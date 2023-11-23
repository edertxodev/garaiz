import { AuthOptions } from 'next-auth'
import { cookies } from 'next/headers'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth/next'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        const response = await fetch(
          `${process.env.API_URL}/api/auth/google/callback?access_token=${account.access_token}`
        )
        const responseBody = await response.json()
        token.user = responseBody.user
        cookies().set('token', responseBody.jwt, { secure: true })
      }

      return token
    },
    async session({ session, token }) {
      session.internalUser = token.user as any

      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

import { cookies } from 'next/headers'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth/next'

const handler = NextAuth({
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
        cookies().set('token', responseBody.jwt, { secure: true })
      }

      return token
    },
  },
})

export { handler as GET, handler as POST }

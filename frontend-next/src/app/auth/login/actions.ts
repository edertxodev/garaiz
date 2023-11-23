'use client'

import { getRouteByName } from '@/lib/routes'
import { signIn } from 'next-auth/react'

export function handleGoogleSignIn() {
  signIn('google', { callbackUrl: getRouteByName('profile').path })
}

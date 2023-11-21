'use client'

import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { getRouteByName } from '@/lib/routes'
import { signIn } from 'next-auth/react'
import { useCallback } from 'react'

export default function LoginPage() {
  const handleGoogleSignIn = useCallback(() => {
    signIn('google', { callbackUrl: getRouteByName('home').path })
  }, [])

  return (
    <>
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="secondary" onClick={handleGoogleSignIn} width="full">
          <FontAwesomeIcon icon={faGoogle} className="mr-2" size="lg" />
          Sign in with Google
        </Button>
      </CardContent>
    </>
  )
}

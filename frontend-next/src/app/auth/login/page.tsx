'use client'

import { Button } from '@/components/buttons'
import { CardBody, CardHeader } from '@/components/card'
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
      <CardHeader>Sign in to your account</CardHeader>
      <CardBody>
        <Button full icon={<FontAwesomeIcon icon={faGoogle} />} onClick={handleGoogleSignIn}>
          Sign in with Google
        </Button>
      </CardBody>
    </>
  )
}

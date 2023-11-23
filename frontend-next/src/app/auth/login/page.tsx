import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { handleGoogleSignIn } from '@/app/auth/login/actions'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
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

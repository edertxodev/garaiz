import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { FC, useCallback } from 'react'
import { GoogleIcon } from 'components/icons/GoogleIcon'
import { LOCAL_STORAGE_KEYS } from 'lib/constants'
import { TokenResponse, useGoogleLogin } from '@react-oauth/google'
import { User, useAuth } from 'lib/auth/AuthContext'
import { addUserToLocalStorage } from 'lib/services/Auth'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BlurColors from 'components/common/styled/BlurColors'
import GithubIcon from 'components/icons/GithubIcon'
import axios from 'axios'
import useUpdateUser from 'api/graphql/hooks/User/useUpdateUser'

const Login: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mutateAsync: updateUser } = useUpdateUser()
  const auth = useAuth()
  const appName = import.meta.env.VITE_APP_NAME

  const setAuthUser = useCallback(
    (user: User) => {
      auth?.setUser(addUserToLocalStorage(user))
    },
    [auth]
  )

  /**
   * Handle Google login as manual login
   */
  const handleGoogleLogin = useCallback(
    (tokenResponse: TokenResponse) => {
      // Validate user with our backend
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/auth/google/callback?access_token=${tokenResponse.access_token}`)
        .then((backendResponse) => {
          if (backendResponse.data.jwt) localStorage.setItem(LOCAL_STORAGE_KEYS.token, backendResponse.data.jwt)
          // Get profile data from Google user
          axios
            .get('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            })
            .then((googleProfileResponse) => {
              const user = { ...backendResponse.data.user } as User
              user.avatar = backendResponse.data.user?.avatar_url ?? googleProfileResponse.data.picture
              user.name = googleProfileResponse.data.given_name
              user.lastname = googleProfileResponse.data.family_name
              if (user.id && !backendResponse.data.user.avatar_url)
                updateUser({ id: user.id, data: { avatar_url: user.avatar } })
              setAuthUser(user)
              navigate(getRoutePathByName('home'))
            })
        })
    },
    [navigate, setAuthUser, updateUser]
  )

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLogin,
  })

  return (
    <>
      <Flex alignItems="center" justifyContent="center" width="100%">
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          maxW={{ lg: 'lg' }}
          zIndex={10}
        >
          <Stack align="center" spacing={4}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              <Text as="span" bgGradient="linear(to-l, yellow.400, pink.400)" bgClip="text">
                {t('login.headers.join', { name: appName })}
              </Text>
            </Heading>
            <Text color={useColorModeValue('gray.700', 'gray.50')} fontSize={{ base: 'sm', sm: 'md' }}>
              {t('login.texts.spam', { name: appName })}
            </Text>
            <Stack direction="column" align="center" mt={6} w="100%">
              <Button colorScheme="gray" w="100%" leftIcon={<GoogleIcon />} onClick={() => googleLogin()}>
                {t('login.texts.signIn', { name: 'Google' })}
              </Button>
              <Button bg="gray.900" _hover={{ bg: 'gray.800' }} color="white" w="100%" leftIcon={<GithubIcon />}>
                {t('login.texts.signIn', { name: 'Github' })}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Flex>

      <BlurColors top={0} left={0} />
    </>
  )
}

export default Login

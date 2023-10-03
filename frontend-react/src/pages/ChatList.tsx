import { Button, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FC, lazy, useCallback, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useAuth } from 'lib/auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import ChatListItem from 'components/chat/ChatListItem'
import featureState from 'lib/recoil/atoms/featureState'
import useConversations from 'api/graphql/hooks/Conversation/useConversations'
import useUserColor from 'lib/hooks/useUserColor'

const CreateConversationModal = lazy(() => import('components/chat/CreateConversationModal'))

const ChatList: FC = () => {
  const auth = useAuth()
  const color = useUserColor()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: conversations, refetch: conversationsRefetch } = useConversations({
    users: { id: { eq: auth?.user?.id } },
  })
  const features = useRecoilValue(featureState)
  const navigate = useNavigate()

  // Return to main route if no feature available
  useEffect(() => {
    if (!features.chat) {
      navigate(getRoutePathByName('home'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features.chat])

  const handleOnClose = useCallback(() => {
    onClose()
    conversationsRefetch()
  }, [conversationsRefetch, onClose])

  return (
    <>
      <Flex width="100%" direction="column">
        {conversations?.map((conversation) => (
          <ChatListItem key={conversation.attributes?.uuid} conversation={conversation} />
        ))}
        <Button
          onClick={onOpen}
          position="absolute"
          bottom={10}
          right={10}
          borderRadius="full"
          size="lg"
          bg={useColorModeValue(`${color}.500`, 'green.600')}
          color="white"
          _hover={{
            bg: useColorModeValue(`${color}.400`, 'green.500'),
          }}
          py={12}
          px={9}
        >
          <FontAwesomeIcon icon={faCommentDots} size="xl" />
        </Button>
      </Flex>
      <CreateConversationModal isOpen={isOpen} onClose={handleOnClose} />
    </>
  )
}

export default ChatList

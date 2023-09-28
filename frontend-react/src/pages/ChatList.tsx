import { Button, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FC, lazy, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from 'lib/auth/AuthContext'
import ChatListItem from 'components/chat/ChatListItem'
import useConversations from 'api/graphql/hooks/Conversation/useConversations'

const CreateConversationModal = lazy(() => import('components/chat/CreateConversationModal'))

const ChatList: FC = () => {
  const auth = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: conversations, refetch: conversationsRefetch } = useConversations({
    users: { id: { eq: auth?.user?.id } },
  })

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
          bg={useColorModeValue('pink.500', 'green.600')}
          color="white"
          _hover={{
            bg: useColorModeValue('pink.400', 'green.500'),
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

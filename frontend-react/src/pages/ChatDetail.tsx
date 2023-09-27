import { Avatar, Button, Divider, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { DEFAULT_PAGE_SIZE } from 'lib/constants'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { Maybe, UsersPermissionsUser } from 'api/graphql/generated/graphql'
import {
  Message,
  disconnectSocket,
  initiateSocketConnection,
  sendMessage,
  subscribeToChat,
} from 'lib/services/SocketIO'
import { resolveUserCompleteName } from 'lib/resolvers/userResolvers'
import { useAuth } from 'lib/auth/AuthContext'
import { useParams } from 'react-router-dom'
import ChatForm from 'components/chat/ChatForm'
import ChatMessage from 'components/chat/ChatMessage'
import Form from 'components/form/Form'
import Loader from 'components/common/styled/Loader'
import moment from 'moment'
import useConversation from 'api/graphql/hooks/Conversation/useConversation'
import useCreateMessage from 'api/graphql/hooks/Message/useCreateMessage'
import useMessages from 'api/graphql/hooks/Message/useMessages'
import useScroll from 'lib/hooks/useScroll'

const ChatView: FC = () => {
  const auth = useAuth()
  const ref = useRef<HTMLDivElement>(null)
  const { conversationId } = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [page, setPage] = useState<number>(1)
  const [otherUser, setOtherUser] = useState<UsersPermissionsUser>()
  const { scrollY } = useScroll()
  const { data: conversation } = useConversation(conversationId)
  const {
    data: messagesResponse,
    refetch: refetchMessages,
    status: messagesStatus,
    pagination: messagesPagination,
  } = useMessages({ conversation: { id: { eq: conversationId } } }, { pageSize: DEFAULT_PAGE_SIZE, page }, ['id:desc'])
  const { mutateAsync: createMessage } = useCreateMessage()

  const loadMoreButtonBg = useColorModeValue('gray.50', 'gray.800')
  const loadMoreButtonHoverBg = useColorModeValue('gray.100', 'gray.700')

  const sortMessages = useCallback((messages: Message[]) => {
    return messages.sort((a, b) => {
      if (!a.timestamp || !b.timestamp) return 0
      if (a.timestamp === b.timestamp) return 0
      else if (a.timestamp > b.timestamp) return 1

      return -1
    })
  }, [])

  useEffect(() => {
    if (auth?.user?.username) initiateSocketConnection(auth?.user?.username)

    return () => disconnectSocket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const storedMessages: Message[] = [...messages]
    messagesResponse?.forEach((message) => {
      storedMessages.push({
        conversationId: conversationId,
        userId: message.attributes?.user?.data?.id?.toString(),
        userCompleteName: resolveUserCompleteName(auth?.user as Maybe<UsersPermissionsUser>),
        timestamp: message.attributes?.timestamp,
        content: message.attributes?.content,
      })
    })
    setMessages(sortMessages(storedMessages))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.user, messagesResponse])

  useEffect(() => {
    if (conversationId) {
      subscribeToChat(conversationId, (messageData) => {
        setMessages([...messages, messageData])
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  // Always scroll to bottom on new messages
  useEffect(() => {
    if (messages.length && scrollY === 0) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length])

  // Refetch messages on page changes
  useEffect(() => {
    refetchMessages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  // Set other user
  useEffect(() => {
    const otherUser = conversation?.attributes?.users?.data.find((el) => Number(el.id) !== Number(auth?.user?.id))
    if (otherUser?.attributes) setOtherUser(otherUser?.attributes)
  }, [auth?.user?.id, conversation])

  const handleMessageSend = useCallback(
    (data: any) => {
      const timestamp = moment().format()
      const messageData: Message = {
        ...data,
        conversationId: conversationId,
        userId: auth?.user?.id,
        userCompleteName: resolveUserCompleteName(auth?.user as Maybe<UsersPermissionsUser>),
        timestamp,
      }
      sendMessage(messageData)
      createMessage({ data: { conversation: conversationId, content: data.content, timestamp, user: auth?.user?.id } })
    },
    [auth?.user, conversationId, createMessage]
  )

  return (
    <Flex direction="column" width="100%">
      <Flex width="100%" bg={useColorModeValue('pink.400', 'gray.600')}>
        <HStack gap={4} px={4} py={2}>
          <Avatar
            size="lg"
            name={resolveUserCompleteName(otherUser)}
            src={otherUser?.avatar_url ?? undefined}
            bg={useColorModeValue('pink.200', 'gray.400')}
          />
          <Text fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
            {resolveUserCompleteName(otherUser)}
          </Text>
        </HStack>
      </Flex>
      <Flex p={4} width="100%" overflowY="auto" direction="column" minHeight={{ base: '75%', xl: '81%' }}>
        {messagesStatus === 'loading' ? <Loader /> : null}
        {messagesStatus !== 'loading' && messagesPagination?.pageCount && page < messagesPagination?.pageCount ? (
          <Flex justifyContent="center" mt={4} mb={8} position="relative">
            <Divider />
            <Button
              position="absolute"
              mt={-5}
              alignItems="center"
              bg={loadMoreButtonBg}
              _hover={{ bg: loadMoreButtonHoverBg }}
              onClick={() => setPage(page + 1)}
            >
              Load more messages
            </Button>
          </Flex>
        ) : null}
        {messages?.map((message) => {
          const currentUser = Number(message.userId) === Number(auth?.user?.id)

          return <ChatMessage key={message.timestamp} currentUser={currentUser} message={message} />
        })}
        <div ref={ref} />
      </Flex>
      <Flex
        p={4}
        bottom={0}
        position="relative"
        display="block"
        width="100%"
        bg={useColorModeValue('gray.50', 'gray.800')}
        borderTop={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Form defaultValues={{ content: '' }} onSubmit={handleMessageSend} resetOnSubmit withoutDefaultActions>
          <ChatForm />
        </Form>
      </Flex>
    </Flex>
  )
}

export default ChatView

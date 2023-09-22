import { Box, Text, VStack } from '@chakra-ui/react'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { Maybe, UsersPermissionsUser } from 'api/graphql/generated/graphql'
import {
  Message,
  disconnectSocket,
  initiateSocketConnection,
  sendMessage,
  subscribeToChat,
} from 'lib/services/SocketIO'
import { resolveMessageDateAndTime } from 'lib/resolvers/chatResolvers'
import { resolveUserCompleteName } from 'lib/resolvers/userResolvers'
import { useAuth } from 'lib/auth/AuthContext'
import { useParams } from 'react-router-dom'
import ChatForm from 'components/chat/ChatForm'
import Form from 'components/form/Form'
import moment from 'moment'
import useConversation from 'api/graphql/hooks/Conversation/useConversation'
import useCreateMessage from 'api/graphql/hooks/Message/useCreateMessage'
import useScroll from 'lib/hooks/useScroll'

const MESSAGES_PAGE_SIZE = 20

const ChatView: FC = () => {
  const auth = useAuth()
  const ref = useRef<HTMLDivElement>(null)
  const { conversationId } = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [page, setPage] = useState<number>(1)
  const {
    data: conversation,
    refetch: refetchConversation,
    status: conversationStatus,
  } = useConversation(conversationId, { pageSize: MESSAGES_PAGE_SIZE, page }, ['id:desc'], false)
  const { mutateAsync: createMessage } = useCreateMessage()
  const { scrollDirection, scrollY } = useScroll()

  useEffect(() => {
    if (auth?.user?.username) initiateSocketConnection(auth?.user?.username)

    return () => disconnectSocket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const storedMessages: Message[] = [...messages]
    conversation?.attributes?.messages?.data.forEach((message) => {
      storedMessages.push({
        conversationId: message.attributes?.conversation?.data?.id?.toString(),
        userId: message.attributes?.user?.data?.id?.toString(),
        userCompleteName: resolveUserCompleteName(auth?.user as Maybe<UsersPermissionsUser>),
        timestamp: message.attributes?.timestamp,
        content: message.attributes?.content,
      })
    })
    setMessages(storedMessages.reverse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.user, conversation?.attributes?.messages?.data])

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
    if (messages.length) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [messages.length])

  // Load more messages on scroll top
  useEffect(() => {
    if (
      scrollDirection === 'up' &&
      scrollY <= MESSAGES_PAGE_SIZE &&
      conversationStatus !== 'loading' &&
      conversation?.attributes?.messages?.data.length === MESSAGES_PAGE_SIZE
    ) {
      setPage(page + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDirection, scrollY])

  useEffect(() => {
    refetchConversation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

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
    <>
      <Box p={4}>
        {messages?.map((message) => {
          const currentUser = Number(message.userId) === Number(auth?.user?.id)

          return (
            <Box
              bg={currentUser ? 'green.600' : 'gray.500'}
              color="white"
              key={message.timestamp}
              borderRadius="lg"
              maxWidth={{ base: 'xs', lg: 'xl' }}
              marginLeft={currentUser ? 'auto' : 0}
              px={4}
              py={2}
              my={2}
            >
              <VStack>
                <Text marginRight="auto">{message.content}</Text>
                <Text marginLeft="auto" fontSize="x-small" color={currentUser ? 'green.200' : 'gray.200'}>
                  {resolveMessageDateAndTime(message.timestamp)}
                </Text>
              </VStack>
            </Box>
          )
        })}
      </Box>
      <div ref={ref} />
      <Box p={4} bottom={0} position="fixed">
        <Form defaultValues={{ content: '' }} onSubmit={handleMessageSend} resetOnSubmit>
          <ChatForm />
        </Form>
      </Box>
    </>
  )
}

export default ChatView

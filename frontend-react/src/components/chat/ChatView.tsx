import { Box } from '@chakra-ui/react'
import { ConversationEntity } from 'api/graphql/generated/graphql'
import { FC, useCallback, useEffect, useState } from 'react'
import { disconnectSocket, initiateSocketConnection, sendMessage } from 'lib/services/SocketIO'
import { useAuth } from 'lib/auth/AuthContext'
import { useChatContext } from 'lib/chat/ChatContext'
import ChatForm from 'components/chat/ChatForm'
import Form from 'components/form/Form'
import useConversations from 'api/graphql/hooks/Conversation/useConversations'

const ChatView: FC = () => {
  const auth = useAuth()
  const chatContext = useChatContext()
  const { data: conversations } = useConversations({
    and: [
      { users: { username: { eq: auth?.user?.username } } },
      { users: { username: { eq: chatContext?.selectedChat } } },
    ],
  })
  const [conversation, setConversation] = useState<ConversationEntity>()
  const [messages] = useState<string[]>([])

  useEffect(() => {
    setConversation(conversations?.[0])
  }, [conversations])

  useEffect(() => {
    if (auth?.user?.username) initiateSocketConnection(auth?.user?.username)

    return () => disconnectSocket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('kaixooo', conversation)

  // useEffect(() => {
  //   if (conversation?.[0].id) {
  //     subscribeToChat(conversation?.[0].id, (messageData) => {
  //       setMessages([...messages, messageData.message])
  //     })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [messages])

  const handleMessageSend = useCallback(
    (data: any) => {
      data = { ...data, sender: auth?.user?.username, receiver: chatContext?.selectedChat }
      sendMessage(data)
    },
    [auth?.user?.username, chatContext?.selectedChat]
  )

  return (
    <>
      <Box p={4}>
        {messages.map((msg) => (
          <p key={msg}>{msg}</p>
        ))}
      </Box>
      <Box p={4}>
        <Form defaultValues={{ message: '' }} onSubmit={handleMessageSend} resetOnSubmit>
          <ChatForm />
        </Form>
      </Box>
    </>
  )
}

export default ChatView

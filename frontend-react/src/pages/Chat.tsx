import { Box } from '@chakra-ui/react'
import { FC, useCallback, useEffect, useState } from 'react'
import { disconnectSocket, initiateSocketConnection, sendMessage, subscribeToChat } from 'lib/services/SocketIO'
import { useAuth } from 'lib/auth/AuthContext'
import ChatForm from 'components/chat/ChatForm'
import Form from 'components/form/Form'

const Chat: FC = () => {
  const auth = useAuth()
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    if (auth?.user?.username) initiateSocketConnection(auth?.user?.username)

    return () => disconnectSocket()
  }, [])

  useEffect(() => {
    subscribeToChat((err, message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  const handleMessageSend = useCallback((data: any) => {
    sendMessage(data.message)
  }, [])

  return (
    <>
      <Box p={4}>
        {messages.map((msg) => (
          <p>{msg}</p>
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

export default Chat

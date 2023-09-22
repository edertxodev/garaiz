import { FC, useEffect, useMemo, useState } from 'react'
import { disconnectSocket, initiateSocketConnection } from 'lib/services/SocketIO'
import { useAuth } from 'lib/auth/AuthContext'
import ChatContext, { ChatContextValues } from 'lib/chat/ChatContext'
import ChatList from 'pages/ChatList'
import ChatView from 'components/chat/ChatView'

const Chat: FC = () => {
  const auth = useAuth()
  const [selectedChat, setSelectedChat] = useState<string>()
  const context = useMemo<ChatContextValues>(() => ({ selectedChat, setSelectedChat }), [selectedChat])

  useEffect(() => {
    if (auth?.user?.username) initiateSocketConnection(auth?.user?.username)

    return () => disconnectSocket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <ChatContext.Provider value={context}>{selectedChat ? <ChatView /> : <ChatList />}</ChatContext.Provider>
}

export default Chat

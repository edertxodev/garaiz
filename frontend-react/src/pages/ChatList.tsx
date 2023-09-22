import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { useAuth } from 'lib/auth/AuthContext'
import ChatListItem from 'components/chat/ChatListItem'
import useConversations from 'api/graphql/hooks/Conversation/useConversations'

const ChatList: FC = () => {
  const auth = useAuth()
  const { data: conversations } = useConversations({ users: { username: { eq: auth?.user?.username } } })

  return (
    <Box>
      {conversations?.map((conversation) => (
        <ChatListItem key={conversation.id} conversation={conversation} />
      ))}
    </Box>
  )
}

export default ChatList

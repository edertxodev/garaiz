import { ConversationEntity } from 'api/graphql/generated/graphql'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useAuth } from 'lib/auth/AuthContext'
import ChatListItemContent from 'components/chat/ChatListItemContent'

interface ChatListItemProps {
  conversation: ConversationEntity
}

const ChatListItem: FC<ChatListItemProps> = ({ conversation }) => {
  const auth = useAuth()
  const user = conversation.attributes?.users?.data.find((el) => Number(el.id) !== Number(auth?.user?.id))

  return user ? (
    <NavLink to={getRoutePathByName('chatDetail', { conversationId: conversation.attributes?.uuid })}>
      <ChatListItemContent user={user} />
    </NavLink>
  ) : null
}

export default ChatListItem

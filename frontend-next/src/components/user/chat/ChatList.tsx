import { getConversations } from '@/lib/graphql/queries/Conversation'
import { getServerSession } from 'next-auth'

export default async function ChatList() {
  const session = await getServerSession()
  const conversations = await getConversations({ users: { id: { eq: session?.internalUser?.id } } })
  console.log('kaixooo', conversations)

  return (
    <>
      {conversations?.data.map((conversation) => (
        <p key={conversation.id}>{conversation.attributes?.uuid}</p>
      ))}
    </>
  )
}

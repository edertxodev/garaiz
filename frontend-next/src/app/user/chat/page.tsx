import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Suspense } from 'react'
import ChatList from '@/components/user/chat/ChatList'
import ChatListSkeleton from '@/components/user/chat/ChatListSkeleton'

export default function ChatPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat list</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<ChatListSkeleton />}>
          {/* <ChatList /> */}
          <ChatListSkeleton />
        </Suspense>
      </CardContent>
    </Card>
  )
}

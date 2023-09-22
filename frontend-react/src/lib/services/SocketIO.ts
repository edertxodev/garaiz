import { Socket, io } from 'socket.io-client'

let socket: Socket

export interface Message {
  conversationId?: string
  userId?: string
  userCompleteName?: string
  content?: string
  timestamp?: string
}

export const initiateSocketConnection = (username: string) => {
  socket = io(import.meta.env.VITE_API_URL, { auth: { username } })
  console.log('Connecting socket...')
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

export const sendMessage = (messageData: Message) => {
  if (socket) socket.emit('messageData', messageData)
}

export const subscribeToChat = (conversationId: string, cb: (data: Message) => void) => {
  if (socket) socket.on(`broadcast-${conversationId}`, (messageData) => cb(messageData))
}

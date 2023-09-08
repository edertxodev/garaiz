import { Socket, io } from 'socket.io-client'

let socket: Socket

export const initiateSocketConnection = (username: string) => {
  socket = io(import.meta.env.VITE_API_URL, { auth: { username } })
  console.log('Connecting socket...')
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

export const sendMessage = (message?: string) => {
  if (socket && message) socket.emit('message', message)
}

export const subscribeToChat = (cb: (err: unknown, data: string) => void) => {
  if (socket) socket.on('broadcast', (message) => cb(null, message))
}

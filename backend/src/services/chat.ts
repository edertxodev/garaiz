import { Strapi } from '@strapi/strapi'
import { Server } from 'socket.io'

export const initializeChatService = (strapi: Strapi) => {
  const io = new Server(strapi.server.httpServer, {
    cors: {
      origin: 'http://localhost:5173',
    },
  })

  io.on('connection', (socket) => {
    const users = []
    io.of('/').sockets.forEach((socket) => {
      const username = socket.handshake.auth.username
      users.push({
        userID: socket.id,
        username,
      })
    })
    socket.emit('users', users)
    const username = socket.handshake.auth.username
    console.log(`User ${username} connected`)
    socket.on('disconnect', () => console.log(`User ${username} disconnected`))
    socket.on('messageData', (messageData) => {
      console.log(`broadcast-${messageData.conversationId}`)
      io.emit(`broadcast-${messageData.conversationId}`, messageData)
    })
  })
}

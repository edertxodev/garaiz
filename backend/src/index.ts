import { Server } from 'socket.io'

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
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
      socket.on('message', (message) => io.emit('broadcast', `${username}: ${message}`))
    })
  },
}

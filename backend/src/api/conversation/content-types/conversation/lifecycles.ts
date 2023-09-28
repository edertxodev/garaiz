export default {
  async beforeDelete({ params }) {
    /**
     * Delete all conversation related messages
     */
    const {
      where: { id },
    } = params
    const messagesToDelete = await strapi.db.query('api::message.message').findMany({ where: { conversation: id } })
    strapi.db.query('api::message.message').deleteMany({
      where: {
        id: { $in: messagesToDelete.map(({ id }) => id) },
      },
    })
  },
}

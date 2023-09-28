import { FC, useCallback, useEffect, useState } from 'react'
import { ModalBody, Text } from '@chakra-ui/react'
import { UsersPermissionsUserEntity } from 'api/graphql/generated/graphql'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useAuth } from 'lib/auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ChatListItemContent from 'components/chat/ChatListItemContent'
import Modal, { ModalProps } from 'components/common/Modal'
import useConversations from 'api/graphql/hooks/Conversation/useConversations'
import useCreateConversation from 'api/graphql/hooks/Conversation/useCreateConversation'
import useUsers from 'api/graphql/hooks/User/useUsers'

const CreateConversationModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const auth = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: users } = useUsers({ id: { ne: auth?.user?.id } })
  const { data: conversations } = useConversations({ users: { id: { eq: auth?.user?.id } } })
  const { mutateAsync: createConversation } = useCreateConversation()
  const [usersWithoutConversation, setUsersWithoutConversation] = useState<UsersPermissionsUserEntity[]>()

  useEffect(() => {
    const availableUsers: UsersPermissionsUserEntity[] = []
    users?.forEach((user) => {
      if (!conversations?.length) {
        availableUsers.push(user)
      } else {
        conversations?.forEach((conversation) => {
          if (!conversation.attributes?.users?.data.some((el) => el.id === user.id)) {
            availableUsers.push(user)
          }
        })
      }
      setUsersWithoutConversation(availableUsers)
    })
  }, [conversations, users])

  const handleClick = useCallback(
    (user: UsersPermissionsUserEntity) => {
      if (auth?.user?.id && user.id)
        createConversation({
          data: {
            users: [auth?.user?.id, user.id],
          },
        }).then((response) => {
          navigate(
            getRoutePathByName('chatDetail', { conversationId: response.createConversation?.data?.attributes?.uuid })
          )
          onClose()
        })
    },
    [auth?.user?.id, createConversation, navigate, onClose]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('chat.conversations.modal.title')}>
      <ModalBody padding={0}>
        {!usersWithoutConversation?.length ? (
          <Text padding={4}>{t('chat.conversations.modal.empty')}</Text>
        ) : (
          usersWithoutConversation?.map((user) => (
            <ChatListItemContent
              key={user.id}
              user={user}
              padding={4}
              onClick={() => handleClick(user)}
              withoutBorder
            />
          ))
        )}
      </ModalBody>
    </Modal>
  )
}

export default CreateConversationModal

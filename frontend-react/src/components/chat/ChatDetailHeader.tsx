import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ConversationEntity, UsersPermissionsUser } from 'api/graphql/generated/graphql'
import { FC, lazy, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useNavigate } from 'react-router-dom'
import { faArrowLeft, faEllipsisVertical, faTrash } from '@fortawesome/free-solid-svg-icons'
import { getRoutePathByName } from 'lib/routes/helpers'
import { resolveUserCompleteName } from 'lib/resolvers/userResolvers'
import { useTranslation } from 'react-i18next'
import useDeleteConversation from 'api/graphql/hooks/Conversation/useDeleteConversation'

const ConfirmationModal = lazy(() => import('components/common/ConfirmationModal'))

interface ChatDetailHeaderProps {
  user?: UsersPermissionsUser
  conversation?: ConversationEntity
}

const ChatDetailHeader: FC<ChatDetailHeaderProps> = ({ user, conversation }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { mutateAsync: deleteConversation } = useDeleteConversation()

  const handleDeleteConversation = useCallback(() => {
    if (conversation?.id) {
      deleteConversation({ id: conversation.id }).then(() => navigate(getRoutePathByName('chatList')))
    }
  }, [conversation, deleteConversation, navigate])

  return (
    <>
      <Flex width="100%" bg={useColorModeValue('pink.700', 'gray.600')} color="white">
        <HStack gap={4} px={4} py={2}>
          <NavLink to={getRoutePathByName('chatList')}>
            <IconButton
              aria-label="go back"
              variant="ghost"
              _hover={{ bg: useColorModeValue('pink.600', 'gray.500') }}
              color="white"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </IconButton>
          </NavLink>
          <Avatar
            size="lg"
            name={resolveUserCompleteName(user)}
            src={user?.avatar_url ?? undefined}
            bg={useColorModeValue('pink.200', 'gray.400')}
          />
          <Text fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
            {resolveUserCompleteName(user)}
          </Text>
        </HStack>
        <Spacer />
        <HStack>
          <Menu>
            <MenuButton>
              <IconButton
                aria-label="context menu"
                variant="unstyled"
                mr={4}
                _hover={{ bg: useColorModeValue('pink.600', 'gray.500') }}
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </IconButton>
            </MenuButton>
            <MenuList p={0} mr={2} border="none">
              <MenuItem
                py={4}
                gap={4}
                bg={useColorModeValue('pink.600', 'gray.500')}
                _hover={{ bg: useColorModeValue('pink.500', 'gray.400') }}
                onClick={onOpen}
              >
                <FontAwesomeIcon icon={faTrash} />
                {t('general.delete')}
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
      <ConfirmationModal isOpen={isOpen} onClose={onClose} confirmationFn={handleDeleteConversation} />
    </>
  )
}

export default ChatDetailHeader

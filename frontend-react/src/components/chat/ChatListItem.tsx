import { Avatar, Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { ConversationEntity } from 'api/graphql/generated/graphql'
import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getRoutePathByName } from 'lib/routes/helpers'
import { resolveUserCompleteName } from 'lib/resolvers/userResolvers'
import { useAuth } from 'lib/auth/AuthContext'

interface ChatListItemProps {
  conversation: ConversationEntity
}

const ChatListItem: FC<ChatListItemProps> = ({ conversation }) => {
  const auth = useAuth()
  const user = conversation.attributes?.users?.data.find((el) => Number(el.id) !== Number(auth?.user?.id))
  const [name, setName] = useState<string>()

  useEffect(() => {
    if (user) {
      setName(resolveUserCompleteName(user.attributes))
    }
  }, [user])

  const styles = {
    listItem: {
      hover: {
        bg: useColorModeValue('gray.100', 'gray.600'),
      },
    },
    avatar: {
      bg: useColorModeValue('pink.100', 'gray.400'),
    },
  }

  return (
    <NavLink to={getRoutePathByName('chatDetail', { conversationId: conversation.id })}>
      <Box
        p={8}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        _hover={{
          bg: styles.listItem.hover.bg,
        }}
      >
        <HStack gap={4}>
          <Avatar size="lg" name={name} src={user?.attributes?.avatar_url ?? undefined} bg={styles.avatar.bg} />
          <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
            {name}
          </Box>
        </HStack>
      </Box>
    </NavLink>
  )
}

export default ChatListItem

import { Avatar, Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { UsersPermissionsUserEntity } from 'api/graphql/generated/graphql'
import { resolveUserCompleteName } from 'lib/resolvers/userResolvers'

interface ChatListItemContentProps {
  user: UsersPermissionsUserEntity
  padding?: number
  withoutBorder?: boolean
  onClick?: () => void
}

const ChatListItemContent: FC<ChatListItemContentProps> = ({ user, padding, withoutBorder, onClick }) => {
  const [name, setName] = useState<string>()

  useEffect(() => {
    if (user) {
      setName(resolveUserCompleteName(user.attributes))
    }
  }, [user])

  return (
    <Flex
      width="100%"
      padding={padding ?? 8}
      borderBottom={withoutBorder ? 0 : 1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.600'),
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <HStack gap={4}>
        <Avatar
          size="lg"
          name={name}
          src={user?.attributes?.avatar_url ?? undefined}
          bg={useColorModeValue('pink.100', 'gray.400')}
        />
        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {name}
        </Box>
      </HStack>
    </Flex>
  )
}

export default ChatListItemContent

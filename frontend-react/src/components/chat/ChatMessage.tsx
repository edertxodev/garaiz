import { Box, HStack, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Message } from 'lib/services/SocketIO'
import { resolveMessageDateAndTime } from 'lib/resolvers/chatResolvers'

interface ChatMessageProps {
  currentUser: boolean
  message: Message
}

const ChatMessage: FC<ChatMessageProps> = ({ currentUser, message }) => {
  return (
    <Box
      bg={currentUser ? 'green.600' : 'gray.500'}
      color="white"
      key={message.timestamp}
      borderRadius="lg"
      maxWidth={{ base: 'xs', lg: 'xl' }}
      marginLeft={currentUser ? 'auto' : 0}
      p={4}
      my={2}
    >
      <HStack alignItems="flex-end">
        <Text marginRight="auto" maxWidth="md">
          {message.content}
        </Text>
        <Text marginLeft="auto" fontSize="x-small" color={currentUser ? 'green.200' : 'gray.200'}>
          {resolveMessageDateAndTime(message.timestamp)}
        </Text>
      </HStack>
    </Box>
  )
}

export default ChatMessage

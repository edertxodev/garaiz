import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface ChatContextValues {
  selectedChat?: string
  setSelectedChat: Dispatch<SetStateAction<string | undefined>>
}

const ChatContext = createContext<ChatContextValues | undefined>(undefined)

const useChatContext = () => useContext(ChatContext)

export default ChatContext
export { useChatContext }
export type { ChatContextValues }

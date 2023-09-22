import { FC } from 'react'
import Input from 'components/form/fields/Input'

const ChatForm: FC = () => {
  return (
    <>
      <Input name="content" placeholder="message" />
    </>
  )
}

export default ChatForm

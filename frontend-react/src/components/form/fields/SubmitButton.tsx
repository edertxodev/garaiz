import { FC, PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

interface SubmitButtonProps extends PropsWithChildren {}

const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  const {
    formState: { isValid },
  } = useFormContext()

  return (
    <button type="submit" disabled={!isValid}>
      {children}
    </button>
  )
}

export default SubmitButton

import { FC, PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

interface SubmitButtonProps extends PropsWithChildren {
  submit?: any
}

const SubmitButton: FC<SubmitButtonProps> = ({ submit, children }) => {
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext()

  return (
    <button onClick={handleSubmit(submit)} disabled={!isValid}>
      {children}
    </button>
  )
}

export default SubmitButton

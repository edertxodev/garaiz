import { InputHTMLAttributes } from 'react'
import Label from '@/components/form/Label'

type InputProps = InputHTMLAttributes<any> & {
  label: string
  errors?: string[]
}

export default function Input({ name, type, label, placeholder, errors }: InputProps) {
  return (
    <div className="mb-8">
      <Label htmlFor={name}>{label}</Label>
      <input type={type} name={name} placeholder={placeholder} className="input" aria-describedby={`${name}-error`} />
      <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
        {errors?.length
          ? errors.map((error) => (
              <p key={error} className="mt-2 text-sm text-red-500">
                {error}
              </p>
            ))
          : null}
      </div>
    </div>
  )
}

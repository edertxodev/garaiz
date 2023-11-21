import { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<any> & {}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-3 block text-sm font-bold text-dark dark:text-white">
      {children}
    </label>
  )
}

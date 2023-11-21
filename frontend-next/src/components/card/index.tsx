import { PropsWithChildren } from 'react'

type CardElementProps = PropsWithChildren & {
  className?: string
}

export default function Card({ children, className }: CardElementProps) {
  return <div className={`card ${className}`}>{children}</div>
}

export function CardHeader({ children }: CardElementProps) {
  return (
    <div className="pb-2 mb-8 border-b dark:border-b-indigo-600">
      <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">{children}</h2>
    </div>
  )
}

export function CardBody({ children }: CardElementProps) {
  return <div className="card-body">{children}</div>
}

export function CardFooter({ children }: CardElementProps) {
  return <div className="pb-2">{children}</div>
}

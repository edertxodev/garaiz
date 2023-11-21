import { Card } from '@/components/ui/card'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="min-w-[500px]">{children}</Card>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 h-[8000px]">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-200">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="default" asChild>
                <Link href="/">Get started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
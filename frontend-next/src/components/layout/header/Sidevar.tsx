import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { getRouteByName, routes } from '@/lib/routes'
import { roboto } from '@/lib/fonts'
import HeaderLink from '@/components/layout/header/HeaderLink'
import clsx from 'clsx'

type SidevarProps = {
  opened: boolean
  setOpened: () => void
}

export default function Sidevar({ opened, setOpened }: SidevarProps) {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div
        className={clsx(
          'fixed shadow-md inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-t from-gray-200 to-white dark:from-blue-950 dark:to-blue-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10',
          { hidden: !opened }
        )}
      >
        <div className="flex items-center justify-between md:justify-end border-b border-b-blue-400/10 pb-4">
          <HeaderLink href="/" className="-m-1.5 p-1.5 md:hidden">
            <span className={`${roboto.className} text-4xl`}>Garaiz</span>
          </HeaderLink>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white" onClick={setOpened}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10 dark:divide-blue-400/10">
            <div className="space-y-2 py-6">
              {routes.map((route) =>
                route.name !== 'home' ? (
                  <HeaderLink
                    key={route.name}
                    href={route.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {route.name}
                  </HeaderLink>
                ) : null
              )}
            </div>
            <div className="py-6">
              <a
                href={getRouteByName('login').path}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

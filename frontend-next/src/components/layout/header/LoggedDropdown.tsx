import { useCallback, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import clsx from 'clsx'

export default function LoggedDropdown() {
  const { data: sessionData } = useSession()
  const [opened, setOpened] = useState<boolean>(false)

  const handleDropdownOpen = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  return (
    <div className="relative inline-block text-left">
      <Image
        src={sessionData?.user?.image ?? ''}
        alt="Profile picture"
        width={48}
        height={48}
        className="rounded-full shadow-md hover:cursor-pointer"
        onClick={handleDropdownOpen}
      />

      <div
        className={clsx(
          `absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,
          { hidden: !opened, block: opened }
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
            Edit
          </a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
            Duplicate
          </a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
            Archive
          </a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
            Move
          </a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">
            Share
          </a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-5">
            Add to favorites
          </a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-6">
            Delete
          </a>
        </div>
      </div>
    </div>
  )
}

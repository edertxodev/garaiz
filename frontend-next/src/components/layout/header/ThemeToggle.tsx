import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  return (
    <button
      onClick={handleThemeChange}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg dark:text-white mr-4"
    >
      <FontAwesomeIcon icon={faMoon} className="w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6" />
      <FontAwesomeIcon icon={faSun} className="hidden w-5 h-5 dark:block md:h-6 md:w-6" />
    </button>
  )
}

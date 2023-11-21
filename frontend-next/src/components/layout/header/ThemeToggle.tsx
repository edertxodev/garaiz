import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'
import { useTheme } from 'next-themes'

type ThemeToggleProps = { className?: string }

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  return (
    <Button variant="ghost" onClick={handleThemeChange} className={className}>
      <FontAwesomeIcon
        icon={theme === 'light' ? faMoon : faSun}
        className="w-5 h-5 stroke-current md:h-6 md:w-6"
        size="xl"
      />
    </Button>
  )
}

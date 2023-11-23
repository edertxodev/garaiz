import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export interface InputWithIconProps extends InputProps {
  icon: any
  iconPosition: 'right' | 'left'
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, type, icon, iconPosition, ...props }, ref) => {
    return (
      <div className="relative  block">
        {iconPosition === 'left' ? (
          <FontAwesomeIcon
            icon={icon}
            className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
          />
        ) : null}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
            className
          )}
          ref={ref}
          {...props}
        />
        {iconPosition === 'right' ? (
          <FontAwesomeIcon
            icon={icon}
            className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        ) : null}
      </div>
    )
  }
)
InputWithIcon.displayName = 'InputWithIcon'

export { Input, InputWithIcon }

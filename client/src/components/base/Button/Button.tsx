import clsx from 'clsx'
import React from 'react'

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'primary',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex flex-row gap-3 justify-center items-center w-full h-14 text-title3 rounded-2xl',
        type === 'primary' && 'text-light-80 bg-violet-100',
        type === 'secondary' && 'text-violet-100 bg-violet-20',
        type === 'ghost' && 'text-dark-50 bg-light-60',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button

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
        'rounded-2xl flex flex-row justify-center items-center w-full h-14 text-title3 gap-3',
        type === 'primary' && 'bg-violet-100 text-light-80',
        type === 'secondary' && 'bg-violet-20 text-violet-100',
        type === 'ghost' && 'bg-light-60 text-dark-50',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button

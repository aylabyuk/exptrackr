import clsx from 'clsx'
import React from 'react'

export interface OptionProps {
  value: any
  children: React.ReactNode
  isActive?: boolean
  onClick?: (value: any) => void
  className?: string
}

export const Option: React.FC<OptionProps> = ({
  isActive,
  children,
  onClick,
  value,
  className,
}) => {
  const handleClick = () => {
    onClick?.call(null, value)
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'w-full h-full min-h-[45px] bg-light-100 hover:bg-light-60 rounded-sm',
        isActive && 'bg-light-20',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Option

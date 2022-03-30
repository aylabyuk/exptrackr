import clsx from 'clsx'
import React from 'react'

interface PlusIconProps {
  className?: string
}

export const PlusIcon: React.FC<PlusIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsx('w-6 h-6', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
)

export default PlusIcon

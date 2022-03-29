import React from 'react'
import clsx from 'clsx'

interface ArrowLeftProps {
  className?: string
}

export const ArrowLeftIcon: React.FC<ArrowLeftProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsx('w-6 h-6', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
)

export default ArrowLeftIcon

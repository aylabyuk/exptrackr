import clsx from 'clsx'
import React from 'react'

interface CheckCircleIconProps {
  className?: string
}

export const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsx('w-6 h-6', className)}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default CheckCircleIcon

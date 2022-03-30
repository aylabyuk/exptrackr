import React from 'react'
import clsx from 'clsx'

interface SubtractProps {
  className?: string
}

export const Subtract: React.FC<SubtractProps> = ({ className }) => (
  <svg
    width="375"
    height="70"
    viewBox="0 0 375 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M188 55C207.882 55 224 38.8823 224 19C224 17.0988 223.853 15.2321 223.569 13.4105C222.602 7.20823 226.711 0 232.988 0H367C371.418 0 375 3.58172 375 8V70H0V8C0 3.58172 3.58172 0 8 0H143.012C149.289 0 153.398 7.20824 152.431 13.4105C152.147 15.2321 152 17.0988 152 19C152 38.8823 168.118 55 188 55Z"
      fill="#FCFCFC"
    />
  </svg>
)

export default Subtract

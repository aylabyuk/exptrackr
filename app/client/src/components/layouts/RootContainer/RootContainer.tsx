import React from 'react'

export interface RootContainerProps {
  children: React.ReactNode
}

export const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center bg-dark-25">{children}</div>
  )
}

export default RootContainer

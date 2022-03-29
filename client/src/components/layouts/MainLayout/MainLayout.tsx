import React from 'react'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden relative grow max-w-screen-md bg-light-100">
      {children}
    </div>
  )
}

export default MainLayout

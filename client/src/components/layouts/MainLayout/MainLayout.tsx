import React from 'react'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>
}

export default MainLayout

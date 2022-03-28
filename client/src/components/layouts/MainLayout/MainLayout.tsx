import React from 'react'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="">{children}</div>
}

export default MainLayout

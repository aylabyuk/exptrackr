import React from 'react'
import Navigation from '../../features/Navigation/Navigation'
import Topbar from '../../features/Topbar/Topbar'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden relative -z-0 grow max-w-screen-md h-screen bg-light-100">
      <Topbar
        user={{
          username: 'thevinci',
          avatar: 'https://i.pravatar.cc/100',
          email: 'oriel.absin@gmail.com',
        }}
      />
      {children}
      <Navigation />
    </div>
  )
}

export default MainLayout

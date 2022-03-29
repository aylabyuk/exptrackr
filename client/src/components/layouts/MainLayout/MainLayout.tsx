import React from 'react'
import Topbar from '../../features/Topbar/Topbar'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden relative grow max-w-screen-md h-screen bg-light-100">
      <Topbar
        user={{
          username: 'thevinci',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=Blue02&eyeType=Surprised&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Pale',
          email: 'oriel.absin@gmail.com',
        }}
      />
      {children}
    </div>
  )
}

export default MainLayout

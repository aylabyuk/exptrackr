import React from 'react'
import { selectCurrentUser } from '../../redux/features/user/user-reducer'
import { useAppSelector } from '../../redux/hooks'

export interface ProfilePageProps {
  children: React.ReactNode
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ children }) => {
  const currentUser = useAppSelector(selectCurrentUser)

  return (
    <div className="">
      <div>profile page</div>
    </div>
  )
}

export default ProfilePage

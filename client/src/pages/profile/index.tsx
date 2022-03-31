import React from 'react'
import { useLogoutMutation } from '../../redux/features/user/user-api'

export interface ProfilePageProps {
  children: React.ReactNode
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ children }) => {
  const [logout] = useLogoutMutation()

  return (
    <div className="flex flex-row justify-center p-4 w-full">
      <button
        onClick={logout}
        className="p-3 w-full text-title2 text-center text-light-100 bg-blue-80 rounded-md active:ring-1"
      >
        Logout
      </button>
    </div>
  )
}

export default ProfilePage

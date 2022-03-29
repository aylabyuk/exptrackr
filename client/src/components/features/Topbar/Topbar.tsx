import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { User } from '../../../models'
import BellIcon from '../../vectors/BellIcon'

export interface TopbarProps {
  user: User
}

export const Topbar: React.FC<TopbarProps> = ({ user }) => {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-4">
      <div className="flex flex-row justify-center w-9 h-9 bg-blue-80 rounded-full ring-1">
        <Image src={user.avatar} alt={user.username} width={32} height={32} />
      </div>
      <motion.span
        className="flex flex-col justify-center text-title3 font-bold text-center text-violet-100"
        layoutId="brand"
      >
        exptrackr
      </motion.span>
      <button>
        <BellIcon className="!w-6 !h-6 text-violet-100" />
      </button>
    </div>
  )
}

export default Topbar

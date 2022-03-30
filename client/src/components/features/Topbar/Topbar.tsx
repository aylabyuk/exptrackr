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
    <>
      {/* gradient */}
      <div className="absolute top-0 left-0 -z-10 w-full h-[312px] bg-gradient-to-b from-yellow-20 to-light-60 rounded-b-[32px] " />
      <div className="flex flex-row justify-between items-center py-3 px-4">
        <div className="flex flex-row justify-center items-center !w-10 !h-10 rounded-full ring-1 ring-violet-100 ring-offset-2">
          <Image
            src={user.avatar}
            alt={user.username}
            width={100}
            height={100}
            className="!w-10 !h-10 rounded-full"
          />
        </div>

        <motion.span
          className="flex flex-col justify-center text-title3 font-bold text-center text-violet-100"
          layoutId="brand"
        >
          exptrackr
        </motion.span>
        <button>
          <BellIcon className="!w-9 !h-9 text-violet-100" />
        </button>
      </div>
    </>
  )
}

export default Topbar

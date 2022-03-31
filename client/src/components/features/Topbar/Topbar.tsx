import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { User } from '../../../models'
import BellIcon from '../../vectors/BellIcon'
import clsx from 'clsx'

export interface TopbarProps {
  user: User
  isScrolling?: boolean
}

export const Topbar: React.FC<TopbarProps> = ({ user, isScrolling }) => {
  return (
    <>
      {/* gradient */}
      <div className="absolute top-0 -z-10 w-full max-w-screen-md h-[312px] bg-gradient-to-b from-yellow-20 to-light-60 rounded-b-[32px]" />
      <div
        className={clsx(
          'flex sticky top-0 flex-row justify-between items-center py-3 px-4 transition-colors',
          isScrolling && 'bg-light-100',
        )}
      >
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

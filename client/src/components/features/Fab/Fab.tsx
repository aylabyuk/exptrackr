import React, { useState } from 'react'
import PlusIcon from '../../vectors/PlusIcon'
import { motion } from 'framer-motion'
import IncomeIcon from '../../vectors/IncomeIcon'
import ExpenseIcon from '../../vectors/ExpenseIcon'
import CurrencyExchangeIcon from '../../vectors/CurrencyExchangeIcon'

export interface FabProps {}

export const Fab: React.FC<FabProps> = () => {
  const [open, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((current) => !current)
  }

  return (
    // eslint-disable-next-line tailwindcss/enforces-shorthand
    <div className="absolute right-0 bottom-0 left-0 p-2 m-auto w-[200px] h-[200px] pointer-events-none">
      <div className="flex relative bottom-[15px] flex-row justify-center items-end w-full h-full">
        <motion.button
          animate={{ bottom: open ? 62 : 0, left: open ? 0 : 'auto' }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="flex absolute flex-row justify-center items-center w-14 h-14 bg-green-100 rounded-full pointer-events-auto"
        >
          <IncomeIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>
        <motion.button
          animate={{ bottom: open ? 125 : 0 }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="flex absolute flex-row justify-center items-center w-14 h-14 bg-blue-100 rounded-full pointer-events-auto"
        >
          <CurrencyExchangeIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>
        <motion.button
          animate={{
            bottom: open ? 62 : 0,
            left: open ? 200 - 72 : 'auto',
          }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="flex absolute flex-row justify-center items-center w-14 h-14 bg-red-100 rounded-full pointer-events-auto"
        >
          <ExpenseIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>

        {/* fab */}
        <motion.button
          animate={{ rotate: open ? 135 : 0 }}
          className="flex absolute flex-row justify-center items-center w-14 h-14 bg-violet-100 rounded-full pointer-events-auto"
          onClick={toggleOpen}
        >
          <PlusIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>
      </div>
    </div>
  )
}

export default Fab

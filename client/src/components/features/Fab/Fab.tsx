import React, { useCallback } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import PlusIcon from '../../vectors/PlusIcon'
import IncomeIcon from '../../vectors/IncomeIcon'
import ExpenseIcon from '../../vectors/ExpenseIcon'
import CurrencyExchangeIcon from '../../vectors/CurrencyExchangeIcon'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  ModalEnum,
  selectFabMode,
  setFabMode,
  showModal,
} from '../../../redux/features/ui/ui-reducer'

export interface FabProps {}

export const Fab: React.FC<FabProps> = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectFabMode)

  const toggleOpen = useCallback(() => {
    dispatch(setFabMode(!isOpen))
  }, [dispatch, isOpen])

  const openIncomeModal = useCallback(() => {
    dispatch(setFabMode(false))
    dispatch(showModal(ModalEnum.Income))
  }, [dispatch])

  const openExpenseModal = useCallback(() => {
    dispatch(setFabMode(false))
    dispatch(showModal(ModalEnum.Expense))
  }, [dispatch])

  const commonStyle = `flex absolute flex-row justify-center items-center w-14 h-14 rounded-full active:ring-1 pointer-events-auto
    rounded-full active:ring-1 pointer-events-auto
    rounded-full active:ring-1 pointer-events-auto
    rounded-full active:ring-1 pointer-events-auto`

  return (
    // eslint-disable-next-line tailwindcss/enforces-shorthand
    <div className="fixed right-0 bottom-0 left-0 p-2 m-auto w-[200px] h-[200px] pointer-events-none">
      <div className="flex relative bottom-[15px] flex-row justify-center items-end w-full h-full">
        {isOpen && (
          <div className="fixed bottom-[-25px] w-screen max-w-screen-md h-screen bg-gradient-to-b from-transparent to-violet-80/70" />
        )}

        <motion.button
          animate={{ bottom: isOpen ? 62 : 0, left: isOpen ? 0 : 'auto' }}
          transition={{ type: 'tween', duration: 0.2 }}
          className={clsx(commonStyle, 'bg-green-100')}
          onClick={openIncomeModal}
        >
          <IncomeIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>
        <motion.button
          animate={{ bottom: isOpen ? 125 : 0 }}
          transition={{ type: 'tween', duration: 0.2 }}
          className={clsx(commonStyle, 'bg-blue-100')}
        >
          <CurrencyExchangeIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>
        <motion.button
          animate={{
            bottom: isOpen ? 62 : 0,
            left: isOpen ? 200 - 72 : 'auto',
          }}
          transition={{ type: 'tween', duration: 0.2 }}
          className={clsx(commonStyle, 'bg-red-100')}
          onClick={openExpenseModal}
        >
          <ExpenseIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>

        {/* fab */}
        <motion.button
          animate={{ rotate: isOpen ? 135 : 0 }}
          className={clsx(commonStyle, 'bg-violet-100')}
          onClick={toggleOpen}
        >
          <PlusIcon className="!w-7 !h-7 text-light-100" />
        </motion.button>
      </div>
    </div>
  )
}

export default Fab

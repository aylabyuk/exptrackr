import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ArrowLeft from '../../vectors/ArrowLeft'

export interface FullScreenModalProps {
  title: string
  show: boolean
  onBackButtonClick: () => void
  children: React.ReactNode
}

export const FullScreenModal: React.FC<FullScreenModalProps> = ({
  title,
  show,
  children,
  onBackButtonClick,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="modal"
          initial={{ left: '100%' }}
          animate={{ left: '0%' }}
          exit={{ left: '100%' }}
          transition={{ type: 'spring', bounce: 0.25 }}
          className="flex absolute top-0 flex-col w-full max-w-screen-md h-screen bg-light-100"
        >
          <div className="flex flex-row justify-between items-center p-4 h-16">
            <button onClick={onBackButtonClick}>
              <ArrowLeft />
            </button>
            <span className="text-title3 font-semibold">{title}</span>
            <div className="w-6" />
          </div>
          <div className="grow px-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FullScreenModal

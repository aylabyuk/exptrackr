import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ArrowLeftIcon from '../../vectors/ArrowLeftIcon'

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
          animate={{ left: 'auto' }}
          exit={{ left: '100%' }}
          transition={{ duration: 0.3, type: 'tween' }}
          className="flex overflow-hidden absolute top-0 left-0 flex-col w-full max-w-screen-md h-screen bg-light-100"
        >
          <div className="flex flex-row justify-between items-center p-4 h-16">
            <button onClick={onBackButtonClick}>
              <ArrowLeftIcon />
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

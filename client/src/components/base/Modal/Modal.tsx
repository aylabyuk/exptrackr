import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ExclamationCircleIcon from '../../vectors/ExclamationCircleIcon'

export interface ModalProps {
  type?: 'error' | 'info' | 'success'
  message: string
  show?: boolean
  onRequestClose: () => void
}

export const Modal: React.FC<ModalProps> = ({
  type = 'info',
  message,
  onRequestClose,
  show,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
          onClick={onRequestClose}
          className="flex absolute top-0 left-0 flex-col justify-center items-center w-full max-w-screen-md h-full backdrop-blur-[2px]"
        >
          <div className="flex flex-col gap-5 items-center p-6 w-auto h-auto bg-light-100 rounded-lg">
            <div className="p-0 text-light-100 bg-red-80 rounded-full">
              <ExclamationCircleIcon className="w-12 h-12" />
            </div>
            <span className="text-body3 font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal

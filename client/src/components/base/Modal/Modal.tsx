import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import React from 'react'
import CheckCircleIcon from '../../vectors/CheckCircleIcon'
import ExclamationCircleIcon from '../../vectors/ExclamationCircleIcon'
import InfoCircleIcon from '../../vectors/InfoCircleIcon'

export interface ModalProps {
  type?: 'error' | 'info' | 'success'
  message: string
  show?: boolean
  onRequestClose?: () => void
}

const icons = {
  success: CheckCircleIcon,
  info: InfoCircleIcon,
  error: ExclamationCircleIcon,
}

export const Modal: React.FC<ModalProps> = ({
  type = 'info',
  message,
  onRequestClose,
  show,
}) => {
  const Icon = icons[type]

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
          className="flex absolute top-0 left-0 flex-col justify-center items-center w-full max-w-screen-md h-full bg-light-20/60 backdrop-blur-[2px]"
        >
          <div className="flex flex-col gap-5 items-center p-6 w-auto max-w-[300px] h-auto bg-light-100 rounded-lg">
            <div
              className={clsx(
                'p-0 text-light-100 rounded-full',
                type === 'success' && 'bg-green-80',
                type === 'error' && 'bg-red-80',
                type === 'info' && 'bg-blue-80',
              )}
            >
              <Icon className="w-12 h-12" />
            </div>
            <span className="text-body3 font-medium text-center">
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal

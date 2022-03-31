import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import React, { ReactElement, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts/dist/cjs/useOnClickOutside'

export interface OptionModalProps {
  open: boolean
  children: React.ReactNode
  onSelect: (value: any) => void
  onRequestClose: () => void
  containerClass?: string
}

export const OptionModal: React.FC<OptionModalProps> = ({
  children,
  open,
  onSelect,
  onRequestClose,
  containerClass,
}) => {
  const ref = useRef(null)

  useOnClickOutside(ref, onRequestClose)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ top: '100vh' }}
          animate={{ top: 0 }}
          exit={{ top: '100vh' }}
          transition={{ duration: 0.3, type: 'tween' }}
          // eslint-disable-next-line tailwindcss/enforces-shorthand
          className="fixed top-0 right-0 left-0 z-50 m-auto w-full max-w-screen-md h-screen backdrop-blur-[2px]"
        >
          <div
            ref={ref}
            className={clsx(
              'flex overflow-hidden overflow-y-scroll absolute inset-0 flex-col content-start my-auto mx-6 h-max max-h-[60vh] bg-light-80 rounded-3xl shadow-md',
              containerClass,
            )}
          >
            {React.Children.map(children, (child) => {
              return React.cloneElement(child as React.ReactElement, {
                onClick: (child as any).type !== 'div' ? onSelect : null,
              })
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OptionModal

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export interface BottomDrawerProps {
  show?: boolean
  children: React.ReactNode
}

export const BottomDrawer: React.FC<BottomDrawerProps> = ({
  children,
  show,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="bottom-drawer"
          initial={{ top: '100%' }}
          animate={{ top: 'auto' }}
          exit={{ top: '100%' }}
          transition={{ duration: 0.3, type: 'tween', delay: 0.3 }}
          className="absolute bottom-0 left-0 z-40 py-6 px-4 w-full bg-light-100 rounded-t-[32px] shadow-md"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BottomDrawer

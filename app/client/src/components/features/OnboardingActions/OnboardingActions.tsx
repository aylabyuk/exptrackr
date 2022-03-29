import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Button from '../../base/Button/Button'

export interface OnboardingActionsProps {
  show: boolean
  onLogin?: () => void
}

export const OnboardingActions: React.FC<OnboardingActionsProps> = ({
  onLogin,
  show,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="onboardingActions"
          initial={{ bottom: -100 }}
          animate={{ bottom: 24 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="flex absolute right-0  flex-col gap-4 px-6 w-full"
        >
          <Button>Sign Up</Button>
          <Button onClick={onLogin} type="secondary">
            Login
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OnboardingActions

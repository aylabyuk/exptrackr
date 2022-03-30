import clsx from 'clsx'
import { AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'

export interface TabsProps {
  activeIndex: number
  tabs: string[]
  onChange: (tabIndex: number) => void
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({
  activeIndex,
  tabs,
  onChange,
  className,
}) => {
  return (
    <AnimateSharedLayout>
      <div className={clsx('flex flex-row justify-evenly w-full', className)}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={clsx('relative w-full')}
            onClick={() => onChange(index)}
          >
            {activeIndex === index && (
              <motion.div
                layoutId="tab"
                className="flex absolute bottom-0 flex-col justify-center w-full h-full text-body3 font-medium text-yellow-100 bg-yellow-20 rounded-2xl"
              >
                {tab}
              </motion.div>
            )}
            <span className="text-body3 font-medium text-light-20">{tab}</span>
          </button>
        ))}
      </div>
    </AnimateSharedLayout>
  )
}

export default Tabs

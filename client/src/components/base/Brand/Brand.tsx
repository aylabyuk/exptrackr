import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

export interface BrandProps {
  className?: string
}

export const Brand: React.FC<BrandProps> = ({ className }) => {
  return (
    <motion.span
      className={clsx(
        'flex flex-col justify-center mb-16 text-titlex font-bold text-center text-violet-100',
        className,
      )}
      layoutId="brand"
    >
      exptrackr
    </motion.span>
  )
}

export default Brand

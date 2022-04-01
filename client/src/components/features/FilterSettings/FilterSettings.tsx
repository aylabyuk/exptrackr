import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useGetAllCategoriesQuery } from '../../../redux/features/category/category-api'
import BottomDrawer from '../../base/BottomDrawer/BottomDrawer'
import Button from '../../base/Button/Button'
import twConfig from '../../../../tailwind.config'
import camelize from '../../../utils/camelize'
import clsx from 'clsx'

export interface FilterDrawerProps {
  selectedItems: string[]
  show: boolean
  onToggleItem: (value: string) => void
  onReset: () => void
  onRequestClose: () => void
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  selectedItems,
  show,
  onRequestClose,
  onToggleItem,
  onReset,
}) => {
  const { data: categories } = useGetAllCategoriesQuery({})

  const handleReset = () => {
    onReset()
  }

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="flex absolute top-0 left-0 z-40 flex-col justify-end w-full h-screen bg-violet-40/50"
            onClick={onRequestClose}
          />
        )}
      </AnimatePresence>
      <BottomDrawer show={show}>
        <div className="flex flex-row justify-between items-center mb-4">
          <span className="text-body2 font-semibold">
            Filter transaction by category
          </span>
          <button
            onClick={handleReset}
            className="py-2 px-4 text-violet-100 bg-violet-20 rounded-full active:ring-1 active:ring-violet-20"
          >
            Reset
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {categories?.map((category) => {
            const color = twConfig.theme.colors[category.color || '']

            const isSelected = !!selectedItems.find((c) => category.name === c)

            return (
              <button
                className="flex flex-col justify-center items-center w-full"
                key={category.id}
                onClick={() => onToggleItem(category.name)}
              >
                <FontAwesomeIcon
                  className={clsx(
                    `p-[6px] !w-10 !h-10 rounded-lg ring-violet-100`,
                    isSelected ? 'ring-2 ring-offset-2' : 'ring-0',
                  )}
                  color={color?.[100]}
                  style={{ backgroundColor: color?.[20] }}
                  icon={
                    require('@fortawesome/free-solid-svg-icons')[
                      camelize(category.icon)
                    ]
                  }
                />
                <span className=" overflow-hidden mt-2 max-w-[60px] text-tiny text-dark-25 text-ellipsis whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>
      </BottomDrawer>
    </>
  )
}

export default FilterDrawer

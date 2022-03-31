import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useOnClickOutside } from 'usehooks-ts/dist/cjs/useOnClickOutside'
import ChevronIcon from '../../vectors/ChevronIcon'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import camelize from '../../../utils/camelize'

import twConfig from '../../../../tailwind.config'

export interface SelectFieldProps {
  placeholder: string
  children: React.ReactNode
  classes?: {
    container?: string
    input?: string
    selectionContainer?: string
  }
  register?: UseFormRegisterReturn
}

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  placeholder,
  classes,
  register,
}) => {
  const [value, setValue] = useState<any>('')
  const ref = useRef(null)

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSelect = (value: any) => {
    setValue(value)

    handleClose()
  }

  useOnClickOutside(ref, handleClose)

  const color = twConfig.theme.colors[(value.color as string) || '']

  return (
    <div
      className={clsx(
        'flex flex-row gap-2 items-center px-5 w-full h-14 text-light-20 bg-light-100 rounded-2xl border-[1px] border-light-60',
        classes?.container,
      )}
    >
      {value.icon && (
        <FontAwesomeIcon
          className={`p-[6px] !w-[40px] !h-[40px] rounded-lg`}
          icon={
            require('@fortawesome/free-solid-svg-icons')[camelize(value.icon)]
          }
          color={color?.[100]}
          style={{ backgroundColor: color?.[20] }}
        />
      )}

      <input
        className={clsx(
          'grow leading-tight focus:outline-none appearance-none cursor-pointer',
          classes?.input,
        )}
        placeholder={placeholder}
        readOnly
        value={typeof value === 'object' ? value.name : value}
        onClick={handleOpen}
        {...register}
      />

      <motion.button animate={{ rotate: open ? 180 : 0 }} onClick={handleOpen}>
        <ChevronIcon />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ top: '100vh' }}
            animate={{ top: 0 }}
            exit={{ top: '100vh' }}
            transition={{ duration: 0.3, type: 'tween' }}
            // eslint-disable-next-line tailwindcss/enforces-shorthand
            className="fixed top-0 right-0 left-0 m-auto w-full max-w-screen-md h-screen backdrop-blur-[2px] "
          >
            <div
              ref={ref}
              className={clsx(
                'flex overflow-hidden overflow-y-scroll absolute inset-0 flex-col my-auto mx-6 h-max max-h-[60vh] bg-light-80 rounded-3xl shadow-md',
                classes?.selectionContainer,
              )}
            >
              {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement, {
                  onClick: handleSelect,
                }),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SelectField

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

import ChevronIcon from '../../vectors/ChevronIcon'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import camelize from '../../../utils/camelize'

import twConfig from '../../../../tailwind.config'
import OptionModal from './OptionsModal/OptionsModal'
import TextField from '../TextField/TextField'
import SearchIcon from '../../vectors/SearchIcon'

export interface SelectFieldProps {
  placeholder: string
  children: React.ReactNode
  classes?: {
    container?: string
    input?: string
    selectionContainer?: string
  }
  register?: UseFormRegisterReturn
  useFontAwesome?: boolean
  onSearch?: (search: React.ChangeEvent) => void
}

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  placeholder,
  classes,
  register,
  useFontAwesome,
  onSearch,
}) => {
  const [value, setValue] = useState<any>('')
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleSelect = (value: any) => {
    setValue(value)
    handleClose()
  }

  const color = twConfig.theme.colors[(value.color as string) || '']

  return (
    <div
      className={clsx(
        'flex flex-row gap-2 items-center px-5 w-full h-14 text-light-20 bg-light-100 rounded-2xl border-[1px] border-light-60',
        classes?.container,
      )}
    >
      {value.icon && useFontAwesome ? (
        <FontAwesomeIcon
          className={`p-[6px] !w-[40px] !h-[40px] rounded-lg`}
          icon={
            require('@fortawesome/free-solid-svg-icons')[camelize(value.icon)]
          }
          color={color?.[100]}
          style={{ backgroundColor: color?.[20] }}
        />
      ) : (
        value.icon && (
          <Image
            src={value.icon}
            alt={value.name}
            width={40}
            height={40}
            className={`p-[6px] !w-10 !h-10 rounded-lg`}
          />
        )
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

      <OptionModal
        onRequestClose={handleClose}
        onSelect={handleSelect}
        open={open}
        containerClass={classes?.selectionContainer}
      >
        <div className="sticky inset-x-0 top-0 z-50 py-2 px-6 w-full bg-light-60">
          <TextField
            name="search"
            placeholder="Search"
            onChange={onSearch}
            endAdornment={
              <button>
                <SearchIcon />
              </button>
            }
          />
        </div>
        {children}
      </OptionModal>
    </div>
  )
}

export default SelectField

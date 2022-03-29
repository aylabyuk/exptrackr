import React, { useState } from 'react'
import clsx from 'clsx'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface TextFieldProps {
  name: string
  placeholder?: string
  type?: 'text' | 'password'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  classes?: {
    container?: string
    input?: string
  }
  register?: UseFormRegisterReturn
}

export const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  placeholder,
  startAdornment,
  endAdornment,
  register,
  classes,
}) => {
  const [readOnly, setReadOnly] = useState(true)

  const handleFocus = () => {
    setReadOnly(false)
  }

  return (
    <div
      className={clsx(
        'flex flex-row gap-4 px-5 w-full h-14 text-light-20 bg-light-100 rounded-2xl border-[1px] border-light-60',
        classes?.container,
      )}
    >
      {startAdornment}
      <input
        placeholder={placeholder}
        type={type}
        className={clsx(
          'grow leading-tight focus:outline-none appearance-none',
          classes?.input,
        )}
        onFocus={handleFocus}
        readOnly={readOnly}
        autoComplete="current-password"
        {...register}
      />
      {endAdornment}
    </div>
  )
}

export default TextField

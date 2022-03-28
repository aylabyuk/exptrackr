import React from 'react'
import clsx from 'clsx'

export interface TextFieldProps {
  name: string
  placeholder?: string
  type: 'text' | 'password'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  classes?: {
    container?: string
    input?: string
  }
}

export const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  return (
    <div className="flex flex-row gap-4 px-5 h-14 text-light-20 bg-light-100 rounded-2xl border-[1px] border-light-60">
      {startAdornment}
      <input
        placeholder={placeholder}
        type={type}
        className="grow  focus:outline-none"
      />
      {endAdornment}
    </div>
  )
}

export default TextField

import clsx from 'clsx'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface AmountFieldProps {
  className?: string
  register?: UseFormRegisterReturn
}

export const AmountField: React.FC<AmountFieldProps> = ({
  className,
  register,
}) => {
  return (
    <div className={clsx('flex flex-col grow gap-2', className)}>
      <span className="font-semibold text-light-80">How much?</span>
      <div className="flex flex-row text-titlex text-light-100">
        <span>$</span>
        <input
          placeholder="0"
          autoFocus
          type="number"
          className="w-full leading-tight placeholder:text-light-100 bg-transparent focus:outline-none appearance-none"
          autoComplete="current-password"
          {...register}
        />
      </div>
    </div>
  )
}

export default AmountField

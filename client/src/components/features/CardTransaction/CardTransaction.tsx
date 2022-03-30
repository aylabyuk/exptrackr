import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface CardTransactionProps {
  icon: string
  category: string
  date: Date
  description: string
  amount: number
}

const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase())

const getAmountText = (amount: number) => {
  return (amount < 0 ? '- ' : ' ') + `$ ${Math.abs(amount).toFixed(2)}`
}

export const CardTransaction: React.FC<CardTransactionProps> = ({
  icon,
  category,
  date,
  description,
  amount,
}) => {
  return (
    <div className="flex overflow-hidden flex-row gap-2 items-center py-[14px] px-4 w-full bg-light-80 rounded-3xl">
      <div className="flex flex-row justify-center items-center w-[60px] min-w-[60px] h-[60px] min-h-[60px] bg-violet-20 rounded-2xl">
        <FontAwesomeIcon
          className="w-7 h-7 text-violet-100"
          icon={require('@fortawesome/free-solid-svg-icons')[camelize(icon)]}
        ></FontAwesomeIcon>
      </div>
      <div className="flex flex-col grow justify-between py-[6px] max-w-[50%] h-[60px] whitespace-nowrap">
        <span className="text-body2 font-medium text-dark-25">{category}</span>
        <span className="overflow-hidden text-[14px] font-medium text-light-20 text-ellipsis">
          {description}
        </span>
      </div>
      <div className="flex flex-col grow justify-between items-end py-[6px] h-[60px]">
        <span className="font-semibold text-red-100">
          {getAmountText(amount)}
        </span>
        <span className="overflow-hidden text-[14px] font-medium text-light-20">
          12:00 PM
        </span>
      </div>
    </div>
  )
}

export default CardTransaction

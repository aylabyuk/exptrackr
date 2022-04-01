import React from 'react'
import format from 'date-fns/format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAmountText from '../../../utils/getAmountText'
import camelize from '../../../utils/camelize'
import { useGetAllCategoriesQuery } from '../../../redux/features/category/category-api'
import twConfig from '../../../../tailwind.config'

export interface CardTransactionProps {
  icon: string
  category: string
  date: Date
  description: string
  amount: number
}

export const CardTransaction: React.FC<CardTransactionProps> = ({
  icon,
  category,
  date,
  description,
  amount,
}) => {
  const { data: categories } = useGetAllCategoriesQuery({})

  const categoryObject = categories?.find((c) => c.name === category)
  const color = twConfig.theme.colors[categoryObject?.color || 'blue']

  return (
    <div className="flex overflow-hidden flex-row gap-2 items-center py-[14px] px-4 w-full bg-light-80 rounded-3xl">
      <div
        className="flex flex-row justify-center items-center w-[60px] min-w-[60px] h-[60px] min-h-[60px] rounded-2xl"
        style={{ backgroundColor: color?.[20] }}
      >
        <FontAwesomeIcon
          className="w-7 h-7"
          icon={require('@fortawesome/free-solid-svg-icons')[camelize(icon)]}
          color={color?.[100]}
        />
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
        <span className="overflow-hidden text-[14px] font-medium text-light-20 whitespace-nowrap">
          {format(new Date(date), 'hh:mm a')}
        </span>
      </div>
    </div>
  )
}

export default CardTransaction

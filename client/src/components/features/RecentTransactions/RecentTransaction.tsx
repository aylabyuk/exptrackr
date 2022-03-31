import React from 'react'
import Button from '../../base/Button/Button'
import CardTransaction, {
  CardTransactionProps,
} from '../CardTransaction/CardTransaction'

export interface RecentTransactionProps {}

const transactions: CardTransactionProps[] = [
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
  {
    icon: 'fa-utensils',
    description: 'Starbucks date with parents',
    category: 'Food',
    amount: -50,
    date: new Date(),
  },
]

export const RecentTransaction: React.FC<RecentTransactionProps> = ({
  children,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-4 w-full">
        <span className="text-title3 font-semibold text-dark-25">
          Recent Transaction
        </span>
        <button className="py-2 px-5 text-violet-100 bg-violet-20 rounded-[40px]">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-2 px-4">
        {transactions.map((transaction) => {
          return (
            <CardTransaction
              key={transaction.date.toString()}
              {...transaction}
            />
          )
        })}
      </div>
    </>
  )
}

export default RecentTransaction

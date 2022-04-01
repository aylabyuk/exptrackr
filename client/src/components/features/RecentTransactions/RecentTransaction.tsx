import Link from 'next/link'
import React from 'react'
import { useGetRecentTransactionsQuery } from '../../../redux/features/record/record-api'
import Spinner from '../../vectors/Spinner'
import CardTransaction from '../CardTransaction/CardTransaction'

export const RecentTransaction: React.FC = () => {
  const {
    data: transactions,
    isLoading,
    isFetching,
  } = useGetRecentTransactionsQuery({})

  if (!transactions || isLoading || isFetching) {
    return (
      <div className="flex flex-col justify-center items-center mt-8 w-full h-full">
        <Spinner show />
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center p-4 w-full">
        <span className="text-title3 font-semibold text-dark-25">
          Recent Transaction
        </span>
        <Link href="/transaction" passHref>
          <a className="py-2 px-5 text-violet-100 bg-violet-20 rounded-[40px] cursor-pointer">
            See all
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-2 px-4">
        {transactions.map((transaction: any) => {
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

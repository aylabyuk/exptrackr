import clsx from 'clsx'
import React from 'react'
import { FilteredRecordResponse } from '../../../redux/features/record/record-api'
import { selectOpenModals } from '../../../redux/features/ui/ui-reducer'
import { useAppSelector } from '../../../redux/hooks'
import groupTransactionsByDate from '../../../utils/goupTransactionsByDate'
import CardTransaction from '../CardTransaction/CardTransaction'

export interface TransactionsProps {
  transactions?: FilteredRecordResponse[]
}

export const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const openModals = useAppSelector(selectOpenModals)

  return (
    <div
      className={clsx(
        'flex absolute top-[134px] flex-col gap-3 px-3 pb-[200px] w-full h-full',
        openModals?.length ? 'overflow-y-hidden' : 'overflow-y-scroll',
      )}
    >
      {transactions?.length ? (
        groupTransactionsByDate(transactions).map((group) => (
          <div key={group.date}>
            <div className="sticky top-0 p-2 w-screen max-w-screen-md text-title3 font-semibold text-left text-dark-25 bg-light-100">
              {group.date}
            </div>

            {group.transactions.map((transaction) => (
              <CardTransaction
                key={transaction._id}
                amount={transaction.amount}
                category={transaction.category.name}
                date={transaction.createdAt}
                description={transaction.description}
                icon={transaction.category.icon}
              />
            ))}
          </div>
        ))
      ) : (
        <span className="p-4 text-body3 font-semibold text-center text-dark-25">
          No transactions returned, please check your filter values or search
          term
        </span>
      )}
    </div>
  )
}

export default Transactions

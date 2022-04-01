import React from 'react'
import { useGetCardsQuery } from '../../../redux/features/card/card-api'
import BottomDrawer from '../../base/BottomDrawer/BottomDrawer'
import IncomeForm from './IncomeForm'

export const IncomeTransactionDrawer: React.FC = ({}) => {
  const { data: cards, isSuccess } = useGetCardsQuery({})

  return (
    <div className="flex flex-col justify-end">
      <BottomDrawer show={isSuccess}>
        <IncomeForm cards={cards} />
      </BottomDrawer>
    </div>
  )
}

export default IncomeTransactionDrawer

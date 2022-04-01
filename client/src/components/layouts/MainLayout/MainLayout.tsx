import clsx from 'clsx'
import React, { ReactElement, useRef } from 'react'
import useScroll from 'react-use/lib/useScroll'
import {
  hideModal,
  ModalEnum,
  selectFabMode,
  selectOpenModals,
} from '../../../redux/features/ui/ui-reducer'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import FullScreenModal from '../../base/FullScreenModal/FullScreenModal'
import Navigation from '../../features/Navigation/Navigation'
import ExpenseTransactionDrawer from '../../forms/ExpenseForm/ExpenseTransactionDrawer'
import IncomeTransactionDrawer from '../../forms/IncomeForm/IncomeTransactionDrawer'

export const MainLayout: React.FC = ({ children }) => {
  const openModals = useAppSelector(selectOpenModals)
  const dispatch = useAppDispatch()

  const isFabOpen = useAppSelector(selectFabMode)
  const scrollRef = useRef(null)
  const { y } = useScroll(scrollRef)

  const closeIncomeModal = () => {
    dispatch(hideModal(ModalEnum.Income))
  }

  const closeExpenseModal = () => {
    dispatch(hideModal(ModalEnum.Expense))
  }

  const closeTransferModal = () => {
    dispatch(hideModal(ModalEnum.Transfer))
  }

  return (
    <div className="overflow-hidden relative -z-0 grow max-w-screen-md h-screen max-h-screen bg-light-100">
      <div
        className={clsx(
          'pb-24 mb-20 w-full h-screen',
          isFabOpen || openModals?.length
            ? 'overflow-y-hidden'
            : 'overflow-y-scroll',
        )}
        ref={scrollRef}
      >
        {React.cloneElement(children as ReactElement, { isScrolling: y >= 30 })}
      </div>

      <Navigation />

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Income)}
        title="Income"
        onBackButtonClick={closeIncomeModal}
        className="text-light-100 bg-green-100"
      >
        <IncomeTransactionDrawer />
      </FullScreenModal>

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Expense)}
        title="Expense"
        onBackButtonClick={closeExpenseModal}
        className="text-light-100 bg-red-100"
      >
        <ExpenseTransactionDrawer />
      </FullScreenModal>

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Transfer)}
        title="Transfer"
        onBackButtonClick={closeTransferModal}
        className="flex flex-col justify-center text-light-100 bg-blue-100"
      >
        404 The cosmic object you are looking for has disappeared beyond the
        event horizon.
      </FullScreenModal>
    </div>
  )
}

export default MainLayout

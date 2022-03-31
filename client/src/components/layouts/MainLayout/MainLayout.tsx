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
import ExpenseForm from '../../forms/ExpenseForm/ExpenseForm'
import IncomeForm from '../../forms/IncomeForm/IncomeForm'

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
    <div
      className={clsx(
        'overflow-hidden relative -z-0 grow max-w-screen-md h-screen bg-light-100',
        isFabOpen || openModals?.length
          ? 'overflow-y-hidden'
          : 'overflow-y-scroll',
      )}
      ref={scrollRef}
    >
      <div className="mb-20 w-full">
        {React.cloneElement(children as ReactElement, { isScrolling: y >= 30 })}
      </div>

      <Navigation />

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Income)}
        title="Income"
        onBackButtonClick={closeIncomeModal}
        className="text-light-100 bg-green-100"
      >
        <IncomeForm />
      </FullScreenModal>

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Expense)}
        title="Expense"
        onBackButtonClick={closeExpenseModal}
        className="text-light-100 bg-red-100"
      >
        <ExpenseForm />
      </FullScreenModal>

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Transfer)}
        title="Transfer"
        onBackButtonClick={closeTransferModal}
        className="text-light-100 bg-blue-100"
      >
        Not Implemented :(
      </FullScreenModal>
    </div>
  )
}

export default MainLayout

import clsx from 'clsx'
import React, { useRef } from 'react'
import useScroll from 'react-use/lib/useScroll'
import {
  hideModal,
  ModalEnum,
  selectFabMode,
  selectOpenModals,
} from '../../../redux/features/ui/ui-reducer'
import { useGetCurrentLoggedInUserQuery } from '../../../redux/features/user/user-api'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import FullScreenModal from '../../base/FullScreenModal/FullScreenModal'

import Navigation from '../../features/Navigation/Navigation'
import Topbar from '../../features/Topbar/Topbar'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
      <Topbar
        user={{
          username: 'thevinci',
          avatar: 'https://i.pravatar.cc/100',
          email: 'oriel.absin@gmail.com',
        }}
        isScrolling={y >= 30}
      />
      <div className="w-full">{children}</div>
      <Navigation />

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Income)}
        title="Income"
        onBackButtonClick={closeIncomeModal}
      >
        income
      </FullScreenModal>

      <FullScreenModal
        show={!!openModals?.includes(ModalEnum.Expense)}
        title="Expense"
        onBackButtonClick={closeExpenseModal}
      >
        Expense
      </FullScreenModal>
    </div>
  )
}

export default MainLayout

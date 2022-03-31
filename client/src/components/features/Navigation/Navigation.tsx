import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import HomeIcon from '../../vectors/HomeIcon'
import PieChartIcon from '../../vectors/PieChartIcon'
import Subtract from '../../vectors/Subtract'
import TransactionIcon from '../../vectors/TransactionIcon'
import UserIcon from '../../vectors/UserIcon'
import Fab from '../Fab/Fab'

export interface NavigationProps {}

export interface NavItemProps {
  title: string
  href: string
  isActive?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  title,
  href,
  isActive,
}) => {
  const router = useRouter()

  return (
    <Link passHref href={href}>
      <a
        className={clsx(
          'flex flex-col grow gap-2 items-center w-8 h-12 transition-all',
          router.pathname === href && 'text-violet-100',
        )}
      >
        <button>{children}</button>
        <span className="text-tiny font-medium">{title}</span>
      </a>
    </Link>
  )
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <>
      <div className="flex fixed bottom-0 flex-row justify-center w-full max-w-screen-md rounded-t-lg navigation-bg">
        <div className="flex absolute bottom-[10px] flex-row w-full text-[#c6c6c6]">
          <NavItem href="/home" title="Home">
            <HomeIcon />
          </NavItem>
          <NavItem href="/transaction" title="Transaction">
            <TransactionIcon />
          </NavItem>
          <div className="w-[100px]" />
          <NavItem href="/budget" title="Budget">
            <PieChartIcon />
          </NavItem>
          <NavItem href="/profile" title="Profile">
            <UserIcon />
          </NavItem>
        </div>
        <Subtract className="max-w-sm" />
      </div>

      <Fab />
    </>
  )
}

export default Navigation

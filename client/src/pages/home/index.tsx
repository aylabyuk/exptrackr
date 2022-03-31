import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import RecentTransaction from '../../components/features/RecentTransactions/RecentTransaction'
import Topbar from '../../components/features/Topbar/Topbar'

export interface HomeProps {
  isScrolling?: boolean
}

export const Home: NextPage<HomeProps> = ({ isScrolling }) => {
  return (
    <>
      <Head>
        <title>Expense Tracker - Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Topbar
        user={{
          username: 'thevinci',
          avatar: 'https://i.pravatar.cc/100',
          email: 'oriel.absin@gmail.com',
        }}
        isScrolling={isScrolling}
      />
      <RecentTransaction />
    </>
  )
}

export default Home

import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import MainLayout from '../components/layouts/MainLayout/MainLayout'

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <body className="overflow-hidden h-full" />
      </Head>
      <div className="bg-slate-500">
        <MainLayout>content</MainLayout>
      </div>
    </div>
  )
}

export default Home

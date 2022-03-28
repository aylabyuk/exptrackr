import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <body className="overflow-hidden h-full" />
      </Head>

      <main>Home page</main>
    </div>
  )
}

export default Home

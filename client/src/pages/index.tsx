import React from 'react'
import Head from 'next/head'

// import HomeLayout from '../components/layouts/homeLayout'

export const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Oriel Vinci</title>
        <body className="overflow-hidden h-full" />
      </Head>
      {/* <HomeLayout /> */}
      <div className="text-blue-500">Hello</div>
    </div>
  )
}

export default Home

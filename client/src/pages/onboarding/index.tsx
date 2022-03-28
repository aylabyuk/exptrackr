import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Button from '../../components/base/Button/Button'
import FullScreenModal from '../../components/base/FullScreenModal/FullScreenModal'

export const Onboarding: NextPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleBack = () => {
    setShowLoginModal(false)
  }

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  return (
    <div>
      <Head>
        <title>Expense Tracker - Onboarding</title>
        <body className="overflow-hidden h-full" />
      </Head>

      <div className="flex flex-col gap-4 justify-end p-5 h-screen">
        <div className="flex flex-col grow justify-center items-center">
          <span className="text-titlex font-bold text-center text-violet-100">
            exptrackr
          </span>
        </div>
        <Button>Sign Up</Button>
        <Button onClick={handleLogin} type="secondary">
          Login
        </Button>
      </div>

      <FullScreenModal
        show={showLoginModal}
        title="Login"
        onBackButtonClick={handleBack}
      >
        hello
      </FullScreenModal>
    </div>
  )
}

export default Onboarding

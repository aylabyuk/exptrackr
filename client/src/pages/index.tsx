import React, { useCallback, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import FullScreenModal from '../components/base/FullScreenModal/FullScreenModal'
import LoginForm, {
  LoginFormValues,
} from '../components/forms/LoginForm/LoginForm'
import OnboardingActions from '../components/features/OnboardingActions/OnboardingActions'
import Spinner from '../components/vectors/Spinner'
import Modal from '../components/base/Modal/Modal'

import {
  useGetCurrentLoggedInUserQuery,
  useLoginMutation,
} from '../redux/features/user/user-api'
import Brand from '../components/base/Brand/Brand'

export const Onboarding: NextPage = () => {
  const router = useRouter()

  const {
    data: me,
    isFetching,
    isLoading: isLoadingCurrentUser,
  } = useGetCurrentLoggedInUserQuery({})

  const [login, { isLoading: isLoggingIn, isError: isLoginError, reset }] =
    useLoginMutation()

  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleBack = () => {
    setShowLoginModal(false)
  }

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const handleLoginFormSubmit = useCallback(
    (data: LoginFormValues) => {
      setShowLoginModal(false)
      login(data)
    },
    [login],
  )

  const isLoading = isFetching || isLoadingCurrentUser || isLoggingIn

  if (me) {
    setTimeout(() => {
      router.push('/home')
    }, 1000)
  }

  return (
    <div>
      <Head>
        <title>Expense Tracker - Onboarding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center p-5 pb-[200px] h-screen">
        <Brand />

        <Spinner show={isLoading} />

        <OnboardingActions onLogin={handleLogin} show={!me && !isLoading} />
      </div>

      <FullScreenModal
        show={showLoginModal}
        title="Login"
        onBackButtonClick={handleBack}
      >
        <LoginForm onSubmit={handleLoginFormSubmit} />
      </FullScreenModal>

      <Modal
        type="error"
        show={isLoginError}
        message={`Login failed, please check you email and password`}
        onRequestClose={reset}
      />
    </div>
  )
}

export default Onboarding

import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { wrapper } from '../redux/store'

import '../../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout/MainLayout'
import RootContainer from '../components/layouts/RootContainer/RootContainer'
import Brand from '../components/base/Brand/Brand'
import usePWA from '../hooks/usePWA'
import { useGetCurrentLoggedInUserQuery } from '../redux/features/user/user-api'

function MyApp({ Component, pageProps, router }: AppProps) {
  const { data: user, isError } = useGetCurrentLoggedInUserQuery({})

  usePWA()

  const isOnboarding = router.pathname === '/'

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }, [isError, router])

  if (!user && !isOnboarding) {
    return (
      <RootContainer>
        <div className="flex overflow-hidden -z-0 flex-col justify-center items-center w-screen max-w-screen-md h-screen bg-light-100">
          <Brand />
        </div>
      </RootContainer>
    )
  }

  return (
    <RootContainer>
      {isOnboarding ? (
        <div className="overflow-hidden relative grow max-w-screen-md bg-light-100">
          <Component {...pageProps} />
        </div>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </RootContainer>
  )
}
export default wrapper.withRedux(MyApp)

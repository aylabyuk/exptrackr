import type { AppProps } from 'next/app'

import { wrapper } from '../redux/store'

import '../../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout/MainLayout'
import RootContainer from '../components/layouts/RootContainer/RootContainer'
import Brand from '../components/base/Brand/Brand'
import { useAppSelector } from '../redux/hooks'
import { selectCurrentUser } from '../redux/features/user/user-reducer'

function MyApp({ Component, pageProps, router }: AppProps) {
  const user = useAppSelector(selectCurrentUser)

  const isOnboarding = router.pathname === '/'
  const isHome = router.pathname === '/home'

  if (!user && !isOnboarding) {
    setTimeout(() => {
      router.push('/')
    }, 1000)

    return (
      <div className="flex overflow-hidden -z-0 flex-col justify-center items-center w-screen max-w-screen-md h-screen bg-light-100">
        <Brand />
      </div>
    )
  }

  return (
    <RootContainer>
      {isOnboarding ? (
        <div className="overflow-hidden relative grow max-w-screen-md bg-light-100">
          <Component {...pageProps} />
        </div>
      ) : (
        <MainLayout showTopbar={isHome}>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </RootContainer>
  )
}
export default wrapper.withRedux(MyApp)

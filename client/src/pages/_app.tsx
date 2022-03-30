import type { AppProps } from 'next/app'

import { wrapper } from '../redux/store'

import '../../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout/MainLayout'
import RootContainer from '../components/layouts/RootContainer/RootContainer'

function MyApp({ Component, pageProps, router }: AppProps) {
  const isOnboarding = router.pathname === '/'

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

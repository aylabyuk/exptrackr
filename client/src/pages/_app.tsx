import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../redux/store'

import '../../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout/MainLayout'
import RootContainer from '../components/layouts/RootContainer/RootContainer'

function MyApp({ Component, pageProps, router }: AppProps) {
  const isOnboarding = router.pathname === '/'

  return (
    <Provider store={store}>
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
    </Provider>
  )
}
export default MyApp

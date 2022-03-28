import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../redux/store'

import '../../styles/globals.css'
import MainLayout from '../components/layouts/MainLayout/MainLayout'
import RootContainer from '../components/layouts/RootContainer/RootContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootContainer>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </RootContainer>
    </Provider>
  )
}
export default MyApp

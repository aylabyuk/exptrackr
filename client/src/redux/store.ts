import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from 'next-redux-cookie-wrapper'

import userReducer from './features/user/user-reducer'
import { userApi } from './features/user/user-api'

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      user: userReducer,
      [userApi.reducerPath]: userApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          nextReduxCookieMiddleware({
            sameSite: true,
            subtrees: [
              {
                subtree: 'jwt',
              },
            ],
          }),
        )
        .concat(userApi.middleware),
  }),
)

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)

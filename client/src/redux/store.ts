import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import userReducer from './features/user/user-reducer'
import { userApi } from './features/user/user-api'
import uiReducer from './features/ui/ui-reducer'
import { categoryApi } from './features/category/category-api'
import { merchantApi } from './features/merchants/merchants-api'

const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      user: userReducer,
      [userApi.reducerPath]: userApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [merchantApi.reducerPath]: merchantApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(categoryApi.middleware)
        .concat(merchantApi.middleware),
  })

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

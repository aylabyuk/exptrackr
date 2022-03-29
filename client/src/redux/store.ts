import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { userApi } from './features/user/user-api'

const reducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
})

const store = configureStore({
  reducer: reducers,
  devTools: true,
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
export default store

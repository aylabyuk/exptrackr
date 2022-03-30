import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user/user-reducer'
import { userApi } from './features/user/user-api'

const reducers = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
})

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
export default store

import { combineReducers, configureStore } from '@reduxjs/toolkit'

// import sessionReducer from './features/session/session-reducer'

const reducers = combineReducers({
  // session: sessionReducer,
})

const store = configureStore({
  reducer: reducers,
  devTools: true,
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
export default store

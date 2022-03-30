import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { User } from '../../../models'
import { AppState } from '../../store'

interface UserState {
  currentUser: User | null
}

const initialState: UserState = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
    removeCurrentUser: (state) => {
      state.currentUser = null
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<UserState>) => {
      if (!action.payload.currentUser) {
        return state
      }
      state.currentUser = action.payload.currentUser
    },
  },
})

export const { setCurrentUser, removeCurrentUser } = userSlice.actions

export const selectCurrentUser = (state: AppState) => state.user.currentUser

export default userSlice.reducer

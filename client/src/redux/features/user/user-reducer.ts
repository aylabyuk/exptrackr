import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../models'

interface UserState {
  currentUser?: User
}

const initialState: UserState = {
  currentUser: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | undefined>) => {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer

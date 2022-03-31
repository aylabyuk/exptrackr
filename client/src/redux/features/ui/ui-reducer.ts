import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../../store'

export enum ModalEnum {
  Transfer = 'transfer',
  Income = 'income',
  Expense = 'expense',
}

interface UIState {
  openModals?: ModalEnum[]
  fabMode?: boolean
}

const initialState: UIState = {
  openModals: [],
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalEnum>) => {
      if (state.openModals?.includes(action.payload)) {
        return state
      }
      state.openModals = state.openModals?.concat(action.payload)
    },
    hideModal: (state, action: PayloadAction<ModalEnum>) => {
      const filtered = state.openModals?.filter(
        (value) => value !== action.payload,
      )
      state.openModals = filtered
    },
    setFabMode: (state, action: PayloadAction<boolean>) => {
      state.fabMode = action.payload
    },
  },
})

export const { setFabMode, showModal, hideModal } = uiSlice.actions

export const selectFabMode = (state: AppState) => state.ui.fabMode

export const selectOpenModals = (state: AppState) => state.ui.openModals

export default uiSlice.reducer

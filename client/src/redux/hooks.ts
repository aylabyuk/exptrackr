import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, AppState } from './store'

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export { useAppDispatch, useAppSelector }

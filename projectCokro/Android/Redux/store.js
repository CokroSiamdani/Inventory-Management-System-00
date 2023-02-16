import appSlice from './Slices/appSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {app: appSlice},
})
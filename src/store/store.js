import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice, UserSlice, ManagerSlice } from './features'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    manager: ManagerSlice,
  },
})

export default store

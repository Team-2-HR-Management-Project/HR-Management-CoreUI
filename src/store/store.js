import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice, UserSlice, adminSlice } from './features'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    admin: adminSlice,
  },
})

export default store

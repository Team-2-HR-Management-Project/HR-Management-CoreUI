import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice, UserSlice, ManagerSlice, companySlice } from './features'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    manager: ManagerSlice,
    company: companySlice,
  },
})

export default store

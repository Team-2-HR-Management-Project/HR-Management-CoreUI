import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice, UserSlice, ManagerSlice, adminSlice, companySlice } from './features'


const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    manager: ManagerSlice,
    admin: adminSlice,
    company: companySlice,
  },
})

export default store

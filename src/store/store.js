import { configureStore } from '@reduxjs/toolkit'
import {
  AuthSlice,
  UserSlice,
  ManagerSlice,
  companySlice,
  LeaveSlice,
  ExpencesSlice,
} from './features'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    manager: ManagerSlice,
    company: companySlice,
    leave: LeaveSlice,
    expences: ExpencesSlice,
  },
})

export default store

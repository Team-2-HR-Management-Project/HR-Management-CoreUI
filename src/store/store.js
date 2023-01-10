import { configureStore } from '@reduxjs/toolkit'
import {
  AuthSlice,
  UserSlice,
  ManagerSlice,
  companySlice,
  LeaveSlice,
  ExpensesSlice,
} from './features'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    manager: ManagerSlice,
    company: companySlice,
    leave: LeaveSlice,
    expenses: ExpensesSlice,
  },
})

export default store

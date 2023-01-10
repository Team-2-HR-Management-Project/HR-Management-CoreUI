import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import expensesService from '../../config/ExpensesService'

const initialStateExpenses = {
  expenses: {},
  myExpensesList: [],
  expensesId: null,
  changeStatus: false,
  isLoading: false,
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const createExpenses = createAsyncThunk('expenses/create', async (payload) => {
  try {
    const response = await axios.post(expensesService.expensescreate, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const getAllMyExpenses = createAsyncThunk('expenses/findmyexpenses', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(expensesService.findmyexpenses + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const seeDetailExpenses = createAsyncThunk('expenses/seedetailexpenses', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(expensesService.expensesdetail + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: initialStateExpenses,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(createExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload
      state.isLoading = false
    })
    build.addCase(createExpenses.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(createExpenses.pending, (state, action) => {
      state.isLoading = true
    })

    build.addCase(getAllMyExpenses.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.myExpensesList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllMyExpenses.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllMyExpenses.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(seeDetailExpenses.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.expenses = action.payload
      state.expensesId = action.payload.id
      state.isLoading = false
    })
    build.addCase(seeDetailExpenses.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(seeDetailExpenses.pending, (state) => {
      state.isLoading = true
    })
  },
})

export default expensesSlice.reducer

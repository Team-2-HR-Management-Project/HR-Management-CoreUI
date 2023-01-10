import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import expencesService from '../../config/ExpencesService'

const initialStateExpences = {
  expences: {},
  myExpencesList: [],
  expencesId: null,
  changeStatus: false,
  isLoading: false,
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const createExpences = createAsyncThunk('expences/create', async (payload) => {
  try {
    const response = await axios.post(expencesService.expencescreate, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const getMyAllExpences = createAsyncThunk('expences/findmyexpences', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(expencesService.findmyexpences + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const seeDetailExpences = createAsyncThunk('expences/seedetailexpences', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(expencesService.expencesdetail + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

const expencesSlice = createSlice({
  name: 'expences',
  initialState: initialStateExpences,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(createExpences.fulfilled, (state, action) => {
      state.expences = action.payload
      state.isLoading = false
    })
    build.addCase(createExpences.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(createExpences.pending, (state, action) => {
      state.isLoading = true
    })

    build.addCase(getMyAllExpences.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.myExpencesList = action.payload
      state.isLoading = false
    })
    build.addCase(getMyAllExpences.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getMyAllExpences.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(seeDetailExpences.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.expences = action.payload
      state.expencesId = action.payload.id
      state.isLoading = false
    })
    build.addCase(seeDetailExpences.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(seeDetailExpences.pending, (state) => {
      state.isLoading = true
    })
  },
})

export default expencesSlice.reducer

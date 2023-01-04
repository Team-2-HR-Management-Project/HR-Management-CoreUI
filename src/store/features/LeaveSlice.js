import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import leaveService from 'src/config/LeaveService'

const initialStateLeave = {
  leave: {},
  leaveList: [],
  allLeaveList: [],
  myLeaveList: [],
  otherLeaveList: [],
  leaveId: null,
  isLoading: false,
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const createLeave = createAsyncThunk('leave/create', async (payload) => {
  try {
    const response = await axios.post(leaveService.leavecreate, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const updateLeave = createAsyncThunk('leave/update', async (payload) => {
  try {
    const response = await axios.put(leaveService.leaveupdate, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const findallbymanager = createAsyncThunk('leave/findallbymanager', async (payload) => {
  try {
    const response = await axios.post(leaveService.findallbymanager, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const findallbyemployee = createAsyncThunk('leave/findallbyemployee', async (payload) => {
  try {
    const response = await axios.post(leaveService.findallbyemployee, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})
export const getAllLeaves = createAsyncThunk('leave/getAllLeaves', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.post(leaveService.findallleaves + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

const leaveSlice = createSlice({
  name: 'leave',
  initialState: initialStateLeave,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(createLeave.fulfilled, (state, action) => {
      state.leave = action.payload
      state.isLoading = false
    })
    build.addCase(createLeave.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(createLeave.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(updateLeave.fulfilled, (state, action) => {
      state.leave = action.payload
      state.isLoading = false
    })
    build.addCase(updateLeave.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(updateLeave.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(findallbymanager.fulfilled, (state, action) => {
      state.otherLeaveList = action.payload
      state.isLoading = false
    })
    build.addCase(findallbymanager.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(findallbymanager.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(findallbyemployee.fulfilled, (state, action) => {
      state.leaveList = action.payload
      state.isLoading = false
    })
    build.addCase(findallbyemployee.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(findallbyemployee.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(getAllLeaves.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // Eğer Axios kkullanıyor isen payload tan sonra araya data eklemelisin
      state.allLeaveList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllLeaves.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllLeaves.pending, (state) => {
      state.isLoading = true
    })
  },
})
export default leaveSlice.reducer

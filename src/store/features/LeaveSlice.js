import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import leaveService from '../../config/LeaveService'

const initialStateLeave = {
  leave: {},
  otherleave: {},
  leaveList: [],
  allLeaveList: [],
  myLeaveList: [],
  otherLeaveList: [],
  leaveId: null,
  otherleaveId: null,
  changeStatus: false,
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
    const response = await axios.get(leaveService.findallleaves + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const getMyAllLeaves = createAsyncThunk('leave/getMyAllLeaves', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(leaveService.findmyleaves + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const seeDetailLeave = createAsyncThunk('leave/seedetailleave', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(leaveService.seedetailleave + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})
export const seeLeaveDetails = createAsyncThunk('leave/seeLeaveDetails', async (payload) => {
  try {
    const response = await axios.post(leaveService.seeleavedetails, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const rejectLeave = createAsyncThunk('leave/rejectLeave', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(leaveService.rejectleave + payload, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const approveLeave = createAsyncThunk('leave/approveLeave', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(leaveService.approveleave + payload, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
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

  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
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
      state.otherleave = action.payload
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
      state.allLeaveList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllLeaves.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllLeaves.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(getMyAllLeaves.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.myLeaveList = action.payload
      state.isLoading = false
    })
    build.addCase(getMyAllLeaves.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getMyAllLeaves.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(seeDetailLeave.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.otherleave = action.payload
      state.otherleaveId = action.payload
      state.isLoading = false
    })
    build.addCase(seeDetailLeave.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(seeDetailLeave.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(seeLeaveDetails.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.otherleave = action.payload
      state.otherleaveId = action.payload.id
      state.isLoading = false
    })
    build.addCase(seeLeaveDetails.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(seeLeaveDetails.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(rejectLeave.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      console.log('REJECTED')
      if (state.changeStatus === false) {
        state.changeStatus = true
      } else {
        state.changeStatus = false
      }
      console.log(state.changeStatus)

      state.isLoading = false
    })
    build.addCase(rejectLeave.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(rejectLeave.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(approveLeave.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      console.log('APPROVED')
      if (state.changeStatus === false) {
        state.changeStatus = true
      } else {
        state.changeStatus = false
      }
      console.log(state.changeStatus)
      state.isLoading = false
    })
    build.addCase(approveLeave.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(approveLeave.pending, (state) => {
      state.isLoading = true
    })
  },
})
export const { setData } = leaveSlice.actions
export default leaveSlice.reducer

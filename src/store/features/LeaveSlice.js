import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import leaveService from 'src/config/LeaveService'

const initialStateLeave = {
    leave: {},
    leaveList: [],
    leaveId: null,
    isLoading: false,
    error: {
      code: '',
      message: '',
      fields: [],
    },
}

export const createLeave = createAsyncThunk ('leave/create', async (payload) => {
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

export const updateLeave = createAsyncThunk ('leave/update', async (payload) => {
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

  export const findallbymanager = createAsyncThunk ('leave/findallbymanager', async (payload) => {
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

  export const findallbyemployee = createAsyncThunk ('leave/findallbyemployee', async (payload) => {
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
  });

  const leaveSlice =createSlice({
    name: "leave"
  })
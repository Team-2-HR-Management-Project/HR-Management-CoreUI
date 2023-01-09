import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import companyService from '../../config/CompanyService'

const initialStateCompany = {
  company: {},
  othercompany: {},
  companyList: [],
  companyId: null,
  othercompanyId: null,
  isLoading: false,
  isChange: false,
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const companyDetail = createAsyncThunk('company/seedetail', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(companyService.companydetail + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const findAllCompany = createAsyncThunk('company/findallcompany', async () => {
  try {
    const response = await axios.get(companyService.findall, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const createCompany = createAsyncThunk('company/createcompany', async (payload) => {
  try {
    const response = await axios.post(companyService.companycreate, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

export const updateCompany = createAsyncThunk('company/updatecompany', async (payload) => {
  try {
    const response = await axios.put(companyService.companyupdate, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
})

const companySlice = createSlice({
  name: 'company',
  initialState: initialStateCompany,

  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },

  extraReducers: (build) => {
    build.addCase(companyDetail.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.othercompany = action.payload
      state.othercompanyId = action.payload.id
      state.isLoading = false
    })
    build.addCase(companyDetail.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(companyDetail.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(findAllCompany.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.companyList = action.payload
      console.log('componylist', state.companyList)
      state.isLoading = false
      state.isChange = false
    })
    build.addCase(findAllCompany.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(findAllCompany.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(createCompany.fulfilled, (state, action) => {
      state.company = action.payload
      state.isChange = true
      state.isLoading = false
    })
    build.addCase(createCompany.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(createCompany.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(updateCompany.fulfilled, (state, action) => {
      state.othercompany = action.payload
      state.isLoading = false
    })
    build.addCase(updateCompany.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(updateCompany.pending, (state, action) => {
      state.isLoading = true
    })
  },
})
export const { setData } = companySlice.actions
export default companySlice.reducer

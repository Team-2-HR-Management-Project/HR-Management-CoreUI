import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import managerService from '../../config/ManagerService'
const initialStateManager = {
  token: '',
  isAuthanticated: false,
  manager: {},
  managerList: [],
  otherManager: {},
  otherManagerId: null,
  isLoading: false,
  isLoadingRegister: false,
  isSave: false,
  code: 0,
  alertMessage: '',
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const registerManager = createAsyncThunk(
  'manager/registermanager',

  async (payload) => {
    try {
      const response = await axios
        .post(managerService.managerregister, {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .catch((error) => console.log(error))
      return response
    } catch (err) {
      return err.response
    }
  },
)
export const managerfindbyid = createAsyncThunk('manager/findbyid', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(managerService.findbyid + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const getAllManagers = createAsyncThunk('managerList/getAllManagers', async () => {
  const result = await fetch(managerService.findall)
    .then((response) => response.json())
    .then((data) => data)

  return result
})

export const managerSeeDetail = createAsyncThunk('manager/managerseedetail', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(managerService.managerseedetail + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

const managerSlice = createSlice({
  name: 'manager',
  initialState: initialStateManager,

  reducers: {
    setAllertMsssage: (state, action) => {
      state.alertMessage = action.payload
    },
    setIsSave: (state, action) => {
      state.isSave = false
      state.alertMessage = ''
    },

    logout: (state, action) => {
      state.token = ''
      state.isAuthanticated = false
    },
    setManager: (state, action) => {
      state.manager = action.payload
    },
  },
  extraReducers: (build) => {
    build.addCase(registerManager.fulfilled, (state, action) => {
      state.manager = action.payload
      state.isSave = true
      state.alertMessage = 'succesful'
      state.isLoadingRegister = false
    })

    build.addCase(registerManager.pending, (state, action) => {
      state.isLoadingRegister = true
      state.isSave = false
    })
    build.addCase(registerManager.rejected, (state, action) => {
      state.isLoadingRegister = false
      state.isSave = false
      state.alertMessage = state.error.message
    })
    build.addCase(managerSeeDetail.fulfilled, (state, action) => {
      state.otherManager = action.payload
      state.otherManagerId = action.payload
      state.isLoading = false
    })
    build.addCase(managerSeeDetail.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(managerSeeDetail.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(managerfindbyid.fulfilled, (state, action) => {
      state.manager = action.payload
      state.isLoading = false
    })
    build.addCase(managerfindbyid.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(managerfindbyid.pending, (state, action) => {
      state.isLoading = true
    })

    build.addCase(getAllManagers.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // Eğer Axios kkullanıyor isen payload tan sonra araya data eklemelisin
      state.managerList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllManagers.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllManagers.pending, (state) => {
      state.isLoading = true
    })
  },
})
export const { setAllertMsssage, logout, setIsSave, setManager } = managerSlice.actions

export default managerSlice.reducer

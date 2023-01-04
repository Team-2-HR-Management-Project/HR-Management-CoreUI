import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../config/AuthService'

const initialStateAuth = {
  isActivated: false,
  token: '',
  isAuthanticated: false,
  auth: {},
  authid: null,
  authList: [],
  isLoading: false,
  isLoadingRegister: false,
  isSave: false,
  isExist: false,
  code: 0,
  alertMessage: '',
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (payload) => {
  try {
    const response = await fetch(authService.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((data) => data.json())
      .then((data) => data)
    //.catch(err => console.log('Hatalı geldi....: ',err));
    console.log(response)
    return response
  } catch (e) {
    //     console.log('Hata: ',e);
  }
})

export const fecthRegister = createAsyncThunk(
  'auth/register',

  async (payload) => {
    try {
      const response = await fetch(authService.register, {
        method: 'POST',
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

export const fecthRegisterbymail = createAsyncThunk(
  'auth/registerbymail',

  async (payload) => {
    try {
      const response = await fetch(authService.registerbymail, {
        method: 'POST',
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

export const fetchCreatePassword = createAsyncThunk(
  'auth/createpassword',

  async (payload) => {
    try {
      const response = await fetch(authService.activatebypassword, {
        method: 'POST',
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

export const forgetPassword = createAsyncThunk(
  'auth/forgetpassword',

  async (payload) => {
    try {
      const response = await fetch(authService.forgetpassword, {
        method: 'POST',
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

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,

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
    setAuth: (state, action) => {
      state.auth = action.payload
    },
  },
  extraReducers: (build) => {
    build.addCase(forgetPassword.fulfilled, (state, action) => {
      state.auth = action.payload
      state.isLoading = false
      state.isExist = true
      alert('Reset Password Activation code sent to your email.')
    })

    build.addCase(forgetPassword.pending, (state) => {
      state.isLoading = true
    })

    build.addCase(forgetPassword.rejected, (state) => {
      state.isLoading = false
      state.isExist = false
      state.alertMessage = state.error.message
      alert('Email does not exist.')
    })

    build.addCase(fecthRegisterbymail.fulfilled, (state, action) => {
      state.auth = action.payload
      state.isSave = true
      state.alertMessage = 'succesful'
      state.isLoadingRegister = false
    })

    build.addCase(fecthRegisterbymail.pending, (state, action) => {
      state.isLoadingRegister = true
      state.isSave = false
    })
    build.addCase(fecthRegisterbymail.rejected, (state, action) => {
      state.isLoadingRegister = false
      state.isSave = false
      state.alertMessage = state.error.message
    })
    build.addCase(fetchCreatePassword.fulfilled, (state, action) => {
      try {
        state.isActivated = true
        alert('successfully activated')
        state.isLoading = false
      } catch (error) {
        console.log(error)
        alert('Something went wrong!')
      }
      state.isLoading = false
    })

    build.addCase(fetchCreatePassword.pending, (state, action) => {
      state.isLoading = true
    })
    build.addCase(fetchCreatePassword.rejected, (state, action) => {
      state.alertMessage = state.error.message
    })
    build.addCase(fecthRegister.fulfilled, (state, action) => {
      state.auth = action.payload
      state.alertMessage = 'succesful'
      state.isLoadingRegister = false
      state.isSave = true
    })

    build.addCase(fecthRegister.pending, (state, action) => {
      state.isLoadingRegister = true
      state.isSave = false
    })
    build.addCase(fecthRegister.rejected, (state, action) => {
      state.isLoadingRegister = false
      state.isSave = false
      state.alertMessage = state.error.message
    })

    build.addCase(fetchLogin.fulfilled, (state, action) => {
      try {
        state.token = action.payload.token
        state.authid = action.payload.id
        if (action.payload.code === 400) {
          state.isAuthanticated = true
        } else {
          state.isAuthanticated = false
          alert('Please check your email and password')
        }

        console.log('logintoken...: ' + action.payload.token)
      } catch (error) {
        alert('Login is not successful')
      }
      state.isLoading = false
    })
    build.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true
      state.isAuthanticated = false
    })
    build.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false
      state.isAuthanticated = false
      alert('Something went wrong')
    })
  },
})

export const { setAllertMsssage, logout, setIsSave, setAuth } = authSlice.actions

export default authSlice.reducer

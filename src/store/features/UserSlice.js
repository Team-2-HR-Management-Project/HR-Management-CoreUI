import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import userService from '../../config/UserService'

const initialStateUser = {
  token: '',
  user: {},
  managerList: [],
  employeeList: [],
  mycolleague: [],
  authid: null,
  otherUserProfile: {},

  otherUserId: null,
  currentUserId: null,
  data: [],
  isLoading: false,
  error: {
    code: '',
    message: '',
    fields: [],
  },
}

export const findbyTokenwithAxios = createAsyncThunk('user/findbytoken', async (payload) => {
  try {
    const response = await axios.post(userService.findbytoken, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('tokenfind ' + response.data)
    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const userSeeDetail = createAsyncThunk('user/userseedetail', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(userService.userseedetail + payload, {
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
  const result = await fetch(userService.findallmanager)
    .then((response) => response.json())
    .then((data) => data)

  return result
})

export const getAllEmployees = createAsyncThunk('employeeList/getAllEmployees', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(userService.findallemployee + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

export const getAllMyManagers = createAsyncThunk(
  'employeeList/getAllMyManagers',
  async (payload) => {
    try {
      console.log(payload)
      const response = await axios.get(userService.findallmanagerbycompanyid + payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return response.data
    } catch (error) {
      return error.response.data
    }
  },
)

export const getAllColleague = createAsyncThunk('myColleague/getAllColleague', async (payload) => {
  try {
    console.log(payload)
    const response = await axios.get(userService.findallcolleague + payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    return error.response.data
  }
})

// export const findallUser = createAsyncThunk(
//   "user/findalluser",
//   async (payload) => {
//     try {
//       const response = await axios.get(userService.findall, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return error.response.data;
//     }
//   }
// );

export const getAllUsers = createAsyncThunk('userList/getAllUsers', async () => {
  const result = await fetch(userService.findall)
    .then((response) => response.json())
    .then((data) => data)

  return result
})

export const createUser = createAsyncThunk(
  'user/createuser',

  async (payload) => {
    try {
      const response = await axios
        .post(userService.usercreate, {
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
export const deleteUser = createAsyncThunk(
  'follow/deleteuser',

  async (payload) => {
    try {
      const response = await axios
        .post(userService.userdeletebyid, {
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

// export const updateUser = createAsyncThunk(
//   "follow/deleteuser",

//   async (payload) => {
//     try {
//       console.log(payload);
//       const response = await axios.put(userService.userupdate, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })
//         .then((response) => response.json())
//         .catch((error) => console.log(error));
//       return response;
//     } catch (err) {
//       return err.response;
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  'user/update',

  async (payload) => {
    try {
      const response = await fetch(userService.userupdate, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error))
      console.log(response)
      return response
    } catch (err) {
      return err.response
    }
  },
)

export const updateAllUser = createAsyncThunk(
  'user/updateall',

  async (payload) => {
    try {
      const response = await fetch(userService.userupdateall, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .catch((error) => console.log(error))
      console.log(response)
      return response
    } catch (err) {
      return err.response
    }
  },
)
export const fetchCreateManager = createAsyncThunk()

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,

  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (build) => {
    build.addCase(findbyTokenwithAxios.fulfilled, (state, action) => {
      state.user = action.payload
      state.currentUserId = action.payload.id
      state.isLoading = false
    })

    build.addCase(findbyTokenwithAxios.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(findbyTokenwithAxios.pending, (state, action) => {
      state.isLoading = true
    })

    build.addCase(userSeeDetail.fulfilled, (state, action) => {
      state.otherUserProfile = action.payload
      state.otherUserId = action.payload
      state.isLoading = false
    })
    build.addCase(userSeeDetail.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    build.addCase(userSeeDetail.pending, (state, action) => {
      state.isLoading = true
    })

    build.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // E??er Axios kkullan??yor isen payload tan sonra araya data eklemelisin
      state.data = action.payload
      state.isLoading = false
    })
    build.addCase(getAllUsers.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(updateUser.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(updateUser.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      state.authid = action.payload.authid
      state.otherUserProfile = action.payload
      state.isLoading = false
    })
    build.addCase(updateUser.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllManagers.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // E??er Axios kkullan??yor isen payload tan sonra araya data eklemelisin
      state.managerList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllManagers.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllManagers.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(getAllMyManagers.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // E??er Axios kkullan??yor isen payload tan sonra araya data eklemelisin
      state.managerList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllMyManagers.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllMyManagers.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(updateAllUser.fulfilled, (state, action) => {
      state.authid = action.payload.authid
      state.user = action.payload
      state.isLoading = false
    })
    build.addCase(updateAllUser.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(updateAllUser.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(getAllEmployees.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // E??er Axios kkullan??yor isen payload tan sonra araya data eklemelisin
      state.employeeList = action.payload
      state.isLoading = false
    })
    build.addCase(getAllEmployees.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllEmployees.pending, (state) => {
      state.isLoading = true
    })
    build.addCase(getAllColleague.fulfilled, (state, action) => {
      console.log('Extra Reducer', action.payload)
      // E??er Axios kkullan??yor isen payload tan sonra araya data eklemelisin
      state.mycolleague = action.payload
      state.isLoading = false
    })
    build.addCase(getAllColleague.rejected, (state) => {
      state.isLoading = false
    })
    build.addCase(getAllColleague.pending, (state) => {
      state.isLoading = true
    })
  },
})
export const { setData } = userSlice.actions

export default userSlice.reducer

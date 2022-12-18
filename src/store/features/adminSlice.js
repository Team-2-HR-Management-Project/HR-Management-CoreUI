import { createSlice } from '@reduxjs/toolkit'

const initialStateAuth = {
  section: '',
}

const adminSlice = createSlice({
  name: 'admin',
  initialState: initialStateAuth,

  reducers: {
    setSection: (state, action) => {
      state.section = action.payload
    },
  },
})

export const { setSection } = adminSlice.actions

export default adminSlice.reducer

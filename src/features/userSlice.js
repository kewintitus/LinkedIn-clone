import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, userDisplayData: null },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = false;
    },
    updateDisplayData: (state, action) => {
      state.userDisplayData = action.payload;
    },
  },
});

export const { login, logout, updateDisplayData } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectData = (state) => state.user.userDisplayData;

export default userSlice.reducer;

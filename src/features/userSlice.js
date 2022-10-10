import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state) => {
      state.user = true;
    },
    logout: (state) => {
      state.user = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;

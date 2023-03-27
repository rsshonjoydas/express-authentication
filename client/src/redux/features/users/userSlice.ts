/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ILogin, IRegister } from '@/types/auth';
import authAction from './userAction';

export const login = createAsyncThunk(
  'users/login',
  async (user: ILogin) => await authAction.login(user)
);

export const register = createAsyncThunk(
  'users/register',
  async (user: IRegister) => await authAction.register(user)
);

const initialState = {
  user: [],
  admin: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
      state.admin = action.payload.admin;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.startsWith('users') && type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.startsWith('users') && type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;

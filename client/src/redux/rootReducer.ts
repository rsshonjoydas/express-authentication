import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './features/users/userSlice';

const reducer = combineReducers({
  user: userSlice,
});

export default reducer;

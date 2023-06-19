import {createSlice} from '@reduxjs/toolkit';
const LoginReducer = createSlice({
  name: 'Status',
  initialState: {checkStatus: false, value: 0},
  reducers: {
    login: (state, action) => {
      state.checkStatus = action.payload;
    },
  },
});
export const {login} = LoginReducer.actions;
export default LoginReducer.reducer;

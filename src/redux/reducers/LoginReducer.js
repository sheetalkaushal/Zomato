import {createSlice} from '@reduxjs/toolkit';
const LoginReducer = createSlice({
  name: 'Status',
  initialState: {checkStatus: false, value: 0},
  reducers: {
    login: (state, action) => {
      state.checkStatus = action.payload;
    },
    increment: (state, action) => {
      state.value = action.payload + 1;
    },
    decrement: (state, action) => {
      state.value = action.payload - 1;
    },
    addcarddata: (state, action) => {
      state.carddata.push(action.payload);
    },
    removecarddata: (state, action) => {
      state.carddata.splice(action.payload, 1);
    },
  },
});
export const {login, increment, decrement, addcarddata, removecarddata} =
  LoginReducer.actions;
export default LoginReducer.reducer;

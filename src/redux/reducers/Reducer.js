import {createSlice} from '@reduxjs/toolkit';
const Reducer = createSlice({
  name: 'Status',
  initialState: {checkStatus: false, value: 0, carddata: [], qty: 1},
  reducers: {
    login: (state, action) => {
      state.checkStatus = action.payload;
    },
    addcarddata: (state, action) => {
      console.log(action?.payload, 'actionactionactionaction>>>>');
      const found = state.carddata.some(el => el.id === action.payload?.id);
      if (!found) {
        state.carddata.push(action.payload);
      }
    },

    increment: (state, action) => {
      const itemToIncrement = state.carddata.find(
        item => item.id === action.payload,
      );
      if (itemToIncrement) {
        itemToIncrement.qty++;
      }
    },
    decrement: (state, action) => {
      const itemDecrement = state.carddata.find(
        item => item.id === action.payload,
      );
      if (itemDecrement ) {
       if(itemDecrement.qty > 0)
          itemDecrement.qty--;
        
      }
    },
    removecarddata: (state, action) => {
      state.carddata.splice(action.payload, 1);
    },
  },
});
export const {login, increment, decrement, addcarddata, removecarddata} =
  Reducer.actions;
export default Reducer.reducer;

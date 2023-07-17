import {createSlice} from '@reduxjs/toolkit';
const Reducer = createSlice({
  name: 'Status',
  initialState: {
    checkStatus: false,
    value: 0,
    carddata: [],
    qty: 0,
    // money: [],
    subgrandtotal: '',
  },
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
        itemToIncrement.grandtotal =
          itemToIncrement.qty * itemToIncrement.money;
      }
      const GrandTotal = state.carddata.reduce((total, item) => {
        const qty = item.qty;
        const money = item.money;
        const itemTotal = qty * money;
        return total + itemTotal;
      }, 0);
      state.subgrandtotal = GrandTotal;
      console.log(state.subgrandtotal, 'aaaaaaa >>>>>>>>>>0000');
    },
    decrement: (state, action) => {
      const itemDecrement = state.carddata.find(
        item => item.id === action.payload,
      );
      if (itemDecrement) {
        if (itemDecrement.qty > 0) itemDecrement.qty--;
        itemDecrement.grandtotal = itemDecrement.qty * itemDecrement.money;
      }
    },
    removecarddata: (state, action) => {
      state.carddata.splice(action.payload, 1);
    },
  },
});
export const {
  login,
  increment,
  decrement,
  addcarddata,
  removecarddata,
  calcPrice,
} = Reducer.actions;
export default Reducer.reducer;

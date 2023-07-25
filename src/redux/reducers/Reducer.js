import {createSlice} from '@reduxjs/toolkit';
const Reducer = createSlice({
  name: 'Status',
  initialState: {
    checkStatus: false,
    value: 0,
    carddata: [],
    qty: 0,
    subgrandtotal: '',
    ApiCall: [],
    users: {},
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
      console.log(state.subgrandtotal, 'sunbgrandtotal>>');
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
      const GrandTotal = state.carddata.reduce((total, item) => {
        const qty = item.qty;
        const money = item.money;
        const itemTotal = qty * money;
        return total + itemTotal;
      }, 0);
      state.subgrandtotal = GrandTotal;
      console.log(state.subgrandtotal, 'sunbgrandtotal>>');
    },
    UserDetails: (state, action) => {
      state.users = action.payload;
    },
    Api: (state, action) => {
      state.ApiCall = action.payload;
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
  UserDetails,
  Api,
} = Reducer.actions;
export default Reducer.reducer;

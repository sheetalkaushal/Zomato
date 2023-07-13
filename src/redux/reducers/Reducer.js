import {createSlice} from '@reduxjs/toolkit';
const Reducer = createSlice({
  name: 'Status',
  initialState: {
    checkStatus: false,
    value: 0,
    carddata: [],
    qty: 1,
    totalAmount: 0,
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
      }
    },
    decrement: (state, action) => {
      const itemDecrement = state.carddata.find(
        item => item.id === action.payload,
      );
      if (itemDecrement) {
        if (itemDecrement.qty > 0) itemDecrement.qty--;
      }
    },
    removecarddata: (state, action) => {
      state.carddata.splice(action.payload, 1);
    },
    getCartTotal: (state) => {
      let { qty, totalAmount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalAmount += itemTotal;
          cartTotal.qty += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          qty: 0,
        }
      );
      // state.totalPrice = parseInt(totalPrice.toFixed(2));
      // state.totalQuantity = totalQuantity;
    },
    // calcPrice(state, action) {
    //   let total = 0;

    //   state.carddata.ITEMS.forEach(item => {
    //     total = item.qty * item.totalAmount;
    //     total += item.total;
    //   });
    //   state.total = total;
    // },
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

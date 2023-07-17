import {
  login,
  increment,
  decrement,
  addcarddata,
  removecarddata,
} from '../reducers/Reducer';
import {store} from '../store';
const dispatch = store.dispatch;
export const datasend = data => {
  dispatch(login(data));
};
export const increase = data => {
  dispatch(increment(data));
};
export const decrease = data => {
  dispatch(decrement(data));
};
export const sendcarddata = data => {
  dispatch(addcarddata(data));
};
export const dataremove = data => {
  dispatch(removecarddata(data));
  //  alert (" Are you remove item")
};
export const TotalAmountdata = data => {
  dispatch(getCartTotal(data));
};

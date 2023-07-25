import {
  login,
  increment,
  decrement,
  addcarddata,
  removecarddata,
  Api,
  UserDetails,
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
};
export const TotalAmountdata = data => {
  dispatch(getCartTotal(data));
};
export const dataApi = data => {
  dispatch(Api(data));
};
// export const userdata = data => {
//   dispatch(UserDetails(data));
// };

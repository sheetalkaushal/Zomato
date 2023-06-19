import {login} from '../reducers/LoginReducer';
import {store} from '../store';
const dispatch = store.dispatch;
export const datasend = data => {
  dispatch(login(data));
};

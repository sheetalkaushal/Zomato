import {configureStore} from '@reduxjs/toolkit';
import Reducer, { addcarddata } from './reducers/Reducer';
export const store = configureStore({
  reducer: {
    status: Reducer,
  },
});
  
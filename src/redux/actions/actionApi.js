import axios from 'axios';
import {DeleteApi, GetApi, PostApi} from '../../Screens/utilis/utilis';
import {
  GET_ALL_CARTS,
  GET_ALL_PRODUCTS,
  POST_ALL_PRODUCTS,
} from '../../config/urls';
export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    GetApi(GET_ALL_PRODUCTS)
      .then(res => {
        return resolve(res);
      })
      .catch(er => {
        return reject(er);
      });
  });
};
export const getAllCart = () => {
  return new Promise((resolve, reject) => {
    GetApi(GET_ALL_CARTS)
      .then(res => {
        return resolve(res);
      })
      .catch(er => {
        return reject(er);
      });
  });
};
export const postAllProducts = data => {
  return new Promise((resolve, reject) => {
    PostApi(POST_ALL_PRODUCTS, data)
      .then(res => {
        console.log(res, 'res>>>>');
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
};
export const Deletedata = (url, data, header = {}) => {
  return new Promise((resolve, reject) => {
    DeleteApi(url, data, header)
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(er);
      });
  });
};

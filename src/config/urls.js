export const BSE_URL = 'https://fakestoreapi.com';

const getApiUrl = endpoint => BSE_URL + endpoint;
export const GET_ALL_PRODUCTS = getApiUrl('/products');
export const GET_ALL_CARTS = getApiUrl('/carts');

// postApi
export const POST_ALL_PRODUCTS = getApiUrl('/products')
export const POST_ALL_CARTS = getApiUrl('/carts')

import { ADD_TO_CART, ADD_TO_WISHLIST, LOAD_DATA, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes/ActionTypes"

export const loadProducts = data => {
  return {
    type: LOAD_DATA,
    payload: data
  }
}
export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload:product
  };
};
export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload:product
  };
};
export const addToWishList = product => {
  return {
    type: ADD_TO_WISHLIST,
    payload:product
  };
};
export const removeFromWishList = product => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload:product
  };
};
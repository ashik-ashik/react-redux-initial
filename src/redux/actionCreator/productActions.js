import {
  ADD_CONTENT,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  GET_CONTENT,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  DELETE_CONTENT,
  LOADER,
  ERROR,
  RECENT_VIEWS,
  GET_SIGLE_CONTENT,
  UPDATE_CONTENT
} from "../ActionTypes/ActionTypes"

// fetc requests
export const loadProducts = data => {
  return {
    type: GET_CONTENT,
    payload: data
  }
}
export const loadSingleProduct = data => {
  return {
    type: GET_SIGLE_CONTENT,
    payload: data
  }
}
export const addProduct = data => {
  return {
    type: ADD_CONTENT,
    payload: data
  }
}
export const editProduct = data => {
  return {
    type: UPDATE_CONTENT,
    payload: data
  }
}
export const removeProduct = id => {
  return {
    type: DELETE_CONTENT,
    payload: id
  }
};

// cart
export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};
export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
};
export const addToWishList = product => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product
  };
};
export const removeFromWishList = product => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product
  };
};

export const recentViews = product => {
  return {
    type: RECENT_VIEWS,
    payload: product
  };
};

// loader and error
export const loader = () => {
  return {
    type: LOADER
  }
}
export const errorDisplay = (error) => {
  return {
    type: ERROR,
    payload: error
  }
}
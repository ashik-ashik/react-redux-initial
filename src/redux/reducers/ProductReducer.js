import { ADD_TO_CART, ADD_TO_WISHLIST, CART_MODAL, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes/ActionTypes";

const initialState = {
  cart : [],
  wishList:[],
  cartModal:false,
  cartMessage:''
};

const productReducer = (state = initialState, action) => {
  const isSelected = state.cart.find(product => product.key === action.payload.key);
  const oldProducts = state.cart.filter(product => product.key !== action.payload.key);
  switch(action.type){
    case ADD_TO_CART:
      if(isSelected){
        isSelected.quantity= isSelected.quantity + 1;
        return {
          ...state,
          cart:[...oldProducts, isSelected],
          cartModal: true,          
          cartMessage:'Product already added to Cart!',
        }        
      }
      return{
        ...state,
        cartModal: true,
        cartMessage:'Product added to Cart!',
        cart : [...state.cart, {...action.payload, quantity:1}]
      };
      case CART_MODAL:
        return{
          ...state,
          cartModal: action.payload,
        }
    case REMOVE_FROM_CART:
      return{
        ...state,
        cart : oldProducts
      };
    case ADD_TO_WISHLIST:
      return{
        ...state,
        wishList : [...state.wishList, action.payload]
      };
    case REMOVE_FROM_WISHLIST:
      return{
        ...state,
        wishList : state.wishList.filter(product => product.key !== action.payload.key)
      };
    default:
      return state;
  }
}

export default productReducer;
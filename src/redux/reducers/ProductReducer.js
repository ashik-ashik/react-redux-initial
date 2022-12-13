import {
  ADD_CONTENT,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  CART_MODAL,
  GET_CONTENT,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  DELETE_CONTENT,
  LOADER,
  ERROR,
  RECENT_VIEWS,
  GET_SIGLE_CONTENT,
  UPDATE_CONTENT
} from "../ActionTypes/ActionTypes";

const initialState = {
  products: [],
  cart: [],
  wishList: [],
  cartModal: false,
  cartMessage: '',
  loader: true,
  error: '',
  recentView: [],
  singleProduct:{},
  productUpdated : false
};

const productReducer = (state = initialState, action) => {
  const isSelected = state.cart.find(product => product._id === action.payload._id);
  const oldProducts = state.cart.filter(product => product._id !== action.payload._id);
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loader: !state.loader
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
          loader: false
      };
    case GET_CONTENT:
      return {
        ...state,
        products: action.payload,
          loader: false,
          error: '',
          productUpdated: false
      };
    case GET_SIGLE_CONTENT:
      return {
        ...state,
        singleProduct: action.payload,
          loader: false,
          error: ''
      };
    case ADD_CONTENT:
      return {
        ...state,
        products: [action.payload, ...state.products]

      };
    case UPDATE_CONTENT:
      // const x = state.products
      return {
        ...state,
        productUpdated: true

      };
    case DELETE_CONTENT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)

      }
      case ADD_TO_CART:
        if (isSelected) {
          isSelected.quantity = isSelected.quantity + 1;
          return {
            ...state,
            cart: [...oldProducts, isSelected],
            cartModal: true,
            cartMessage: 'Product already added to Cart!',
          }
        }
        return {
          ...state,
          cartModal: true,
            cartMessage: 'Product added to Cart!',
            cart: [...state.cart, {
              ...action.payload,
              quantity: 1
            }]
        };

      case CART_MODAL:
        return {
          ...state,
          cartModal: action.payload,
        }
        case REMOVE_FROM_CART:
          return {
            ...state,
            cart: oldProducts
          };
        case ADD_TO_WISHLIST:
          return {
            ...state,
            wishList: [...state.wishList, action.payload]
          };
        case REMOVE_FROM_WISHLIST:
          return {
            ...state,
            wishList: state.wishList.filter(product => product._id !== action.payload._id)
          };
        case RECENT_VIEWS:
          if (state.recentView.find(pro => pro._id === action.payload._id)) {
            return {
              ...state,
            }
          }
          return {
            ...state,
            recentView: [...state.recentView, action.payload]
          }
          default:
            return state;
  }
}

export default productReducer;
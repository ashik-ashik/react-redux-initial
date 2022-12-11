import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  cart: productReducer,
});

export default rootReducer;
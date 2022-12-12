import { combineReducers } from "redux";
import FilterReducer from "./FilterReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filter: FilterReducer
});

export default rootReducer;
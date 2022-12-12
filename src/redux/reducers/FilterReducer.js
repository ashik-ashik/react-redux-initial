import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../ActionTypes/ActionTypes";

const initialState = {
  filters : {
    brands : [],
    stock : false
  },
  keywords:''
};

const FilterReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_CATEGORY:
      if(!state.filters.brands.includes(action.payload)){
        return{
          ...state,
          filters : {
            ...state.filters,
            brands : [...state.filters.brands, action.payload]
          }
        };
      }else{
        return{
          ...state,
          filters : {
            ...state.filters,
            brands : state.filters.brands.filter(brand => brand !== action.payload) 
          }
        };
      };

    case TOGGLE_STOCK :
      return {
        ...state,
        filters : {
          ...state.filters,
          stock : !state.filters.stock
        }
      };
    default :
    return state;
  }
};

export default FilterReducer;
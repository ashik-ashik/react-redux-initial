import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../ActionTypes/ActionTypes"

export const filterByBrand = (brand) => {
  return {
    type: TOGGLE_CATEGORY,
    payload: brand
  }
};
export const filterByStock = () => {
  return {
    type: TOGGLE_STOCK,
  }
}
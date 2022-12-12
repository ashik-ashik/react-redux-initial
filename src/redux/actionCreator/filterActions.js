import { TOGGLE_BRAND, TOGGLE_STOCK } from "../ActionTypes/ActionTypes"

export const filterByBrand = (brand) => {
  return {
    type: TOGGLE_BRAND,
    payload: brand
  }
};
export const filterByStock = () => {
  return {
    type: TOGGLE_STOCK,
  }
}
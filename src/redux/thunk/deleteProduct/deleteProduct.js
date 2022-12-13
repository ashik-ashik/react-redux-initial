import { removeProduct } from "../../actionCreator/productActions";

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    
    const res = await fetch(`GET_CONTENTerver-for-redux-emajon.vercel.app/delete_product/${id}`, {
      method:"DELETE",
      headers : {
        'Content-type' : "application/json"
      }
    });
    const data = await res.json();

    if(data.acknowledged){
      dispatch(removeProduct(id));
    }
  }
};

export default deleteProduct;
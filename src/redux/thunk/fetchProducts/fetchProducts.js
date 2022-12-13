import { errorDisplay, loader, loadProducts, loadSingleProduct } from "../../actionCreator/productActions";

const fetchProducts = (id) => {
  return async(dispatch, getState) => {
    dispatch(loader());
    try{
      //server-for-redux-emajon.vercel.app
      const res = await fetch(`https://server-for-redux-emajon.vercel.app/products`);
  
      const data = await res.json();
      if(data.length){
        dispatch(loadProducts(data));
      }else{
      }
      
    } catch (error){
      dispatch(errorDisplay('OOOOPs!! Failed to fetch Data!!!'));
      // console.log(error);
    }
  }
}
export const fetchSingleProduct = (id) => {
  return async(dispatch, getState) => {
    dispatch(loader());
    try{
      //server-for-redux-emajon.vercel.app
      const res = await fetch(`https://server-for-redux-emajon.vercel.app/product/${id}`);
  
      const data = await res.json();
      if(data._id){
        dispatch(loadSingleProduct(data));
      }else{
      }
      
    } catch (error){
      dispatch(errorDisplay('OOOOPs!! Failed to fetch Data!!!'));
      // console.log(error);
    }
  }
}

export default fetchProducts;
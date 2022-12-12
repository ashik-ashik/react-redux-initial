import { errorDisplay, loader, loadProducts } from "../../actionCreator/productActions";

const fetchProducts = (id) => {
  return async(dispatch, getState) => {
    dispatch(loader());
    try{
      //server-for-redux-emajon.vercel.app
      const res = await fetch(`https://server-for-redux-emajon.vercel.app/products${id ? ('/'+id) : ''}`).catch(err => {
        dispatch(errorDisplay(err.message));
      });
  
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

export default fetchProducts;
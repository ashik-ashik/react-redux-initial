import { loadProducts } from "../../actionCreator/productActions";

const fetchProducts = () => {
  return async(dispatch, getState) => {
    try{
      const res = await fetch('http://localhost:5000/products');
        const data = await res.json();
        if(data.length){
          dispatch(loadProducts(data));
        }
      
    } catch (error){
      console.log(error.message);
    }
  }
}

export default fetchProducts;
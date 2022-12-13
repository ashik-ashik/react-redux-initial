import { addProduct, editProduct, errorDisplay, loader } from "../../actionCreator/productActions";

const postProduct = (product) => {
  return async(dispatch, getState) => {
     dispatch(loader());
     try{
       const res = await fetch(`https://server-for-redux-emajon.vercel.app/add_product`, {
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },
         body: JSON.stringify(product)
       });
       const data = await res.json();
       if(data.acknowledged){
         dispatch(addProduct({
           _id: data.insertedId,
           ...product
         }));
       };
     }catch(err){
      dispatch(errorDisplay('Failed to Possst!!!'));
     }
  };
};

export const updateProduct = (product, id) => {
  return async(dispatch, getState) => {
     dispatch(loader());
     try{
       const res = await fetch(`https://server-for-redux-emajon.vercel.app/edit_product/${id}`, {
         method:"PUT",
         headers:{
           'Content-Type':"application/json"
         },
         body: JSON.stringify(product)
       });
       const data = await res.json();
       if(data.acknowledged){
         dispatch(editProduct(product));
       };
     }catch(err){
      dispatch(errorDisplay('Failed to Possst!!!'));
     }
  };
};

export default postProduct;
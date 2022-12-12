import { addProduct, errorDisplay, loader } from "../../actionCreator/productActions";

const postProduct = (product) => {
  return async(dispatch, getState) => {
     dispatch(loader());
     try{
       const res = await fetch(`https://server-for-redux-emajon.vercel.app/ADD_CONTENT`, {
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

export default postProduct;
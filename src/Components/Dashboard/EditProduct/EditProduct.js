import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../../redux/thunk/fetchProducts/fetchProducts';
import { updateProduct } from '../../../redux/thunk/postProduct/postProduct';

const EditProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const state = useSelector(store => store.products)
  const {register, handleSubmit, setValue, reset} = useForm();
  const navigate = useNavigate();
  // console.log(state.products);
  
  useEffect(()=>{
    if(state.productUpdated){
      navigate('/dashboard/product_list');
    }
  },[state.productUpdated, navigate])

  useEffect(()=>{
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  setValue("name", state?.singleProduct?.name);
  setValue("img", state?.singleProduct?.img);
  setValue("price", state?.singleProduct?.price);
  setValue("stock", state?.singleProduct?.stock);
  setValue("category", state?.singleProduct?.category);
  setValue("seller", state?.singleProduct?.seller);
  setValue("star", state?.singleProduct?.star);
  setValue("starCount", state?.singleProduct?.starCount);
  const getFormData = data => {
    dispatch(updateProduct(data, id));
  }
  return (
    <div className='add-product'>
      <div className="section-title">
        <h2>Edit Product <span style={{color:"green"}}>[{state?.singleProduct?._id}]</span></h2>
      </div>
      <form onSubmit={handleSubmit(getFormData)}>
        <div className="input-group">
          <label htmlFor="name">Product Name:</label>
          <input {...register('name')} type="text" id='name' placeholder='Product Name' />
        </div>
        <div className="input-group">
          <label htmlFor="img">Product Name:</label>
          <input {...register('img')} type="text" id='img' placeholder='Product image Link' />
        </div>

        <div className="input-grid">
          <div className="input-group">
            <label htmlFor="price">Price $</label>
            <input {...register('price')} type="text" id='price' inputMode='number' placeholder='Price' />
          </div>
          <div className="input-group">
            <label htmlFor="stock">Stock</label>
            <input {...register('stock')} min={1} type="number" id="stock" inputMode='number' placeholder='Stock' />
          </div>
        </div>

        <div className="input-grid">
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <select {...register('category')} id="category">
              <option value="">Select Category</option>
              <option value="laptop">Laptop</option>
              <option value="camera">Camera</option>
              <option value="android">Android</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="seller">Seller</label>
            <input {...register('seller')} type="text" id="seller" placeholder='Seller' />
          </div>
        </div>

        <div className="input-grid">
          <div className="input-group">
            <label htmlFor="star">Star</label>
            <input {...register('star')} type="text" id="star" placeholder='Star' />
          </div>
          <div className="input-group">
            <label htmlFor="starCount">Star Count</label>
            <input {...register('starCount')} type="number" id="starCount" placeholder='Star Count' />
          </div>
        </div>


        <div className="input-grid">
          <button type='submit'>Update</button>
        </div>

      </form>
    </div>
  );
};

export default EditProduct;
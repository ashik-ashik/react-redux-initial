import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddProducts.scss";

const AddProducts = () => {
  const {register, handleSubmit, reset} = useForm();
  const addProduct = data => {

  }

  return (
    <div className='add-product'>
      <div className="section-title">
        <h2>Add New Product</h2>
      </div>
      <form onSubmit={handleSubmit(addProduct)}>
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
            <input {...register('stock')} min={1} type="text" id="stock" inputMode='number' placeholder='Stock' />
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
            <input {...register('starCount')} type="text" id="starCount" placeholder='Star Count' />
          </div>
        </div>


        <div className="input-grid">
          <button className='clear-btn' onClick={()=>reset()}>Clear</button>
          <button type='submit'>ADD</button>
        </div>

      </form>
    </div>
  );
};

export default AddProducts;
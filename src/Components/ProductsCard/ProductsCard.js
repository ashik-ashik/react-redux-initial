import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../redux/ActionTypes/ActionTypes';
import './ProductsCard.scss';

const ProductsCard = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className='product-cart'>
      <div className="image">
        <img src={product?.img} alt={product?.name} />
      </div>
      <div className="content">
        <h4>{product?.name.split('').splice(0,50)}</h4>
        <p><span>Seller: {product?.seller}</span> || <span>Category: {product?.category}</span></p>
        <h5>$ {product?.price}</h5>
        <div className="actions">
          <button onClick={()=>dispatch({type:ADD_TO_CART, payload:product})} className="add-to-cart">Add to cart</button>
          <button className="wish-list">Wish List</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
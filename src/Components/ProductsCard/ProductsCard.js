import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, addToWishList, removeFromCart, removeFromWishList } from '../../redux/actionCreator/productActions';
import './ProductsCard.scss';

const ProductsCard = ({product}) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  return (
    <div className='product-cart'>
     {pathname.includes('cart') && <div className="qty-badge">{product.quantity}</div>}
      <div className="image">
        <img src={product?.img} alt={product?.name} />
      </div>
      <div className="content">
        <h4>{product?.name.split('').splice(0,50)}</h4>
        <p><span>Seller: {product?.seller}</span> || <span>Category: {product?.category.toUpperCase()}</span></p>
        <h5>$ {product?.price}</h5>
        <div className="actions">
          {!pathname.includes('cart') && !pathname.includes('wish-list') && <>
            <button onClick={()=>dispatch(addToCart(product))} className="add-to-cart">Add to cart</button>
          </>}
          {pathname.includes('wish-list') && <>
            <button onClick={()=>dispatch(()=> addToCart(product))} className="add-to-cart">Add to cart</button>
          </>}
          {!pathname.includes('cart') && !pathname.includes('wish-list') && <>
            <button onClick={()=> dispatch(addToWishList(product))} className="wish-list">Wish List</button>
          </>}
          {pathname.includes('cart') && <>
            <button onClick={()=>dispatch(removeFromCart(product))} className="remove-cart">Remove cart</button>
          </>
          }
          {pathname.includes('wish-list') && <>
            <button onClick={()=>dispatch(removeFromWishList(product))} className="remove-cart">Remove</button>
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
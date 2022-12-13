import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../redux/thunk/fetchProducts/fetchProducts';
import './SingleProduct.scss';
import {FaRegHeart} from "react-icons/fa";
import {BsCartPlusFill} from "react-icons/bs";
import { addToCart, addToWishList } from '../../redux/actionCreator/productActions';

const SingleProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const state = useSelector(store => store);
  useEffect(()=>{
    dispatch(fetchSingleProduct(id));
  },[id, dispatch]);
  const product = state.products.singleProduct;
  // const product = state.products.products.find(pro=> pro._id === id);
  if(state.products.loader){
    return <div className='loader'><h3>Loading........</h3></div>
  };
  if(state.products.error){
    return <div className='loader'><h3>{state.products.error}</h3></div>
  };
  return (
    <article className='single-product'>
      <section className="container">
        <div className="single-product-container">
          <div className="product-grid">
            <div className="product-image">
              <img src={product?.img} alt={product?.name} />
            </div>
            <div className="products-content">
              <h3>{product?.name}</h3>
              <h4>$ {product?.price}</h4>
              <p><strong>Ratting: </strong><span>{product?.star}</span> <small>({product?.starCount})</small></p>
              <p><strong>Category: </strong>{product?.category}</p>
              <p className={product?.stock > 0 ? "in-stock" : "stock-out"}>
                {product?.stock > 0 ? <span>{product?.stock} items in Stock</span> : 'Stock Out'}
              </p>
              <p><strong>Seller: </strong> {product?.seller}</p>
              <div className="grid">
                <button className="add-to-cart" onClick={()=> dispatch(addToCart(product))}>
                  <BsCartPlusFill size={25} />
                </button>
                <button className="add-to-wislist" onClick={()=> dispatch(addToWishList(product))}>
                  <FaRegHeart size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SingleProduct;
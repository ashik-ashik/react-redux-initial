import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchProducts from '../../redux/thunk/fetchProducts/fetchProducts';
import './SingleProduct.scss';

const SingleProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const state = useSelector(store => store);
  useEffect(()=>{
    dispatch(fetchProducts(id))
  },[id, dispatch]);
  const [product] = state.products.products;
  return (
    <article className='single-product'>
      <section className="container">
        Single product
      </section>
    </article>
  );
};

export default SingleProduct;
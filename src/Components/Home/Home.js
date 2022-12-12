import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../redux/thunk/fetchProducts/fetchProducts';
import CartModal from '../Common/CartModal/CartModal';
import Filters from '../Common/Filters/Filters';
import Products from '../Products/Products';
import "./Home.scss";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch]);

  const state = useSelector(state=>state);
  const {brands, stock} = state.filter.filters;
  const products = state.products.products;

  let content;
  if(products.length){
    content = products;
  };
  if(products.length && (stock || brands.length)){
    content = products
      .filter(product => {
        if(stock){
          return product.stock > 0;
        }
        return product;
      })
      .filter(product => {
        if(brands.length){
          return brands.includes(product.category)
        }
        return product;
      })
  };

  return (
    <article>
      
      {
        state.products.cartModal && <CartModal />
      }
      <Filters />
      <section className="container">
        <h2>Products:</h2>
        <Products products={content} />
      </section>
    </article>
  );
};

export default Home;
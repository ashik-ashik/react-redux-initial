import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartModal from '../Common/CartModal/CartModal';
import Filters from '../Common/Filters/Filters';
import Products from '../Products/Products';
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('./products.JSON')
    .then(res => res.json())
    .then(result => setProducts(result))
    .catch((error)=>{
      setProducts(error);
    })
  },[]);
  const state = useSelector(state=>state.cart);
  console.log(state.cart);
  return (
    <article>
      
      {
        state.cartModal && <CartModal />
      }
      <Filters />
      <section className="container">
        <h2>Products:</h2>
        <Products products={products} />
      </section>
    </article>
  );
};

export default Home;
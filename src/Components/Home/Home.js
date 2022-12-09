import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const state = useSelector(state=>state);
  console.log(state);
  return (
    <article>
      <section className="container">
        <h2>Products:</h2>
        <Products products={products} />
      </section>
    </article>
  );
};

export default Home;
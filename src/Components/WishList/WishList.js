import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../Products/Products';
import "./WishList.scss";

const WishList = () => {
  const wishList = useSelector(state=> state.products.wishList)
  return (
    <article>
      <section className="container">
        Wish List
        <Products products={wishList} />
      </section>
    </article>
  );
};

export default WishList;
import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../Products/Products';
import "./Cart.scss";

const Cart = () => {
  const cart = useSelector(state=> state.products.cart);
  let content = cart.sort((a,b)=> a.cartPosition - b.cartPosition)
  return (
    <article>
      <section className="container">
        Cart
        <Products products={content} />
      </section>
    </article>
  );
};

export default Cart;
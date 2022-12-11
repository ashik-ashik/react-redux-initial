import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../Products/Products';
import "./Cart.scss";

const Cart = () => {
  const cart = useSelector(state=> state.cart.cart);
  console.log(cart);
  return (
    <article>
      <section className="container">
        Cart
        <Products products={cart} />
      </section>
    </article>
  );
};

export default Cart;
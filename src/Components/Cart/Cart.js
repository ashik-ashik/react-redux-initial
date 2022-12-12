import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import "./Cart.scss";

const Cart = () => {
  const cart = useSelector(state=> state.products.cart);
  let content = cart.sort((a,b)=> a.cartPosition - b.cartPosition)
  return (
    <article className='cart'>
      <section className="container">
        {
          content?.length > 0 ? <>
            <h1>Your Cart Items:</h1>            
            <Products products={content} />
          </> : <>
          <div className="no-cart-item">
            <h3>OOOPS!! There is cart item found!</h3>
            <p>Back to <Link to='/'>home</Link> and add products.</p>
          </div>
          </>
        }
        
      </section>
    </article>
  );
};

export default Cart;
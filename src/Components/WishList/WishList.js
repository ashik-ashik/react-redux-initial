import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import "./WishList.scss";

const WishList = () => {
  const wishList = useSelector(state=> state.products.wishList)
  return (
    <article className='wishlist'>
      <section className="container">
        {
          wishList?.length > 0 ? <>
            <h1>Your Favourite Products:</h1>
            <Products products={wishList} />
          </> : <>
            <div className="no-wishlist-items">
              <h3>OOOPS!! There is nothing found!</h3>
              <p>Back to <Link to='/'>home</Link> and find your favourite.</p>
            </div>
          </>
        }
      </section>
    </article>
  );
};

export default WishList;
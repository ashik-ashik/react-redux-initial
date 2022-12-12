import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../Products/Products';
import "./RecentlyViews.scss";

const RecentlyViews = () => {
  const products = useSelector(store => store.products.recentView);
  return (
    <article className='recent-view'>
      <section className="container">
        {
          products?.length ? <>
          <h2>You have Recently visit these:</h2>
          <Products products={products} /> 
          </> : <>
            <p>No recent views.</p>
          </>
        }
      </section>
    </article>
  );
};

export default RecentlyViews;
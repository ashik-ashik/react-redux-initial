import React from 'react';
import { useSelector } from 'react-redux';
import './DashboardHome.scss';

const DashboardDefault = () => {
  const products = useSelector(store=> store.products.products);
  const categories = products.filter((product, i) => products.findIndex(item => item?.category === product?.category) === i);
  const seller = products.filter((product, i) => products.findIndex(item => item?.seller === product?.seller) === i);

  const sum = (prev, current) => {
    return prev + current.star;
  };
  const totalStar = products?.reduce(sum, 0);


  return (
    <div className='dashboard-default'>

      <div className="section-title">
        <h2>Dashboard Overview</h2>
      </div>

      <div className="dashboard-overview">
        <div className="products-count item">
          <h3>{products?.length}</h3>
          <p>Total number of products.</p>
        </div>
        <div className="in-stock-count item">
          <h3>{products?.filter(product=> product.stock >0)?.length}</h3>
          <p>In Stock products.</p>
        </div>
        <div className="stock-out-count item">
          <h3>{products?.filter(product=> product.stock ===0)?.length}</h3>
          <p>Stock Out products.</p>
        </div>
        {
          categories?.map((product, i)=> <div key={i} className={`${product?.category} item`}>
            <h3>{products.filter(pro=> pro.category === product.category).length}</h3>
            <p>Products in {product.category?.toUpperCase()}.</p>
          </div>)
        }
        <div className="stock-out-count item">
          <h3>{seller?.length}</h3>
          <p>Unique Sellers.</p>
        </div>
        <div className="average-roduct item">
          <h3>{(totalStar/products.length)?.toFixed(2)}</h3>
          <p>Average Product Ratings.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardDefault;
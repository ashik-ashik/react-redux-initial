import React from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import './Products.scss';

const Products = ({products}) => {
  return (
    <div className='product-container'>
      {
        products?.map((product,i)=><ProductsCard key={i} product={product} />)
      }
      
    </div>
  );
};

export default Products;
import React from 'react';
import { useSelector } from 'react-redux';
import './Products.scss';

const Products = () => {
  const products = useSelector(store=> store.products.products);

  return (
    <div className='dashboard-products'>
      <div className="section-title">
      <h2>All Products</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Seller</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product,i) => <tr key={i} className={product.stock >0 ? '' : 'stock-out-product'}>
              <td><input type="checkbox" name="" id="" /></td>
              <td><img src={product.img} alt={product.name} /></td>
              <td>{product.name.split('').splice(0,30)}...</td>
              <td>{product.category.toUpperCase()}</td>
              <td><span className={product.stock >0 ? 'in-stock' : 'stock-out'}>{product.stock > 0 ? 'In Stock':'Stock Out'}</span></td>
              <td><span className="price">${product.price}</span></td>
              <td>{product.seller}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Products;
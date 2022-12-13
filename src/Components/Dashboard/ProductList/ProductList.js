import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.scss';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import deleteProduct from '../../../redux/thunk/deleteProduct/deleteProduct';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const state = useSelector(store=> store);
  const products = state.products.products;

  const dispatch = useDispatch();
  let content = null;
  if(state.products.loader){
    content = {loading:'Loading....'}
  }
  if(state.products.error){
    content = {error: state.products.error}
  }

  if(content){
    return <div className='loader'>
      <h2>{content.loading || content.error}</h2>
    </div>
  }

  return (
    <div className='dashboard-products'>
      <div className="section-title">
      <h2>All Products</h2>
      </div>
      <div className="product-table">
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
              <th>Action</th>
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
                <td>
                  <button className='delete-button' onClick={()=> dispatch(deleteProduct(product._id))}><RiDeleteBin5Fill size={25}/></button>
                  <Link to={`/edit/${product._id}`}><button className='edit-button'><FiEdit size={25}/></button></Link>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
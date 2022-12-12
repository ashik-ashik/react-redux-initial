import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import fetchProducts from '../../../redux/thunk/fetchProducts/fetchProducts';
import "./DashboardHome.scss";

const DashboardHome = () => {
  const {pathname} = useLocation();
  const products = useSelector(store => store.products.products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);
  // console.log(products);
  return (
    <article className='dashboard-home'>
      <aside className='dashboard-sidebar'>
        <h4>Dashboard</h4>
        <ul className="sidebar">
          <li><Link to='/'>Back to Home</Link></li>
          <li><Link className={pathname.split('/').length === 2 ? 'active':'link'} to='/dashboard'>Dashboard Home</Link></li>
          <li><NavLink to='product_list'>Product List</NavLink></li>
          <li><NavLink to='ADD_CONTENT'>Add Product</NavLink></li>
        </ul>
      </aside>
      <section className='dashboard-content'>
        <Outlet />
      </section>
    </article>
  );
};

export default DashboardHome;
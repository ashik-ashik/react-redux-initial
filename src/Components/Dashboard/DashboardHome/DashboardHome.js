import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import fetchProducts from '../../../redux/thunk/fetchProducts/fetchProducts';
import "./DashboardHome.scss";
import {RiHome4Fill, RiListCheck2} from 'react-icons/ri';
import {BsArrowUpLeftCircleFill} from 'react-icons/bs';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';

const DashboardHome = () => {
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const [isDashboardMenu, setDashboardMenu] = useState(false);
  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);
  // console.log(products);
  return (
    <article className='dashboard-home'>
      <aside className={`dashboard-sidebar ${isDashboardMenu ? 'dashboard-mobile-sidebar' : ''}`}>
        <div className={`dashboard-menu-toggler`} onClick={()=>setDashboardMenu(!isDashboardMenu)}>
          {!isDashboardMenu ? <FaAngleRight size={25} />: <FaAngleLeft size={25} />}
        </div>
        <h4>Dashboard</h4>
        <ul className="sidebar">
          <li><Link to='/'><BsArrowUpLeftCircleFill size={20} /> <span>Back to Home</span></Link></li>
          <li><Link className={pathname.split('/').length === 2 ? 'active':'link'} to='/dashboard'> <RiHome4Fill size={20} /> <span>Dashboard Home</span></Link></li>
          <li><NavLink to='product_list'><RiListCheck2 size={20} /> <span>Product List</span></NavLink></li>
          <li><NavLink to='add_product'><AiOutlineAppstoreAdd size={20} /> <span>Add Product</span></NavLink></li>
        </ul>
      </aside>
      <section className='dashboard-content'>
        <Outlet />
      </section>
    </article>
  );
};

export default DashboardHome;
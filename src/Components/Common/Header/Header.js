import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  const cart = useSelector(state=> state.products.cart);
  return (
    <header className='header'>
      <nav className='container'>
        <div className="logo">
          <h4>Logo</h4>
        </div>
        <ul className='menu'>
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/cart" >Cart <sup>{cart.length >0 && cart.length}</sup></NavLink></li>
          <li><NavLink to="/wish-list" >Wish List</NavLink></li>
          <li><NavLink to="/history" >RecentViews</NavLink></li>
          <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
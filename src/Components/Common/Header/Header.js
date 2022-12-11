import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  const cart = useSelector(state=> state.cart.cart);
  return (
    <header className='header'>
      <nav className='container'>
        <div className="logo">
          <h4>Logo</h4>
        </div>
        <ul className='menu'>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/cart" >Cart <sup>{cart.length >0 && cart.length}</sup></Link></li>
          <li><Link to="/wish-list" >Wish List</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
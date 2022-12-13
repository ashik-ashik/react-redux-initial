import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import "./Header.scss";

const Header = () => {
  const cart = useSelector(state=> state.products.cart);
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <header className='header'>
      <nav className='container'>
        <div className="logo">
          <h4>Logo</h4>
        </div>
        <div className="menu-container">
          <div className="toggler">
            <AiOutlineAlignRight size={20} onClick={()=>setShowMenu(true)} />
          </div>
          <ul className={`menu ${isShowMenu ? 'menu-active' : null}`}>
            <li><span className='close'>
              <FaTimesCircle size={25} onClick={()=>setShowMenu(false)} />
            </span></li>
            <li><h3>Menu</h3></li>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/cart" >Cart <sup>{cart.length >0 && cart.length}</sup></NavLink></li>
            <li><NavLink to="/wish-list" >Wish List</NavLink></li>
            <li><NavLink to="/history" >RecentViews</NavLink></li>
            <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
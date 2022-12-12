import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByBrand, filterByStock } from '../../../redux/actionCreator/filterActions';
import './Filters.scss';

const Filters = () => {
  const filters = useSelector(state=> state.filter);
  const dispatch = useDispatch();
  const {brands, stock} = filters.filters;
  return (
    <div className="container">
      <div className='filters-container'>
        <ul>
          <li>
            <button onClick={()=>dispatch(filterByStock())} className={`filer-btn ${stock ? 'active' : null}`}>In Stoke</button>
          </li>
          <li>
            <button onClick={()=>dispatch(filterByBrand('camera'))} className={`filer-btn ${brands.includes('camera') ? 'active' : null}`}>Camera</button>
          </li>
          <li>
            <button onClick={()=>dispatch(filterByBrand('laptop'))} className={`filer-btn ${brands.includes('laptop') ? 'active' : null}`}>Laptop</button>
          </li>
          <li>
            <button onClick={()=>dispatch(filterByBrand('android'))} className={`filer-btn ${brands.includes('android') ? 'active' : null}`}>Android</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
import React from 'react';
import './Filters.scss';

const Filters = () => {
  const toggleClassName = (e)=>{
    const buttons = document.getElementsByClassName('filer-btn');
    for(let i =0; i<buttons.length; i++){
      buttons[i].className='filer-btn'
    }
    e.target.classList = 'filer-btn active';
  }
  return (
    <div className="container">
      <div className='filters-container'>
        <ul>
          <li>
            <button onClick={(e)=>{toggleClassName(e);}} className='filer-btn active'>In Stoke</button>
          </li>
          <li>
            <button onClick={(e)=>{toggleClassName(e);}} className='filer-btn'>Camera</button>
          </li>
          <li>
            <button onClick={(e)=>{toggleClassName(e);}} className='filer-btn'>Laptop</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
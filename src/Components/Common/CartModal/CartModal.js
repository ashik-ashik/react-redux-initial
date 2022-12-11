import React from 'react';
import "./CartModal.scss";
import { BiCheckCircle } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { CART_MODAL } from '../../../redux/ActionTypes/ActionTypes';

const CartModal = () => {
  const state = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const closeModal = ()=> {
    setTimeout(()=>{
      dispatch({type: CART_MODAL, payload:false})
    },2000)
  }
  if(state.cartModal){
    closeModal();
  }
  return (
    <div className='cart-modal'>
      <BiCheckCircle size={20} /> <span>{state.cartMessage}</span>
    </div>
  );
};

export default CartModal;
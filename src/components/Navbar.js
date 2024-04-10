import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <div href = 'Link'> JSW Headphone</div>
      </p>
      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar
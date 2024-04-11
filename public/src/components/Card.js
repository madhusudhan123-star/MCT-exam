import React from 'react'
import {AiOutlineMins, AiOutlinePlus, AiOutlineLeft, AiOutLineShopping} from 'react-icons/ai';
import {TiDeleteOutLine} from 'react-icons/ti';
// import toast from 'react-hot-toast';
// import { useStateContext } from '../context/StateContext';
import { AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineMinus } from 'react-icons/ai';


const Card = () => {
  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick="">
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>items</span>
        </button>
        <div className='product-container'>
          {/* {cartItems.length >= 1 && cartItems.map((item) => ( */}
            <div className='product'>
              <img src="" className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>item</h5>
                  <h4>$item</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className='minus' onClick="">
                        <AiOutlineMinus />
                      </span>
                      <span className='num'>item</span>
                      <span className='plus' onClick="">
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button type='button' className='remove-item' onClick="">
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          {/* )} */}
        </div>    
      </div>
    </div>
  )
}

export default Card;
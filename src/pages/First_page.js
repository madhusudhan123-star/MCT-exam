import React from 'react';
import { Product, HeroBanner, FooterBanner } from '../components'; 

const First_page = () => {
  return (
    <div>
        <HeroBanner />
        <div className='products-heading'>
            <h2>Beset Selling Product</h2>
            <p>Speakers of many varitions</p>
        </div>
        <div className='products-container'>
            {['product1', 'product2'].map((pro) => pro)}
        </div>
        <FooterBanner />
    </div>
  )
}

export default First_page
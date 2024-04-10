import React from 'react'
// import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>Best Headphones</p>
        <h3>Buy Headphones</h3>
        <img src="" alt='headphones' className='hero-banner-image' />
        <div>
          <div to="/product/ID">
            <button type='button'>Button Text</button>
          </div>
          <div className='desc'>
          <h5>Description</h5>
          <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
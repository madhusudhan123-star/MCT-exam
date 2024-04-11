import React from 'react'
// import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>T Shirt Casual Cotton Short</p>
        <h3>DANVOUY Womens</h3>
        <img src='https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg' alt='headphones' className='hero-banner-image' />
        <div>
          <div to="/product/ID">
            <button type='button'>Button Text</button>
          </div>
          <div className='desc'>
          <h5>95%Cotton,5%Spandex</h5>
          <p>The fabric is soft and has some stretch</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
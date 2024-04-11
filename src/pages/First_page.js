import React from 'react';
import { Product, HeroBanner, FooterBanner } from '../components'; 
import { fetchFromAPI } from './fetchFromApi';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const First_page = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchFromAPI(`products?limit=25`).then((data) => {
      setData(data);
    });
  }, []);
  if (data === null) {
    return <Loader />;
  }
  console.log(data);
  return (
    <div>
        <HeroBanner />
        <div className='products-heading'>
            <h2>Beset Selling Product</h2>
            <p>Speakers of many varitions</p>
        </div>
        <div>
        <div className="product_list">
          {!data ? null : data.map((item, idx) => <Product key={idx} item={item} />)}
        </div>
        </div>
    </div>
  )
}

export default First_page
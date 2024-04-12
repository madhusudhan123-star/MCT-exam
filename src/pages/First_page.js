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
    <div className="bg-gray-100 min-h-screen">
      <HeroBanner />
      <div className="max-w-7xl flex flex-col items-center mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-f02d34 mb-2">Best Selling Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!data ? null : data.map((item, idx) => <Product key={idx} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default First_page;
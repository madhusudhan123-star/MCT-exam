import React from 'react';
import image from './image.jpg'
import { Link } from 'react-router-dom';
import Category from '../pages/Category';
const FooterBanner = () => {
  return (
    <div className="footer-banner bg-f02d34 text-white bg-red-600 flex items-center justify-between py-4 px-4 md:px-8">
      <div className="banner-text flex flex-col gap-2">
        <h2 className="text-xl font-bold">Summer Sale!  Up to 50% Off</h2>
        <p>Don't miss out on incredible deals on your favorite items. Shop now and save big!</p>
        <Link to={`/categories`} className="bg-red-400 hover:bg-gray-200 text-f02d34 px-4 py-2 rounded-md">
          <button type="button" >Shop Now</button>
        </Link>
      </div>
      <img
        src={image}
        alt="Summer Sale Banner"
        className="w-auto h-20 object-cover rounded-lg md:h-32"
      />
    </div>
  );
};

export default FooterBanner;

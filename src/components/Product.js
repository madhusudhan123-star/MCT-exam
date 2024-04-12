import React from 'react';
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/${item.id}`}>
        <div className="relative h-64">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-white opacity-0 hover:opacity-100">
            <span className="text-lg font-semibold">View Details</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-f02d34 font-bold">${item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
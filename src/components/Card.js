import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, price, link }) => {
  return (
    <div className="card shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          {price && <p className="text-xl font-bold">{price}</p>}
          {link && (
            <Link to={link} className="text-blue-500 hover:underline">
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

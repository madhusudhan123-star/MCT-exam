import React from 'react';
import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const categories = ['Headphones', 'Speakers', 'Earbuds', 'Accessories']; // Replace with your actual categories

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-f02d34 font-bold text-xl mr-4">
              JSW Headphone
            </Link>
            <div className="flex space-x-4">
                <Link
                  to={`/categories`}
                  className="text-gray-600 hover:text-f02d34 transition duration-300"
                >
                  category
                </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-f02d34 transition duration-300"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/account"
              className="text-gray-600 hover:text-f02d34 transition duration-300 mr-4"
            >
              <AiOutlineUser className="text-lg" />
            </Link>
            <button
              type="button"
              className="bg-f02d34 text-white rounded-full p-2 relative hover:bg-red-600 transition duration-300"
            >
              <AiOutlineShopping className="text-lg" />
              <span className="absolute top-0 right-0 bg-white text-f02d34 rounded-full px-1.5 py-0.5 text-xs font-bold">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
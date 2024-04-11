import React from 'react';
import { AiOutlineStar, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../pages/fetchFromApi";
import Loader from "../pages/Loader";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [useid, setUseid] = useState(id);
  const [data, setData] = useState(null);
  const [datas, setDatas] = useState(null);

  const value = (id) => {
    fetchFromAPI(`products/${id}`).then((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    value(useid);
    fetchFromAPI(`products?limit=6`).then((datas) => {
      setDatas(datas);
    });
  }, []);

  if (data === null) {
    return <Loader />;
  }

  const rate = data.rating; // Assuming 'rating' exists in your API response
  const rating_value = data.rating.rate;

  return (
    <div className="product-details container mx-auto px-4 py-16">
      <div className="flex-warp  md:flex justify-between gap-4">
        <div className="w-full md:w-1/2">
          <img
            src={data.image}
            alt={data.title}
            className="w-cover  rounded-lg object-cover shadow-md md:h-[400px]"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 mr-2 flex">
              {(() => {
                const stars = [];
                for (let i = 0; i < Math.round(rating_value); i++) {
                  stars.push(<AiFillStar key={i} />);
                }
                return stars;
              })()}
            </div>
            <p className="text-gray-500">{data.rating.count} Reviews</p>
          </div>
          <p className="text-gray-700 mb-4">{data.description}</p>
          <p className="text-xl font-bold mb-4">${data.price}</p>
          {/* Rest of the code remains the same */}
          <div className="quantity flex items-center">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons flex justify-between mt-4">
            <button type="button" className="add-to-cart bg-f02d34 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <button type="button" className="buy-now bg-white border border-f02d34 text-f02d34 px-4 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

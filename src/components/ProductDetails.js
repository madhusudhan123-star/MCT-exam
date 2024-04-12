import React from 'react';
import { AiOutlineStar, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState, useEffect, useContext  } from "react";
import { fetchFromAPI } from "../pages/fetchFromApi";
import Loader from "../pages/Loader";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [useid, setUseid] = useState(id);
  const [data, setData] = useState(null);
  const [datas, setDatas] = useState(null);
  const [quantity, setQuantity] = useState(1);



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
  }, [id]);

  if (data === null) {
    return <Loader />;
  }

  const rate = data.rating; // Assuming 'rating' exists in your API response
  const rating_value = data.rating.rate;
  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value, 10)); 
  
    // Update state with the new quantity, ensuring it's not less than 1
    setQuantity(newQuantity);
  };
  return (
    <div className="product-details mt-24 mb-8 container mx-auto px-4 py-16">
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
          <div className="quantity flex items-center select-none">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex">
              <span className="minus border-r-2 border-black">
                <AiOutlineMinus onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
              </span>
              <span className="">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={1} // Set minimum quantity to 1
                  disabled={quantity === 1} // Disable input when quantity is 1
                  className="w-10 overflow-hidden"
                />
              </span>
              <span className="plus border-l-2 border-black">
                <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} />
              </span>
            </p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;

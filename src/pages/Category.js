import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "./fetchFromApi";
import { Product } from "../components";
import Loader from './Loader';

const Category = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState();
  const [alldata, setAlldata] = useState(null);

  useEffect(() => {
    if (!category) {
      fetchFromAPI(`products?limit=6`).then((alldata) => {
        setAlldata(alldata);
      });
    } else {
      setAlldata();
    }
    fetchFromAPI(`products/category/${items}`).then((data) => {
      setData(data);
    });
    fetchFromAPI(`products/categories`).then((category) => {
      setCategory(category);
    });
  }, [items]);

  if (data === null || category === null || alldata === null) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 mt-10 min-h-screen">
      <div className="max-w-7xl flex flex-col items-center mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {!category ? null : category.map((item, idx) => (
            <button
              onClick={() => setItems(item)}
              className={`px-4 py-2 rounded-full text-gray-600 hover:bg-f02d34 hover:text-white transition duration-300 ${items === item ? 'bg-f02d34 text-white' : ''}`}
              key={idx}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!data ? null : data.map((item, idx) => <Product key={idx} item={item} />)}
          {!data ? null : !alldata ? null : alldata.map((item, idx) => <Product key={idx} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Category;
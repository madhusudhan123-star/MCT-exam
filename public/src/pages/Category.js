import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "./fetchFromApi";
import { Product } from "../components";
// import { Loader } from "./Loader";
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
  if (data === null) {
    return <Loader />;
  }
  if (category === null) {
    return <Loader />;
  }
  if (alldata === null) {
    return <Loader />;
  }
  return (
    <div className="pt-24">
      <div className="flex justify-center gap-7 pt-20">
        {!category
          ? null
          : category.map((item, idx) => (
              <button onClick={() => setItems(item)} className="" key={idx}>
                {item}
              </button>
            ))}
      </div>
      <div className="flex flex-wrap">
        {!data ? null : data.map((item, idx) => <Product key={idx} item={item} />)}
        {!data
          ? null
          : !alldata
          ? null
          : alldata.map((item, idx) => <Product key={idx} item={item} />)}
      </div>
    </div>
  );
};

export default Category;
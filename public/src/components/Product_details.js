import React from "react";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../pages/fetchFromApi";
import  Loader  from "../pages/Loader";
import { useParams, Link } from "react-router-dom";

export const Product_details = () => {
  const { id } = useParams();
  const [useid, setUseid] = useState(id);
  const [data, setData] = useState(null);
  const [datas, setDatas] = useState(null);
  const [ids, setIds] = useState(null);
  const [dummy, setDummy] = useState(null);

  const value = (id) => {
    fetchFromAPI(`products/${id}`).then((data) => {
      setIds(data);
    });
  };
  useEffect(() => {
    fetchFromAPI(`products/${useid}`).then((data) => {
      setData(data);
    });
    fetchFromAPI(`products?limit=6`).then((datas) => {
      setDatas(datas);
    });
    if (data === ids) {
      console.log("equal");
      setData(data);
    } else {
      console.log("not equal");
      setData(ids);
      console.log(data);
    }
  }, []);
  if (data === null) {
    return <Loader />;
  }

  const rate = data.rating;
  return (
    <div className=" pt-24">
      {console.log("hello")}
      <div className="flex   items-center">
        <div className="w-1/2 flex  justify-center">
          <img src={data.image} alt={data.id} className="w-3/5 h-3/4 mt-24" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <h2 className="mt-20 text-2xl">${data.price}</h2>
          <h3 className=" mt-20 text-xl font-bold">Description</h3>

          <p className="mt-5 w-3/4">{data.description}</p>
          <h4 className="mt-10 text-2xl font-bold">Rating</h4>
          <p>{rate.rate}/5.0</p>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center">
        <Link to={"/"} className="text-3xl border-2 border-black p-2">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Product_details;
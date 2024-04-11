const axios = require("axios");

export const BASE_URL = "https://fakestoreapi.com";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);

  return data;
};

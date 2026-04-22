import axios from "axios";

const API_KEY = "fbe151f8";
const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fbe151f8";

export const searchMovies = async (query) => {
  const res = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    },
  });
  return res.data;
};

export const getMovieDetail = async (id) => {
  const res = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
  return res.data;
};
import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
  // url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
//this is a asynci function
export const fetchFromapi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

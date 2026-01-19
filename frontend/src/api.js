import axios from "axios";

const api = axios.create({
  baseURL: "https://capfolio.onrender.com",
});

export default api;

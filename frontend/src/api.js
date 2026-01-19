import axios from "axios";

const api = axios.create({
  baseURL: "https://capfolio.onrender.com/api",
});

export default api;

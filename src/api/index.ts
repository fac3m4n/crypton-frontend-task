import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-ashen-seven-22.vercel.app",
});

export default api;

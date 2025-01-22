import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-ashen-seven-22.vercel.app",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;

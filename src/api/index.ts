import axios from "axios";

// Axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add interceptor to handle 401 errors
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

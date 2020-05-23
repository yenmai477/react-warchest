import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);
export default instance;

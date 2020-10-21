import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:3333',
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosClient;
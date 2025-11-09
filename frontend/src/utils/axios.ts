import axios from 'axios';
import { store } from '../redux/store';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/v1',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
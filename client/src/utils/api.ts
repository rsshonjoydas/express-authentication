import axios from 'axios';

const axiosInstance = axios.create({
  // ? Other custom settings
  baseURL: 'http://localhost:5000',
});

export default axiosInstance;

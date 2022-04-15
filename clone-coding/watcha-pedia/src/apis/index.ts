import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/3`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko-KR'
  }
});

export default axiosInstance;
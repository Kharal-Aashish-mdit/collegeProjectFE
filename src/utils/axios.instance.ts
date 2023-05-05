import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.77:3500',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
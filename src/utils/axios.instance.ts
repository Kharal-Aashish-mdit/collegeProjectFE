import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://192.168.1.79:3000",
  headers: { authorization: localStorage?.getItem("token") ?? "" },
});

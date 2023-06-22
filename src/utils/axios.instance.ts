import axios from "axios";
export const axiosInstance = axios.create({
  // ?? " http://localhost:3000"
  baseURL: "http://192.168.135.123:3000",
  headers: { authorization: localStorage?.getItem("token") ?? "" },
});

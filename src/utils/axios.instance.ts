import axios from "axios";
export const axiosInstance = axios.create({
  // ?? "http://192.168.1.79:3000"
  baseURL: "http://localhost:3000",
  headers: { authorization: localStorage?.getItem("token") ?? "" },
});

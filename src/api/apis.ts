import { axiosInstance } from "../utils/axios.instance";

//  AUTHENTICATION
export type loginPOST = {
  email: string;
  password: string;
};

export const loginAPI = (data: loginPOST) => axiosInstance.post("/login", data);

export enum ROLE_ENUM {
  seller = "seller",
  user = "user",
}

export type registerPOST = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
  // role: "seller" | "user";
};

export const registerAPI = (data: registerPOST) =>
  axiosInstance.post("/sign-up", data);

export const getUserAPI = () => axiosInstance.get("/me");

// BOOKING

export type postBookingType = {
  roomid: string;
  name: string;
  email: string;
  checkIn: Date;
  checkOut: Date;
};

export const postBooking = (data: postBookingType) =>
  axiosInstance.post(`/booking/user`, data);

export const getBookingsUser = () => axiosInstance.get(`/booking/user`);

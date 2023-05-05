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
  role: ROLE_ENUM;
  // role: "seller" | "user";
};

export const registerAPI = (data: registerPOST) =>
  axiosInstance.post("/sign-up", data);

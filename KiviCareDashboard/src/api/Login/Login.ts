import axiosClient from "@/api/axiosClient";
import { AxiosResponse } from "axios";
import { LoginRequest, LoginResponseData } from "./LoginModel";

const BASE_RESOURCE_URL = 'auth/login'
export const loginAccount = async (data: LoginRequest): Promise<AxiosResponse<LoginResponseData>> => {
  const url = `${BASE_RESOURCE_URL}`
  return await axiosClient.post<LoginResponseData>(url, data);
}
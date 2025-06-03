import axiosClient from "@/api/axiosClient";
import { AxiosResponse } from "axios";
import { LoginRequest } from "./LoginModel";

const BASE_RESOURCE_URL = 'auth/login'
export const login = async (data: LoginRequest): Promise<AxiosResponse<LoginRequest>> => {
  const url = `${BASE_RESOURCE_URL}`
  return await axiosClient.post<LoginRequest>(url, data);
}
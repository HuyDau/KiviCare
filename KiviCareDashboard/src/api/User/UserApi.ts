import { AxiosResponse } from "axios";
import axiosClient from "../axiosClient";
import { UserResponseModel } from "./UserModel";
import ToastMessageUtil from "@/utils/message/ToastMessageUtil";


const BASE_RESOURCE_URL = '/api/v1/users'
export const getAllUsers = async (): Promise<AxiosResponse<UserResponseModel>> => {
  const url = `${BASE_RESOURCE_URL}/all`
  try {
    return await axiosClient.get<UserResponseModel>(url)
  } catch (errorCode) {
    ToastMessageUtil.error(errorCode as number);
  }
}
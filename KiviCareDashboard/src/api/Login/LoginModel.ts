export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponseData {
  statusCode: number;
  message: string;
  token: string;
  role: string;
  expirationTime: string
}
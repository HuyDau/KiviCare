import axios, { AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import Cookies from 'js-cookie';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 60 * 1000,
})

// Request interceptor to add the access token
axiosClient.interceptors.request.use(async (config) => {
  const token = Cookies.get('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
axiosClient.interceptors.response.use(
  response => response,
  async (error) => {
    if (error.response) {
      // Xử lý lỗi từ server
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Yêu cầu đã được gửi nhưng không nhận được phản hồi
      return Promise.reject({ message: 'Không thể kết nối đến server' });
    } else {
      // Lỗi khi thiết lập yêu cầu
      return Promise.reject({ message: 'Lỗi khi gửi yêu cầu' });
    }
  }
);

export default axiosClient;

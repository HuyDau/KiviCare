import Cookies from 'js-cookie';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const LOGIN_TYPE = 'loginType';

export const setAccessToken = (token: string, expiresOn: Date | null) => {
  if (token && expiresOn) {
    Cookies.set(ACCESS_TOKEN_KEY, token, {
      expires: expiresOn
    })
  }
};

export const setRefreshToken = (refreshToken: string, expiresOn: Date | null) => {
  if (refreshToken && expiresOn) {
    Cookies.set(REFRESH_TOKEN, refreshToken, {
      expires: expiresOn
    })
  }
};

export const getAccessToken = (): string | undefined => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get(REFRESH_TOKEN);
};

export const setLoginType = (type: string) => {
  localStorage.setItem(LOGIN_TYPE, type);
};

export const clearAccessToken = () => {
  localStorage.removeItem(LOGIN_TYPE);
  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN);
  localStorage.clear();
};

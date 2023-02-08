import Cookies from "js-cookie";

const isLoggedIn = () => {
  return Boolean(hasAccessToken());
};

const hasAccessToken = () => {
  return Cookies.get("accessToken");
};

const clearTokens = () => {
  Cookies.remove("accessToken");
};

export { hasAccessToken, isLoggedIn, clearTokens };

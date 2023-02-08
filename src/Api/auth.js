import axios from "axios";
import Cookies from "js-cookie";
import { setAccessHeader } from "./helpers/accessHeader.js";
const URL = "http://localhost:8080/";

const setAccessToken = (token) => {
  Cookies.set("accessToken", token, { secure: true, expires: 1 });
};

const apiLogin = async (username, password) => {
  try {
    const response = await axios.post(URL + "api/auth/login", {
      username: username,
      password: password,
    });
    const token = response.data.token;

    if (token) {
      setAccessToken(token);
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const apiRegister = async (username, password) => {
  try {
    const response = await axios.post(URL + "api/auth/register", {
      username: username,
      password: password,
    });
    const token = response.data.token;

    if (token) {
      setAccessToken(token);
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const authenticate = async () => {
  try {
    setAccessHeader();
    const response = await axios.post(URL + "api/auth/authenticate");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { apiLogin, apiRegister, authenticate };

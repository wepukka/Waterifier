import axios from "axios";
import Cookies from "js-cookie";
import { setDefaultHeader } from "./helpers";
const baseUrl = "http://localhost:8080/";

const apiLogin = async (username, password) => {
  try {
    const response = await axios.post(baseUrl + "api/auth/login", {
      username: username,
      password: password,
    });
    const token = response.data.token;
    if (token) {
      Cookies.set("accessToken", token, { secure: true, expires: 1 });
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const apiRegister = async (username, password, email) => {
  try {
    const response = await axios.post(baseUrl + "api/auth/register", {
      username: username,
      password: password,
      email: email,
    });
    const token = response.data.token;
    if (token) {
      Cookies.set("accessToken", token, { secure: true, expires: 1 });
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const authenticate = async () => {
  try {
    setDefaultHeader();
    const response = await axios.post(baseUrl + "api/auth/authenticate");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { apiLogin, apiRegister, authenticate };

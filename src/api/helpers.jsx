import { hasAccessToken } from "../../session";
import axios from "axios";

const setDefaultHeader = () => {
  const token = hasAccessToken();
  axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
};

export { setDefaultHeader };

import { hasAccessToken } from "../../session";
import axios from "axios";

const setAccessHeader = () => {
  const token = hasAccessToken();
  axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
};

export { setAccessHeader };

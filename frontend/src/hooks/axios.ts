import axios from "axios";

const _axios = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  // withCredentials: true,
});

export default _axios;
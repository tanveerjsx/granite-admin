import axios from "axios";
import { base_url } from "./../../Utils";
const API = axios.create({
  baseURL: base_url,
  timeout: 6000
});
export default API;

import axios from "axios";
import Constants from "expo-constants";

const API_ENDPOINT = Constants.manifest.extra.API_ENDPOINT;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export default api;

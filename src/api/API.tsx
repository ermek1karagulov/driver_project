import axios from "axios";
import { config } from "process";
import { AuthResponse } from "../pages/models/response/AuthResponse";

export const API_ADDRESS = " http://localhost:5000";

export const API = axios.create({
  baseURL: API_ADDRESS,
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(
    localStorage.getItem("access") as string
  )}`;
  return config;
});

API.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const res = await API.get<AuthResponse>(`${API_ADDRESS}/refresh`);
        localStorage.setItem("access", res.data.accessToken);
        return API.request(originalRequest);
      } catch (e) {
        console.log("Не авторизован");
      }
    }
    throw error;
  }
);

export default API;

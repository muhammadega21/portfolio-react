import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

if (!api_url) {
  throw new Error("VITE_API_URL is not defined in environment variables");
}

const apiClient = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

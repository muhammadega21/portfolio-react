import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: api_url,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

function validateUsername(username) {
  if (!username) return null;
  if (typeof username !== "string") return null;

  const trimmed = username.trim();
  if (!trimmed) return null;

  return encodeURIComponent(trimmed);
}

export const userProfile = async (username) => {
  const sanitizedUsername = validateUsername(username);

  try {
    const endpoint = sanitizedUsername
      ? `/user-profile/${sanitizedUsername}`
      : "/user-profile";

    const response = await apiClient.get(endpoint);

    return {
      data: response.data,
      error: null,
    };
  } catch (err) {
    console.error("Axios error:", err);

    if (err.response) {
      return {
        error: {
          status: err.response.status,
          message:
            err.response.data?.message ||
            `Request failed with status ${err.response.status}`,
          details: err.response.data?.details || null,
        },
        data: null,
      };
    } else if (err.request) {
      return {
        error: {
          status: 503,
          message: "No response from server",
          type: "network",
        },
        data: null,
      };
    } else {
      return {
        error: {
          status: 500,
          message: err.message || "Internal request error",
          type: "internal",
        },
        data: null,
      };
    }
  }
};

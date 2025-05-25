import apiClient from "./apiClient";

// Utility function untuk validasi dan sanitasi username
const validateUsername = (username) => {
  if (!username || typeof username !== "string") return null;
  const trimmed = username.trim();
  return trimmed ? encodeURIComponent(trimmed) : null;
};

// Handler error yang konsisten
const handleApiError = (error) => {
  console.error("API Error:", error);
  return {
    error: {
      status: error.response?.status || 500,
      message: error.response?.data?.message || "Internal server error",
      details: error.response?.data?.details || null,
    },
    data: null,
  };
};

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
    return handleApiError(err);
  }
};

export const getBlogs = async (username) => {
  const sanitizedUsername = validateUsername(username);

  try {
    const endpoint = sanitizedUsername
      ? `/user-blogs/${sanitizedUsername}`
      : "/user-blogs";

    const response = await apiClient.get(endpoint);

    return response.data;
  } catch (err) {
    return handleApiError(err);
  }
};

export const showBlog = async (slug) => {
  try {
    const response = await apiClient.get(`/user-blogs/post/${slug}`);
    return response.data;
  } catch (err) {
    return handleApiError(err);
  }
};

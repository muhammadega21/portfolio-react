const api_url = import.meta.env.VITE_API_URL;

export const userProfile = async (slug) => {
  try {
    const validatedSlug =
      typeof slug === "string" && slug.trim() !== ""
        ? encodeURIComponent(slug.trim())
        : null;

    const url = validatedSlug
      ? `${api_url}/user-profile/${validatedSlug}`
      : `${api_url}/user-profile`;

    const response = await fetch(url);

    if (response.status === 404) {
      return {
        error: {
          status: 404,
          message: "User not found",
        },
        data: null,
      };
    }

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching user profile:", err.message);
    return {
      error: {
        status: 500,
        message: err.message || "Internal server error",
      },
      data: null,
    };
  }
};

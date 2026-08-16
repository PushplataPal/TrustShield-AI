const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const scanWebsite = async (url) => {
  const response = await fetch(`${API_URL}/scan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Unable to scan website");
  }

  return response.json();
};

export const getScanHistory = async () => {
  const response = await fetch(`${API_URL}/scan/history`);

  if (!response.ok) {
    throw new Error("Unable to fetch history");
  }

  return response.json();
};
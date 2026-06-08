const BASE_URL = "https://6a1f050cb79eec0d6cf06eab.mockapi.io/api/v1/locations";

export const locationsService = {
  getAll: async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch locations");
    return res.json();
  },

  getById: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch location");
    return res.json();
  },
};
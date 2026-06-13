import { api } from "./axios";

export const locationsService = {
  getAll: async () => {
    const res = await api.get("/locations");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/locations/${id}`);
    return res.data;
  },
};
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

async function fetchProfile(id) {
  const res = await api.get(`/users/${id}`);
  return res.data;
}

export function useProfile(id) {
  return useQuery({
    queryKey: ["profile", id],
    queryFn: () => fetchProfile(id),
    enabled: !!id,
  });
}
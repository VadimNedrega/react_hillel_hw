import { useMutation } from "@tanstack/react-query";
import { api } from "../api/axios";

async function changePasswordRequest({
  id,
  currentPassword,
  newPassword,
}) {
  const { data: user } = await api.get(`/users/${id}`);

  if (user.password !== currentPassword) {
    throw new Error("Current password is incorrect");
  }

  const res = await api.put(`/users/${id}`, {
    ...user,
    password: newPassword,
  });

  return res.data;
}

export function useChangePassword() {
  return useMutation({
    mutationFn: changePasswordRequest,
  });
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import { useAuthStore } from "../store/authStore";

async function updateProfileRequest({ id, data }) {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
}

export function useUpdateProfile() {
    const queryClient = useQueryClient();
    const setAuthUser = useAuthStore((s) => s.updateUser);
    const user = useAuthStore((s) => s.user);

    return useMutation({
        mutationFn: updateProfileRequest,

        onSuccess: (updatedUser) => {
            queryClient.setQueryData(["profile", user.id], updatedUser);
            setAuthUser(updatedUser);
        },
    });
}
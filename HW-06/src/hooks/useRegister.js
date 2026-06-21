import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/routesPaths"

export const useRegister = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authApi.register,

    onSuccess: (user) => {
      setAuth(user);
      navigate(ROUTES.dashboard.map);
    },
  });
};
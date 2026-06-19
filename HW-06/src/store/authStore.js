import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setAuth: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
        updateUser: (updates) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, ...updates }
            : state.user,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);
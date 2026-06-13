import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favoriteIds: [],

      addFavorite: (id) =>
        set((state) => ({
          favoriteIds: [...state.favoriteIds, id],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.filter((item) => item !== id),
        })),

      toggleFavorite: (id) => {
        const exists = get().favoriteIds.includes(id);

        if (exists) {
          get().removeFavorite(id);
        } else {
          get().addFavorite(id);
        }
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
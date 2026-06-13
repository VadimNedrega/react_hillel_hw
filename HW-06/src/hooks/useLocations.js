import { useQuery } from "@tanstack/react-query";
import { locationsService } from "../api/locationsApi";

export const useLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: locationsService.getAll,
  });
};
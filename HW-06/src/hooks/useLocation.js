import { useQuery } from "@tanstack/react-query";
import { locationsService } from "../api/locationsApi";

export const useLocation = (id) => {
  return useQuery({
    queryKey: ["location", id],
    queryFn: () => locationsService.getById(id),
    enabled: !!id,
  });
};
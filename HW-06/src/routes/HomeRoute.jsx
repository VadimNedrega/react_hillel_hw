import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { ROUTES } from "../router/routesPaths"

function HomeRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated
    ? <Navigate to={ROUTES.dashboard.map} replace />
    : <Navigate to={ROUTES.auth.login} replace />;
}

export default HomeRoute;
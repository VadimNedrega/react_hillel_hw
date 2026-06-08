const DASHBOARD_ROOT = "/dashboard";

export const ROUTES = {
  auth: {
    login: "/login",
    register: "/register",
  },

  dashboard: {
    root: DASHBOARD_ROOT,
    map: `${DASHBOARD_ROOT}/map`,
    analytics: `${DASHBOARD_ROOT}/analytics`,
    favorites: `${DASHBOARD_ROOT}/favorites`,
    profile: `${DASHBOARD_ROOT}/profile`,
    location: (id) => `${DASHBOARD_ROOT}/location/${id}`,
  },
};
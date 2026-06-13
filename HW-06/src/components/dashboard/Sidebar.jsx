import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routesPaths";
import LogoutButton from "../auth/LogoutButton";

function Sidebar() {
  return (
    <div style={{ width: 200 }}>
      <ul>
        <li><NavLink to={ROUTES.dashboard.map}>Map</NavLink></li>
        <li><NavLink to={ROUTES.dashboard.analytics}>Analytics</NavLink></li>
        <li><NavLink to={ROUTES.dashboard.favorites}>Favorites</NavLink></li>
        <li><NavLink to={ROUTES.dashboard.profile}>Profile</NavLink></li>
      </ul>

      <div style={{ marginTop: "auto" }}>
        <LogoutButton />
      </div>
    </div>
  );
}

export default Sidebar;
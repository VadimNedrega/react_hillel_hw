import { Outlet, NavLink } from 'react-router-dom'
import "./DashboardLayout.css";
import { ROUTES } from '../router/routesPaths';


function DashboardLayout() {
  return (
    <div className="dashboard">
      
      <div className="sidebar">
        <h2>Dashboard</h2>

        <nav>
          <ul>
            <li>
              <NavLink to={ROUTES.dashboard.map}>Map</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.dashboard.analytics}>Analytics</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.dashboard.favorites}>Favorites</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.dashboard.profile}>Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
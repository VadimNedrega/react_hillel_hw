import { Outlet } from 'react-router-dom'
import "./DashboardLayout.css";
import { ROUTES } from '../router/routesPaths';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';


function DashboardLayout() {
  return (
    <div className="dashboard">
      
      <Sidebar />

      <div className="content">
        <Header />
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main
          className="p-6 min-h-screen"
          style={{ backgroundColor: "#eaebeb" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
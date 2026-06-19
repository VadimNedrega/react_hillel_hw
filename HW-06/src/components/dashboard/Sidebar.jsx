import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routesPaths";
import LogoutButton from "../auth/LogoutButton";
import { useState } from "react";
import { LayoutDashboard } from "lucide-react";

const items = [
    { to: ROUTES.dashboard.map, label: "Map" },
    { to: ROUTES.dashboard.analytics, label: "Analytics" },
    { to: ROUTES.dashboard.favorites, label: "Favorites" },
    { to: ROUTES.dashboard.profile, label: "Profile" },
];

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`h-screen sticky top-0 flex flex-col border-r border-white/10 text-white p-3 transition-all duration-300 ${collapsed ? "w-16" : "w-60"
                }`}
            style={{ backgroundColor: "#1f2924" }}
        >
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="mb-4 text-white/70 hover:text-white text-sm"
            >
                {collapsed ? "→" : "←"}
            </button>

            {!collapsed && (
                <div className="mb-4 flex items-center gap-2 px-2 text-xs uppercase tracking-widest text-white/50">
                    <LayoutDashboard size={14} />
                    <span>Dashboard</span>
                </div>
            )}

            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center justify-left ${collapsed ? "px-2" : "px-3"
                                } py-2 rounded-lg text-sm transition ${isActive
                                    ? "bg-white/20 text-white"
                                    : "text-white/70 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            {collapsed ? item.label[0] : item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="mt-auto border-t border-white/10 pt-4">
                {!collapsed && <LogoutButton />}
            </div>
        </aside>
    );
}

export default Sidebar;
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";

function Header() {
    const user = useAuthStore((state) => state.user);

    return (
        <header
            className="h-14 sticky top-0 z-10 border-b flex items-center justify-between px-6 text-white"
            style={{ backgroundColor: "#413e3e" }}
        >

            <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-300">
                    Dashboard
                </span>
                <span className="text-xs text-gray-200">
                    Overview
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-200">
                    {user?.email}
                </span>

                <Link to="/dashboard/profile">
                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-105 transition">
                        {user?.email?.[0]?.toUpperCase()}
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
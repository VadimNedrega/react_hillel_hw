import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

function LogoutButton() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="
        w-full
        px-3 py-2
        text-sm
        text-white/70
        rounded-lg
        transition-all
        duration-200
        hover:bg-red-500/20
        hover:text-white
        active:scale-95
        cursor-pointer
        text-left
      "
    >
      Logout
    </button>
  );
}

export default LogoutButton;
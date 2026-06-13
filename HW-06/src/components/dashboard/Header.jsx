import { useAuthStore } from "../../store/authStore";

function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h3>Welcome: {user?.email}</h3>
    </div>
  );
}

export default Header;
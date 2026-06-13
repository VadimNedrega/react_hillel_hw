import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const login = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    login.mutate({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" />

      <button type="submit">
        Login
      </button>

      {login.isError && <p>Invalid credentials</p>}
    </form>
      <p>
        Don’t have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
import { useRegister } from "../../hooks/useRegister";

function RegisterForm() {
  const register = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    register.mutate({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
      avatar: "https://i.pravatar.cc/150",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <input name="phone" placeholder="Phone" />

      <button type="submit">
        Register
      </button>

      {register.isError && (
        <p>Registration failed</p>
      )}
    </form>
  );
}

export default RegisterForm;
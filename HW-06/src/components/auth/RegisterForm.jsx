import { useRegister } from "../../hooks/useRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/authSchemas";
import { Link } from "react-router-dom";

function RegisterForm() {
  const register = useRegister();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    register.mutate({
      ...data,
      avatar: "https://i.pravatar.cc/150",
    });
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
            {...formRegister("name")}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...formRegister("email")}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...formRegister("password")}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...formRegister("phone")}
            placeholder="Phone"
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>

        {register.isError && (
          <p className="text-red-500 text-sm text-center">
            Registration failed
          </p>
        )}
      </form>

      <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link className="text-blue-600 hover:underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
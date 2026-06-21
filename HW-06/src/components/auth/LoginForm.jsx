import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/authSchemas";

export const LoginForm = () => {
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    login.mutate(data);
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
            {...register("email")}
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
            {...register("password")}
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {login.isPending ? "Logging in..." : "Login"}
        </button>

        {login.isError && (
          <p className="text-red-500 text-sm text-center">
            Invalid credentials
          </p>
        )}
      </form>

      <p className="text-sm text-center text-gray-500">
        Don’t have an account?{" "}
        <Link className="text-blue-600 hover:underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};
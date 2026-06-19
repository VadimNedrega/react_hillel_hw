import { LoginForm } from "../components/auth/LoginForm";

function LoginRoute() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950/5">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Welcome back
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginRoute;
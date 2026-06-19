import RegisterForm from "../components/auth/RegisterForm";

function RegisterRoute() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950/5">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create account
        </h1>

        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterRoute;
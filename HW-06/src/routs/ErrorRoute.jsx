import { useRouteError } from "react-router-dom";

function ErrorRoute() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong</h1>

      <p>
        {error?.message || "Unexpected error"}
      </p>
    </div>
  );
}

export default ErrorRoute;
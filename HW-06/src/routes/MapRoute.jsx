import { Link } from "react-router-dom";
import { ROUTES } from "../router/routesPaths"
import { useLocations } from "../hooks/useLocations";

function MapRoute() {
  const { data, isLoading, isError } = useLocations();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading locations</p>;

  return (
    <div>
      <h1>Map</h1>

      <ul>
        {(data || []).map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.address}</div>
            <div>{item.type}</div>

            <Link to={`${ROUTES.dashboard.location(item.id)}`}>
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapRoute;
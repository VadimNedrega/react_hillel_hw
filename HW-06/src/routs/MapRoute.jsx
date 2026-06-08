import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {ROUTES} from "../router/routesPaths"

function MapRoute() {
  const locations = useLoaderData();

  return (
    <div>
      <h1>Map</h1>

      <ul>
        {locations.map((item) => (
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
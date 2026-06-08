import { useLoaderData } from "react-router-dom";

function LocationDetailsRoute() {
  const location = useLoaderData();

  return (
    <div>
      <h1>Location Details</h1>

      <p>Name: {location.name}</p>
      <p>Address: {location.address}</p>
      <p>Type: {location.type}</p>
      <p>Rating: {location.rating}</p>
    </div>
  );
}

export default LocationDetailsRoute;
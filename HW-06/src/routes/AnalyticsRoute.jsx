import { useLocations } from "../hooks/useLocations";
import KpiCards from "../components/analytics/KpiCards";
import AnalyticsCharts from "../components/analytics/AnalyticsCharts";
import Loader from "../components/ui/Loader"

function AnalyticsRoute() {
  const { data: locations = [], isLoading } = useLocations();


  if (isLoading) return <Loader />;

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-semibold text-gray-800">
        Analytics Dashboard
      </h1>

      <KpiCards locations={locations} />

      <AnalyticsCharts locations={locations} />

    </div>
  );
}

export default AnalyticsRoute;
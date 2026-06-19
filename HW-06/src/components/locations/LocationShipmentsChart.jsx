import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMemo } from "react";

function LocationShipmentsChart({ location }) {
  const data = useMemo(() => {
    if (!location) return [];

    const base = location.shipments || 0;

    return [
      { day: "Mon", shipments: Math.max(0, base - 3) },
      { day: "Tue", shipments: Math.max(0, base - 2) },
      { day: "Wed", shipments: Math.max(0, base - 1) },
      { day: "Thu", shipments: base },
      { day: "Fri", shipments: base + 2 },
      { day: "Sat", shipments: base + 4 },
      { day: "Sun", shipments: base + 1 },
    ];
  }, [location]);

  if (!location) return null;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="shipments"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LocationShipmentsChart;
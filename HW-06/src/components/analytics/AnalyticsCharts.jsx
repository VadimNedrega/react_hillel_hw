import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    ResponsiveContainer,
} from "recharts";

function AnalyticsCharts({ locations }) {
    // by type
    const byType = Object.values(
        locations.reduce((acc, loc) => {
            acc[loc.type] = acc[loc.type] || { name: loc.type, value: 0 };
            acc[loc.type].value += 1;
            return acc;
        }, {})
    );

    // ratings
    const ratings = locations.map((loc, index) => ({
        name: `L${index + 1}`,
        rating: loc.rating || 0,
    }));

    // shipments
    const shipments = locations.map((loc) => ({
        name: loc.name,
        value: loc.shipments || 0,
    }));

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

    return (
        <div className="grid gap-6">

            {/* TOP */}
            <div className="grid grid-cols-2 gap-6">

                {/* BAR */}
                <div className="rounded-xl border p-4 bg-white">
                    <h3 className="mb-4 text-lg font-semibold text-gray-700">
                        Locations by Type
                    </h3>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={byType}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* LINE */}
                <div className="rounded-xl border p-4 bg-white">
                    <h3 className="mb-4 text-lg font-semibold text-gray-700">
                        Ratings Trend
                    </h3>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={ratings}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="rating"
                                stroke="#10b981"
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>

            {/* PIE */}
            <div className="rounded-xl border p-4 bg-white">
                <h3 className="mb-4 text-lg font-semibold text-gray-700">
                    Shipments Distribution
                </h3>

                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie
                            data={shipments}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={120}
                        >
                            {shipments.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default AnalyticsCharts;
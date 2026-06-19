import { useMemo } from "react";

function KpiCards({ locations }) {
    const kpis = useMemo(() => {
        const totalLocations = locations.length;

        const totalShipments = locations.reduce(
            (sum, loc) => sum + (loc.shipments || 0),
            0
        );

        const averageRating =
            locations.length > 0
                ? (
                    locations.reduce((sum, loc) => sum + (loc.rating || 0), 0) /
                    locations.length
                ).toFixed(2)
                : 0;

        return { totalLocations, totalShipments, averageRating };
    }, [locations]);

    const cards = [
        {
            label: "Total Locations",
            value: kpis.totalLocations,
            color: "text-blue-600",
            bg: "bg-blue-30",
        },
        {
            label: "Total Shipments",
            value: kpis.totalShipments,
            color: "text-green-600",
            bg: "bg-green-30",
        },
        {
            label: "Avg Rating",
            value: kpis.averageRating,
            color: "text-purple-600",
            bg: "bg-purple-30",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
                >
                    <div className="flex items-center justify-between">

                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {card.label}
                        </p>

                        <div className={`w-2 h-2 rounded-full ${card.color}`} />
                    </div>

                    <p className={`mt-2 text-2xl font-semibold text-gray-900`}>
                        {card.value}
                    </p>

                </div>
            ))}
        </div>
    );
}

export default KpiCards;
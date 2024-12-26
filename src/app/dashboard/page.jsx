import TruckCard from "@/app/components/truckCard";

export default function Page() {
    const trucks = [
        {
            name: "Camión 1",
            location: "Playa 5",
            lastInspection: "2024-12-10",
            image: "/images/truck1.png"
        },
        {
            name: "Camión 2",
            location: "Playa 3",
            lastInspection: "2024-11-20",
            image: "/images/truck2.jpg"
        }
    ];
    return (
        <div className="flex flex-wrap gap-6 p-6">
            {trucks.map((truck, index) => (
                <TruckCard key={index} truck={truck}/>
            ))}
        </div>
    );
}
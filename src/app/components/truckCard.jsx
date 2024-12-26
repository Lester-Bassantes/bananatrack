import { TruckIcon, MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function TruckCard({ truck }) {
    return (
        <div className="w-full max-w-xs bg-gray-800 text-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            {/* Card Header */}
            <div className="relative flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <TruckIcon className="w-6 h-6 text-purple-600" />
                    <h2 className="text-lg font-semibold">{truck.name}</h2>
                </div>
                <div className="absolute top-0 right-0 p-2">
                    <Image
                        src={truck.image}
                        alt={`image`}
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* Card Body */}
            <div className="p-4 space-y-3">
                {/* Truck Info */}
                <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm">{truck.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm">{truck.lastInspection}</span>
                </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between p-4 bg-gray-700">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Más detalles
                </button>
            </div>
        </div>
    );
}

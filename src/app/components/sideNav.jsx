'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    TruckIcon,
    AdjustmentsHorizontalIcon,
    ClipboardDocumentCheckIcon,
    PresentationChartLineIcon,
    CircleStackIcon,
    ArrowLeftStartOnRectangleIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";

export default function SideNav() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeLink, setActiveLink] = useState(null);

    return (
        <nav
            className={`flex flex-col bg-gray-800 text-gray-300 h-screen ${
                isExpanded ? "w-64" : "w-16"
            } shadow-lg transition-all duration-300`}
        >
            <div
                className={`flex ${
                    isExpanded ? "justify-between px-4" : "justify-center"
                } items-center py-2`}
            >
                {isExpanded && (
                    <Link href="/dashboard" className="flex items-center">
                        <Image
                            src="/images/Grupo-Palmar-Logotipo.png"
                            width={isExpanded ? 250 : 70}
                            height={70}
                            alt="Company logo"
                            priority
                            onClick={() => setActiveLink(null)}
                        />
                    </Link>
                )}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-gray-300 hover:text-white flex justify-center"
                >
                    <Bars3Icon className="w-6 h-6"/>
                </button>
            </div>

            <hr className="border-gray-700"/>

            {/* Menu Items */}
            <ul className="flex flex-col mt-4 space-y-2">
                <li className="relative group">
                    <Link
                        href="/dashboard/tracking"
                        title="Entrega de rastreo"
                        className={`flex items-center ${
                            isExpanded ? "px-4" : "justify-center"
                        } py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors ${
                            activeLink === "tracking" ? "bg-purple-900 text-white" : ""
                        }`}
                        onClick={() => setActiveLink("tracking")}
                    >
                        <TruckIcon className="w-5 h-5 transition-transform duration-200 transform hover:scale-125" aria-hidden="true"/>
                        {isExpanded && <span className="ml-4">Entrega de rastreo</span>}
                    </Link>

                    {!isExpanded && (
                        <span
                            className="absolute left-14 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Entrega de rastreo
                        </span>
                    )}
                </li>
                <li className="relative group">
                    <Link
                        href="/dashboard/inspection"
                        title="Control e inspección"
                        className={`flex items-center ${
                            isExpanded ? "px-4" : "justify-center"
                        } py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors ${
                            activeLink === "inspection" ? "bg-purple-900 text-white" : ""
                        }`}
                        onClick={() => setActiveLink("inspection")}
                    >
                        <AdjustmentsHorizontalIcon
                            className="w-5 h-5 transition-transform duration-200 transform hover:scale-125"
                            aria-hidden="true"
                        />
                        {isExpanded && <span className="ml-4">Control e inspección</span>}
                    </Link>
                    {!isExpanded && (
                        <span
                            className="absolute left-14 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Control e inspección
                        </span>
                    )}
                </li>
                <li className="relative group">
                    <Link
                        href="/dashboard/audit"
                        title="Auditoría de agrícolas"
                        className={`flex items-center ${
                            isExpanded ? "px-4" : "justify-center"
                        } py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors ${
                            activeLink === "audit" ? "bg-purple-900 text-white" : ""
                        }`}
                        onClick={() => setActiveLink("audit")}
                    >
                        <ClipboardDocumentCheckIcon
                            className="w-5 h-5 transition-transform duration-200 transform hover:scale-125"
                            aria-hidden="true"
                        />
                        {isExpanded && <span className="ml-4">Auditoría de agrícolas</span>}
                    </Link>
                    {!isExpanded && (
                        <span
                            className="absolute left-14 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Auditoría de agrícolas
                        </span>
                    )}
                </li>
                <li className="relative group">
                    <Link
                        href="/dashboard/monitoring"
                        title="Monitoreo y control"
                        className={`flex items-center ${
                            isExpanded ? "px-4" : "justify-center"
                        } py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors ${
                            activeLink === "monitoring" ? "bg-purple-900 text-white" : ""
                        }`}
                        onClick={() => setActiveLink("monitoring")}
                    >
                        <PresentationChartLineIcon
                            className="w-5 h-5 transition-transform duration-200 transform hover:scale-125"
                            aria-hidden="true"
                        />
                        {isExpanded && <span className="ml-4">Monitoreo y control</span>}
                    </Link>
                    {!isExpanded && (
                        <span
                            className="absolute left-14 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Monitoreo y control
                        </span>
                    )}
                </li>
                <li className="relative group">
                    <Link
                        href="/dashboard/resourcesControl"
                        title="Control de recursos"
                        className={`flex items-center ${
                            isExpanded ? "px-4" : "justify-center"
                        } py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors ${
                            activeLink === "resourcesControl" ? "bg-purple-900 text-white" : ""
                        }`}
                        onClick={() => setActiveLink("resourcesControl")}
                    >
                        <CircleStackIcon className="w-5 h-5 transition-transform duration-200 transform hover:scale-125" aria-hidden="true"/>
                        {isExpanded && <span className="ml-4">Control de recursos</span>}
                    </Link>
                    {!isExpanded && (
                        <span
                            className="absolute left-14 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Control de recursos
                        </span>
                    )}
                </li>
            </ul>

            {/* Logout Button */}
            <div className="mt-auto p-4">
                <button
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition flex items-center justify-center"
                    onClick={() => console.log("Logout")}
                >
                    <ArrowLeftStartOnRectangleIcon
                        className="w-5 h-5 transition-transform duration-200 transform hover:scale-125"
                        aria-hidden="true"
                    />
                    {isExpanded && <span className="ml-4">Cerrar sesión</span>}
                </button>
            </div>
        </nav>
    );
}

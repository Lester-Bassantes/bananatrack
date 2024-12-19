import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
    return (
        <nav className="flex flex-col bg-gray-800 text-gray-300 h-screen w-64 shadow-lg">
            {/* Logo */}
            <div className="p-4 flex justify-center">
                <Link href="#" className="flex items-center">
                    <Image
                        src="/images/Grupo-Palmar-Logotipo.png"
                        width={250}
                        height={70}
                        alt="Company logo"
                    />
                </Link>
            </div>

            {/* Separador */}
            <hr className="border-gray-700" />

            {/* Opciones de navegación */}
            <ul className="flex flex-col px-4 mt-4 space-y-2">
                <li className="group">
                    <Link
                        href="/dashboard/tracking"
                        className="flex items-center px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                    >
                        Entrega de rastreo
                    </Link>
                </li>
                <li className="group">
                    <Link
                        href="/dashboard/inspection"
                        className="flex items-center px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                    >
                        Control e inspección
                    </Link>
                </li>
                <li className="group">
                    <Link
                        href="/dashboard/audit"
                        className="flex items-center px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                    >
                        Auditoría de agrícolas
                    </Link>
                </li>
                <li className="group">
                    <Link
                        href="/dashboard/monitoring"
                        className="flex items-center px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                    >
                        Monitoreo y seguimiento
                    </Link>
                </li>
                <li className="group">
                    <Link
                        href="resourcesControl"
                        className="flex items-center px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                    >
                        Control de recursos
                    </Link>
                </li>
            </ul>

            {/* Botón del perfil al fondo */}
            <div className="mt-auto p-4">
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition">
                    Log out
                </button>
            </div>
        </nav>
    );
}

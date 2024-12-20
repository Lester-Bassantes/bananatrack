import SideNav from '../components/sideNav';

export default function Layout({ children }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideNav />

            {/* Main Content */}
            <div className="flex-grow p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

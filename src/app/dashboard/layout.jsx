import SideNav from '../components/sideNav';

export default function Layout({ children }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideNav />

            {/* Main Content */}
            <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

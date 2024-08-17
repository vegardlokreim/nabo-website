import { Link, Outlet } from "react-router-dom";
import Logo from '../assets/nabo_logo.png'

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex items-center justify-center bg-black p-4 sticky top-0 z-10">
                {/* Your header content here */}
                <img src={Logo} className="h-12" />
            </header>
            <Outlet />
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-4">
                <button className="text-gray-500">
                    <Link to="/">Home</Link>
                </button>
                <button className="text-gray-500">
                    <Link to="/meny">Bestill</Link>
                </button>
                <button className="text-gray-500">
                    Bestill takeaway
                </button>
                <button className="text-gray-500">
                    Kontakt ossss
                </button>
            </footer>
        </div>
    );
}

export default Layout;
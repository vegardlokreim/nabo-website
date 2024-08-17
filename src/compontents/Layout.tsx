import { Link, Outlet } from "react-router-dom";
import Logo from '../assets/nabo_logo.png'
import Footer from "./Footer";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">

            <header className="flex items-center justify-center bg-black p-4 sticky top-0 z-10">
                {/* Your header content here */}
                <img src={Logo} className="h-12" />
            </header>
            <Outlet />
            <Footer />

        </div >
    );
}

export default Layout;
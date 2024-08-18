import { Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">

            <Header />
            <Outlet />
            <Footer />

        </div >
    );
}

export default Layout;
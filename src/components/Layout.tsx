import { useMediaQuery } from "react-responsive";
import Header from "./Header.tsx";
import MobileHeader from "./MobileHeader.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./MobileFooter.tsx";


function Layout() {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    return (
        <div className="min-h-screen flex flex-col">
            {
                isMobile ? <MobileHeader /> : <Header />
            }

            <Outlet />
            {
                isMobile && <Footer />
            }
        </div >
    );
}

export default Layout;
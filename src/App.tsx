import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import OrderSummary from "./pages/OrderSummary.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/meny" element={<MenuPage />} />
                    <Route path="/om-oss" element={<AboutPage />} />
                    <Route path="/kontakt" element={<ContactPage />} />
                    <Route path="/bestill" element={<OrderSummary />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import Layout from "./compontents/Layout.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/meny" element={<MenuPage />} />
                    <Route path="/kontakt" element={<ContactPage />} />
                    <Route path="/om-oss" element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

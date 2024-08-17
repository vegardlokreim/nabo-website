import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import Layout from "./compontents/Layout.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/meny" element={<MenuPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

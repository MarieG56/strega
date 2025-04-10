import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Waxing from "./pages/Services/Waxing";
import Eyes from "./pages/Services/Eyes";
import Nails from "./pages/Services/Nails";
import Makeup from "./pages/Services/Makeup";
import Massage from "./pages/Services/Massage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { FaServicestack } from "react-icons/fa6";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<FaServicestack />} />
                    <Route path="waxing" element={<Waxing />} />
                    <Route path="eyes" element={<Eyes />} />
                    <Route path="nails" element={<Nails />} />
                    <Route path="makeup" element={<Makeup />} />
                    <Route path="massage" element={<Massage />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;

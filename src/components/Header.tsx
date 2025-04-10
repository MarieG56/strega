import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo_without_name.png';
import { FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu"; // Import du composant DropdownMenu

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false); // Ferme le menu
    };

    return (
        <header className="px-5 beige h-[12vh] md:h-[15vh] relative">
            {/* Mobile layout: Grid */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center md:hidden h-full">
                {/* Logo */}
                <div className="flex justify-start items-center h-full">
                    <Link to="/home">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[7vh] rounded-full object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                {/* "Strega" centré */}
                <div className="text-center text-3xl logo_name flex items-center justify-center h-full">
                    Strega
                </div>

                {/* Menu Burger */}
                <div className="flex justify-end items-center h-full">
                    <button onClick={toggleMenu} className="text-[#7D5E19]">
                        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </button>
                </div>
            </div>

            {/* Desktop layout: Flex */}
            <div className="hidden md:flex items-center justify-between h-full">
                {/* Logo + Nom */}
                <div className="flex items-center gap-4">
                    <Link to="/home">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[12vh] rounded-full object-contain cursor-pointer"
                        />
                    </Link>
                    <div className="logo_name text-4xl flex items-center">
                        Strega
                    </div>
                </div>

                {/* Navbar avec DropdownMenu */}
                <nav className="flex items-center gap-6">
                    <Link to="/home" className="gold text-base hover:underline">
                        Accueil
                    </Link>
                    <Link to="/about" className="gold text-base hover:underline">
                        A propos
                    </Link>
                    {/* Dropdown Menu pour Prestations et tarifs */}
                    <DropdownMenu />
                    <Link to="/gallery" className="gold text-base hover:underline">
                        Galerie
                    </Link>
                    <Link to="/contact" className="gold text-base hover:underline">
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Navbar Mobile */}
            {menuOpen && (
                <nav
                    className={`flex flex-col items-center gap-6 absolute top-full left-0 right-0 bg-white z-50 py-4 md:hidden`}
                >
                    <Link to="/home" onClick={closeMenu} className="gold text-base hover:underline">
                        Accueil
                    </Link>
                    <Link to="/about" onClick={closeMenu} className="gold text-base hover:underline">
                        A propos
                    </Link>
                    <Link to="/services" onClick={closeMenu} className="gold text-base hover:underline">
                        Prestations et tarifs
                    </Link>
                    <Link to="/gallery" onClick={closeMenu} className="gold text-base hover:underline">
                        Galerie
                    </Link>
                    <Link to="/contact" onClick={closeMenu} className="gold text-base hover:underline">
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}

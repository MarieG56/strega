import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev); 

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(false);
    }; //Close the menu

    const isActiveLink = (...paths: string[]) => {
        return paths.includes(location.pathname) ? "font-bold" : "";
    };

    return (
        <div className="relative" onClick={toggleMenu}>
            <div className={`gold hover:underline cursor-pointer flex items-center gap-1 text-base ${isActiveLink("/waxing","/eyes", "/nails", "/makeup", "/massage")}`}>
                Prestations et tarifs
                <ChevronDownIcon
                    className={`h-3 w-3 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </div>

            {/* Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 beige rounded-lg shadow-lg">
                    <Link
                        to="/waxing"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 gold hover:bg-[#e7d4c6]"
                    >
                        Epilation
                    </Link>
                    <Link
                        to="/eyes"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 gold hover:bg-[#e7d4c6]"
                    >
                        Regard
                    </Link>
                    <Link
                        to="/nails"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 gold hover:bg-[#e7d4c6]"
                    >
                        Ongles
                    </Link>
                    <Link
                        to="/makeup"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 gold hover:bg-[#e7d4c6]"
                    >
                        Maquillage
                    </Link>
                    <Link
                        to="/massage"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 gold hover:bg-[#e7d4c6]"
                    >
                        Soins
                    </Link>
                </div>
            )}
        </div>
    );
}

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    const isActiveLink = (...paths: string[]) => {
        return paths.includes(location.pathname) ? "font-bold" : "";
    };

    const menuItems = [
        { path: "/waxing", label: "Epilation" },
        { path: "/eyes", label: "Regard" },
        { path: "/nails", label: "Ongles" },
        { path: "/makeup", label: "Maquillage" },
        { path: "/massage", label: "Soins" },
    ];

    return (
        <div
            className="relative"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-expanded={isOpen}
            aria-label="Prestations et tarifs"
        >
            <div
                className={`gold hover:underline cursor-pointer flex items-center gap-1 text-base ${isActiveLink(
                    "/waxing",
                    "/eyes",
                    "/nails",
                    "/makeup",
                    "/massage"
                )}`}
            >
                Prestations et tarifs
                <ChevronDownIcon
                    className={`h-3 w-3 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </div>

            {/* Menu */}
            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-48 beige rounded-lg shadow-lg"
                    role="menu"
                >
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={handleLinkClick}
                            className="block px-4 py-2 gold hover:bg-[#e7d4c6] focus:outline-none focus:bg-[#e7d4c6]"
                            role="menuitem"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
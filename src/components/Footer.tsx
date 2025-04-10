import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    const socialLinks = [
        {
            href: "https://www.instagram.com/stregabysoa/",
            label: "Visit Instagram profile",
            icon: <FaInstagram size={20} aria-hidden="true" />,
        },
        {
            href: "https://www.facebook.com/profile.php?id=61563326601604",
            label: "Visit Facebook profile",
            icon: <FaFacebook size={20} aria-hidden="true" />,
        },
    ];

    return (
        <footer className="py-5 md:mt-10 border-t border-t-[#7D5E19]/50 w-full">
            {/* Main layout */}
            <div className="w-full px-5 flex flex-row justify-between items-center text-xs md:text-sm gap-3">
                {/* Mandatory links */}
                <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                    <Link
                        to="/mentions-legales"
                        className="text-[#7D5E19] hover:underline"
                    >
                        Mentions légales
                    </Link>
                    <Link
                        to="/politique-confidentialite"
                        className="text-[#7D5E19] hover:underline"
                    >
                        Politique de confidentialité
                    </Link>
                </div>

                {/* Social media */}
                <div className="flex flex-row justify-end gap-3 items-center">
                    {/* Text (only in the desktop version) */}
                    <span className="hidden md:block text-sm text-[#7D5E19]">
                        Me suivre sur les réseaux sociaux
                    </span>

                    {/* Social media icons */}
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-[#7D5E19] hover:text-[#5e4514]"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
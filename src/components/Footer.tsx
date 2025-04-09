import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-5 md:mt-10 border-t border-t-[#7D5E19]/50 w-full">
            {/* Layout principal */}
            <div className="w-full px-5 flex flex-row justify-between items-center text-xs md:text-sm gap-3">
                {/* Links (alignés à gauche, horizontal en desktop) */}
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
                    {/* Text only in the desktop version */}
                    <span className="hidden md:block text-sm text-[#7D5E19]">
                        Me suivre sur les réseaux sociaux
                    </span>

                    {/* Social media icons */}
                    <Link
                        to="https://www.instagram.com/stregabysoa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7D5E19]"
                    >
                        <FaInstagram size={20} />
                    </Link>
                    <Link
                        to="https://www.facebook.com/profile.php?id=61563326601604"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7D5E19]"
                    >
                        <FaFacebook size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

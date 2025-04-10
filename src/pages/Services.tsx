import React from "react";
import { Link } from "react-router-dom";

const services = [
    { path: "/waxing", label: "Epilation", ariaLabel: "Voir la page Epilation" },
    { path: "/eyes", label: "Regard", ariaLabel: "Voir la page Regard" },
    { path: "/nails", label: "Ongles", ariaLabel: "Voir la page Ongles" },
    { path: "/makeup", label: "Maquillage", ariaLabel: "Voir la page Maquillage" },
    { path: "/massage", label: "Soins", ariaLabel: "Voir la page Soins" },
];

export default function Services() {
    return (
        <div className="flex flex-col justify-center items-center mt-12 gap-6 text-[#7d5e19]">
            {services.map((service, index) => (
                <Link
                    key={index}
                    to={service.path}
                    className="text-xl hover:underline"
                    aria-label={service.ariaLabel}
                >
                    {service.label}
                </Link>
            ))}
        </div>
    );
}
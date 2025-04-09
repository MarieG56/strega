import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>
            <div
                className="flex flex-col justify-center items-center mt-12 gap-6 text-[#7d5e19]"

            >
                <Link to="/waxing" className="text-xl hover:underline">
                    Epilation
                </Link>
                <Link to="/eyes" className="text-xl hover:underline">
                    Regard
                </Link>
                <Link to="/nails" className="text-xl hover:underline">
                    Ongles
                </Link>
                <Link to="/makeup" className="text-xl hover:underline">
                    Maquillage
                </Link>
                <Link to="/massage" className="text-xl hover:underline">
                    Soins
                </Link>
            </div>
        </>
    );
}

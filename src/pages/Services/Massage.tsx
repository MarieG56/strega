import React from "react";
import { BookingButton } from "../../components/Button";

const services = [
    { name: "Massage (zones au choix)", duration: "30 minutes", price: "30€" },
    { name: "Massage corps entier", duration: "45 minutes", price: "45€" },
    { name: "Massage corps entier", duration: "60 minutes", price: "60€" },
    { name: "Massage des extrémités", duration: "35 minutes", price: "35€" },
    { name: "Soin du visage éclat", duration: "30 minutes", price: "35€" },
    { name: "Diagnostic et conseil soin de la peau", duration: "20 minutes", price: "10€" },
];

export default function Massage() {
    return (
        <div className="w-full md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Soins
            </h1>

            {/* Pictures + text */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start md:pb-8 md:px-30 mb-10">
                {/* Pictures */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
                    <img
                        src="/assets/massage1.jpg"
                        alt="Massage relaxant"
                        className="w-7/10 rounded-[20px] md:w-64 md:h-85 md:object-cover mx-auto"
                        loading="lazy"
                    />
                    <img
                        src="/assets/massage2.jpg"
                        alt="Massage des extrémités"
                        className="rounded-[20px] md:w-64 md:h-85 object-cover hidden md:block"
                        loading="lazy"
                    />
                </div>

                {/* Text */}
                <article className="hidden md:grid md:gap-4 md:text-left text-lg font-medium my-auto">
                    <p>
                        Des soins{" "}
                        <span className="text-[#7D5E19]">relaxants</span>,
                        adaptés à vos besoins, avec des{" "}
                        <span className="text-[#7D5E19]">
                            produits 100% naturels
                        </span>
                        .
                    </p>
                    <p>
                        Je vous propose des massages{" "}
                        <span className="text-[#7D5E19]">sur mesure</span>, en
                        fonction de vos envies. C’est vous qui{" "}
                        <span className="text-[#7D5E19]">
                            choisissez les zones
                        </span>{" "}
                        à détendre pour le massage de 30 minutes, tandis que
                        pour ceux de 45 et 60 minutes, il s’agit de massages du{" "}
                        <span className="text-[#7D5E19]">corps entier</span>.
                        Vous pouvez également opter pour la{" "}
                        <span className="text-[#7D5E19]">
                            relaxation des mains, des pieds et du crâne
                        </span>{" "}
                        lors d’un moment détente de 35 minutes.
                    </p>
                    <p>
                        Vous pouvez également sublimer votre{" "}
                        <span className="text-[#7D5E19]">visage</span> avec le
                        soin éclat, qui comprend nettoyage, gommage, masque et
                        massage. Enfin, je peux vous{" "}
                        <span className="text-[#7D5E19]">conseiller</span> sur
                        les besoins de votre peau et vous aider à trouver la{" "}
                        <span className="text-[#7D5E19]">routine</span> la plus
                        adaptée à celle-ci.
                    </p>
                </article>
            </section>

            {/* List of services */}
            <section className="w-full bg-[rgba(245,236,229,0.5)] py-8 px-7 md:px-75 mb-10">
                <ul className="text-sm md:text-base">
                    {services.map((service, index) => (
                        <li key={index} className="grid grid-cols-6 gap-8 pb-4">
                            <div className="col-span-5 flex flex-col">
                                <div className="font-medium">{service.name}</div>
                                <div className="font-light">{service.duration}</div>
                            </div>
                            <div className="col-span-1 text-right font-medium">
                                {service.price}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <BookingButton />
        </div>
    );
}
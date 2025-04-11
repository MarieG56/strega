import React from "react";
import { BookingButton } from "../../components/Button";

const services = [
    { name: "Maquillage flash", duration: "15 minutes", price: "12€" },
    { name: "Maquillage léger", duration: "25 minutes", price: "22€" },
    { name: "Maquillage prononcé", duration: "35 minutes", price: "30€" },
    {
        name: "Maquillage mariage et essai",
        duration: "1 heure 15 minutes d'essai, 30 minutes le jour J",
        price: "80€",
    },
    { name: "Atelier maquillage", duration: "1 heure 30 minutes", price: "75€" },
];

export default function Makeup() {
    return (
        <div className="w-full md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Maquillage
            </h1>

            {/* Pictures + text */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start md:pb-8 md:px-30 mb-10">
                {/* Pictures */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
                    <img
                        src="/assets/makeup1.jpg"
                        alt="Maquillage flash pour une mise en beauté rapide"
                        className="w-7/10 rounded-[20px] md:w-64 md:h-85 md:object-cover mx-auto"
                        loading="lazy"
                    />
                    <img
                        src="/assets/makeup2.jpg"
                        alt="Maquillage complet pour des occasions spéciales"
                        className="rounded-[20px] md:w-64 md:h-85 object-cover hidden md:block"
                        loading="lazy"
                    />
                </div>

                {/* Text */}
                <article className="hidden md:grid md:gap-4 md:text-left text-lg font-medium my-auto">
                    <p>
                        <span className="text-[#7D5E19]">Passionnée</span> de
                        maquillage depuis toujours, je serai ravie de vous
                        embellir pour vos{" "}
                        <span className="text-[#7D5E19]">plus beaux moments</span>,
                        ou tout simplement vous apprendre à vous maquiller au{" "}
                        <span className="text-[#7D5E19]">quotidien</span>.
                    </p>
                    <p>
                        Que vous choisissiez un maquillage{" "}
                        <span className="text-[#7D5E19]">flash</span> pour une{" "}
                        <span className="text-[#7D5E19]">mise en beauté express</span>{" "}
                        avec quelques produits, un{" "}
                        <span className="text-[#7D5E19]">maquillage complet</span>{" "}
                        léger ou prononcé selon l’occasion, ou encore un maquillage
                        de rêve pour le{" "}
                        <span className="text-[#7D5E19]">jour J</span>, je suis là
                        pour vous accompagner à chaque occasion.
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
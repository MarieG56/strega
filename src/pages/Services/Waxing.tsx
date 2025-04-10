import React from "react";
import { BookingButton } from "../../components/Button";

const services = [
    { name: "Sourcils, lèvres ou menton", duration: "15 minutes", price: "10€" },
    { name: "Lèvres et menton", duration: "20 minutes", price: "15€" },
    { name: "Lèvres, menton et sourcils", duration: "30 minutes", price: "25€" },
    { name: "Aisselles", duration: "15 minutes", price: "12€" },
    { name: "Maillot simple", duration: "15 minutes", price: "15€" },
    { name: "Maillot échancré", duration: "20 minutes", price: "20€" },
    { name: "Maillot semi-intégral ou intégral", duration: "30 minutes", price: "25€" },
    { name: "Demi-jambes", duration: "20 minutes", price: "17€" },
    { name: "Demi-cuisses", duration: "15 minutes", price: "12€" },
    { name: "Cuisses", duration: "30 minutes", price: "21€" },
    { name: "Jambes entières", duration: "45 minutes", price: "27€" },
    { name: "Fesses", duration: "15 minutes", price: "12€" },
    { name: "Aisselles, maillot simple et demi-jambes", duration: "50 minutes", price: "34€" },
    { name: "Aisselles, maillot simple et jambes entières", duration: "1 heure 10 minutes", price: "44€" },
    { name: "Option maillot échancré", duration: "10 minutes", price: "+10€" },
    { name: "Option maillot semi-intégral/intégral", duration: "20 minutes", price: "+15€" },
    { name: "Epaules", duration: "15 minutes", price: "12€" },
    { name: "Dos", duration: "25 minutes", price: "21€" },
    { name: "Torse", duration: "20 minutes", price: "17€" },
    { name: "Ventre", duration: "15 minutes", price: "17€" },
    { name: "Torse et ventre", duration: "30 minutes", price: "29€" },
];

export default function Waxing() {
    return (
        <div className="container md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Epilation
            </h1>

            {/* Pictures + text */}
            <section className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/wax1.jpg"
                        alt="Cire traditionnelle"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-90 md:object-cover"
                        loading="lazy"
                    />
                    <img
                        src="/public/assets/wax2.jpg"
                        alt="Cire au sucre"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-90 md:object-cover"
                        loading="lazy"
                    />
                </div>
                <article className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
                    <p>
                        Je travaille avec{" "}
                        <span className="text-[#7D5E19]">
                            deux cires différentes
                        </span>{" "}
                        :
                    </p>
                    <p>
                        À droite, il s’agit de la cire{" "}
                        <span className="text-[#7D5E19]">traditionnelle</span>,
                        utilisée pour les zones sensibles. Elle est plus chaude
                        que les autres cires et permet donc de dilater les pores,
                        ce qui facilite l’arrachage du poil et rend l’
                        <span className="text-[#7D5E19]">
                            épilation plus douce et plus durable
                        </span>
                        .
                    </p>
                    <p>
                        La cire au <span className="text-[#7D5E19]">sucre</span>{" "}
                        pour les grandes zones, à gauche, est plus douce qu’une
                        cire à bande classique. Surtout, elle est 100%{" "}
                        <span className="text-[#7D5E19]">naturelle</span>, c’est
                        un véritable caramel.
                    </p>
                    <p>
                        Toutes les prestations d’épilation sont{" "}
                        <span className="text-[#7D5E19]">mixtes</span>, exceptés
                        les maillots échancré, semi-intégral et intégral, que je
                        ne réalise pas sur des hommes.
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
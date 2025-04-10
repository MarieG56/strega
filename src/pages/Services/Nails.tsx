import React from "react";
import { BookingButton } from "../../components/Button";

const services = [
    { name: "Limage", duration: "15 minutes", price: "9€" },
    { name: "Manucure", duration: "40 minutes", price: "25€" },
    { name: "Pose de vernis", duration: "20 minutes", price: "15€" },
    { name: "Manucure et pose de vernis", duration: "50 minutes", price: "32€" },
    { name: "Vernis semi-permanent", duration: "35 minutes", price: "25€" },
    { name: "Manucure et pose de vernis semi-permanent", duration: "1 heure 10 minutes", price: "45€" },
    { name: "Dépose seule", duration: "20 minutes", price: "15€" },
    { name: "Dépose et manucure", duration: "50 minutes", price: "34€" },
    { name: "Dépose, manucure et nouvelle pose", duration: "1 heure 20 minutes", price: "54€" },
];

export default function Nails() {
    return (
        <div className="container md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Ongles
            </h1>

            {/* Pictures + text */}
            <section className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/nails1.jpg"
                        alt="Limage et soin des ongles"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-85 md:object-cover"
                        loading="lazy"
                    />
                    <img
                        src="/public/assets/nails2.jpg"
                        alt="Pose de vernis et nail art"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-85 md:object-cover"
                        loading="lazy"
                    />
                </div>
                <article className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
                    <p>
                        Qu’il s’agisse simplement de donner une{" "}
                        <span className="text-[#7D5E19]">forme</span> à vos
                        ongles, ou bien de donner vie à votre imagination en
                        réalisant un{" "}
                        <span className="text-[#7D5E19]">
                            nail art audacieux
                        </span>
                        , vous êtes au bon endroit.
                    </p>
                    <p>
                        De la simple{" "}
                        <span className="text-[#7D5E19]">manucure</span> pour
                        embellir la main naturellement, en passant par la{" "}
                        <span className="text-[#7D5E19]">pose de vernis</span>{" "}
                        classique, jusqu’au{" "}
                        <span className="text-[#7D5E19]">
                            vernis semi-permanent
                        </span>
                        , sur les mains ou sur les pieds, voici autant d’options
                        que je vous propose pour vous faire plaisir.
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
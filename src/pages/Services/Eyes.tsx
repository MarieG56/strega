import React from "react";
import { BookingButton } from "../../components/Button";

const services = [
    { name: "Teinture sourcils", duration: "15 minutes", price: "12€" },
    { name: "Epilation et teinture sourcils", duration: "20 minutes", price: "19€" },
    { name: "Brow lift", duration: "40 minutes", price: "29€" },
    { name: "Brow lift et teinture", duration: "50 minutes", price: "35€" },
    { name: "Brow lift, teinture et épilation", duration: "1 heure", price: "45€" },
    { name: "Teinture cils", duration: "20 minutes", price: "15€" },
    { name: "Rehaussement de cils", duration: "50 minutes", price: "39€" },
    { name: "Rehaussement et teinture de cils", duration: "1 heure 10 minutes", price: "49€" },
];

export default function Eyes() {
    return (
        <div className="container md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Regard
            </h1>

            {/* Pictures + text */}
            <section className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/eyes1.jpg"
                        alt="Rehaussement de cils pour un regard intense"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-85 md:object-cover"
                        loading="lazy"
                    />
                    <img
                        src="/public/assets/eyes2.jpg"
                        alt="Brow lift pour des sourcils parfaits"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-85 md:object-cover"
                        loading="lazy"
                    />
                </div>
                <article className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
                    <p>
                        Un seul détail peut{" "}
                        <span className="text-[#7D5E19]">tout</span> changer.
                        C’est ce que je vous propose avec ces techniques
                        naturelles et non-invasives pour mettre en valeur le
                        regard.
                    </p>
                    <p>
                        Transformez vos{" "}
                        <span className="text-[#7D5E19]">sourcils</span> en les
                        épaississant visuellement avec un{" "}
                        <span className="text-[#7D5E19]">browlift</span> et/ou
                        en les intensifiant avec une{" "}
                        <span className="text-[#7D5E19]">teinture</span>.
                    </p>
                    <p>
                        Intensifiez vos{" "}
                        <span className="text-[#7D5E19]">cils</span> avec une
                        teinture et/ou allongez-les avec un{" "}
                        <span className="text-[#7D5E19]">rehaussement</span> de
                        cils.
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
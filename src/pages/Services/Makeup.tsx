import React from "react";
import { BookingButton } from "../../components/Button";

export default function Makeup() {
    return (
        <div className="container md:flex md:flex-col py-8">
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Maquillage
            </h1>
            <div className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/makeup1.jpg"
                        alt="Rehaussement de cils"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-85 md:object-cover"
                    />
                    <img
                        src="/public/assets/makeup2.jpg"
                        alt="Brow lift"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-85 md:object-cover"
                    />
                </div>
                <div className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
                    <p>
                        <span className="text-[#7D5E19]">Passionnée</span> de
                        maquillage depuis toujours, je serai ravie de vous
                        embellir pour vos{" "}
                        <span className="text-[#7D5E19]">
                            plus beaux moments
                        </span>
                        , ou tout simplement vous apprendre à vous maquiller au{" "}
                        <span className="text-[#7D5E19]">quotidien</span>.
                    </p>
                    <p>
                        Que vous choisissiez un maquillage{" "}
                        <span className="text-[#7D5E19]">flash</span> pour une{" "}
                        <span className="text-[#7D5E19]">
                            mise en beauté express
                        </span>{" "}
                        avec quelques produits, un{" "}
                        <span className="text-[#7D5E19]">
                            maquillage complet
                        </span>{" "}
                        léger ou prononcé selon l’occasion, ou encore un
                        maquillage de rêve pour le{" "}
                        <span className="text-[#7D5E19]">jour J</span>, je suis
                        là vous accompagner à chaque occasion.
                    </p>
                </div>
            </div>
            <div className="w-full bg-[rgba(245,236,229,0.5)] py-8 px-7 md:px-75 mb-10">
                <ul className="text-sm md:text-base">
                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Maquillage flash</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            12€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Maquillage léger</div>
                            <div className="font-light">25 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            22€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Maquillage prononcé
                            </div>
                            <div className="font-light">35 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            30€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Maquillage mariage et essai
                            </div>
                            <div className="font-light">
                                1 heure 15 minutes d'essai, 30 minutes le jour J
                            </div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            80€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Atelier maquillage
                            </div>
                            <div className="font-light">1 heure 30 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            75€
                        </div>
                    </li>
                </ul>
            </div>
            <BookingButton />
        </div>
    );
}

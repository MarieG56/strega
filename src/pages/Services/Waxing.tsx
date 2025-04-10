import React from "react";
import { BookingButton } from "../../components/Button";

export default function Waxing() {
    return (
        <div className="container md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Epilation
            </h1>

            {/* Pictures + text */}
            <div className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/wax1.jpg"
                        alt="Rehaussement de cils"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-90 md:object-cover"
                    />
                    <img
                        src="/public/assets/wax2.jpg"
                        alt="Brow lift"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-90 md:object-cover"
                    />
                </div>
                <div className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
                    <p>
                        Je travaille avec{" "}
                        <span className="text-[#7D5E19]">
                            deux cires différentes
                        </span>{" "}
                        :
                    </p>
                    <p>
                        A droite, il s’agit de la cire{" "}
                        <span className="text-[#7D5E19]">traditionnelle</span>,
                        utilisée pour les{" "}
                        <span className="text-[#7D5E19]"></span>zones sensibles.
                        Elle est plus chaude que les autres cires et permet donc
                        de dilater les pores, ce qui facilite l’arrachage du
                        poil et rend l’
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
                        un un véritable caramel.
                    </p>
                    <p>
                        Toutes les prestations d’épilation sont{" "}
                        <span className="text-[#7D5E19]">mixtes</span>, exceptés
                        les maillots échancré, semi-intégral et intégral, que je
                        ne réalise pas sur des hommes.
                    </p>
                </div>
            </div>
            {/* List of services */}
            <div className="w-full bg-[rgba(245,236,229,0.5)] py-8 px-7 md:px-75 mb-10">
                <ul className="text-sm md:text-base">
                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Sourcils, lèvres ou menton
                            </div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            10€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Lèvres et menton</div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            15€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Lèvres, menton et sourcils
                            </div>
                            <div className="font-light">30 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            25€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Aisselles</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            12€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Maillot simple</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            15€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Maillot échancré</div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            20€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Maillot semi-intégral ou intégral
                            </div>
                            <div className="font-light">30 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            25€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Demi-jambes</div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            17€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Demi-cuisses</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            12€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Cuisses</div>
                            <div className="font-light">30 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            21€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Jambes entières</div>
                            <div className="font-light">45 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            27€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Fesses</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            12€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Aisselles, maillot simple et demi-jambes
                            </div>
                            <div className="font-light">50 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            34€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Aisselles, maillot simple et jambes entières
                            </div>
                            <div className="font-light">1 heure 10 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            44€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4 italic">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Option maillot échancré
                            </div>
                            <div className="font-light">10 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            +10€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4 italic">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Option maillot semi-intégral/intégral
                            </div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            +15€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Epaules</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            12€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Dos</div>
                            <div className="font-light">25 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            21€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Torse</div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            17€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Ventre</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            17€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Torse et ventre</div>
                            <div className="font-light">30 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            29€
                        </div>
                    </li>
                </ul>
            </div>
            <BookingButton />
        </div>
    );
}

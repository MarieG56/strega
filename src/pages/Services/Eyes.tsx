import React from "react";
import { BookingButton } from "../../components/Button";

export default function Eyes() {
    return (
        <div className="container md:flex md:flex-col py-8">
            {/* Title */}
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Regard
            </h1>

            {/* Pictures + text */}
            <div className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/eyes1.jpg"
                        alt="Rehaussement de cils"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-85 md:object-cover"
                    />
                    <img
                        src="/public/assets/eyes2.jpg"
                        alt="Brow lift"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-85 md:object-cover"
                    />
                </div>
                <div className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
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
                </div>
            </div>

            {/* List of services */}
            <div className="w-full bg-[rgba(245,236,229,0.5)] py-8 px-7 md:px-75 mb-10">
                <ul className="text-sm md:text-base">
                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Teinture sourcils</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            12€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Epilation et teinture sourcils
                            </div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            19€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Brow lift</div>
                            <div className="font-light">40 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            29€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Brow lift et teinture
                            </div>
                            <div className="font-light">50 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            35€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-12">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Brow lift, teinture et épilation
                            </div>
                            <div className="font-light">1 heure</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            45€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Teinture cils</div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            15€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Rehaussement de cils
                            </div>
                            <div className="font-light">50 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            39€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Rehaussement et teinture de cils
                            </div>
                            <div className="font-light">1 heure 10 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            49€
                        </div>
                    </li>
                </ul>
            </div>
            <BookingButton />
        </div>
    );
}

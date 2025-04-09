import React from "react";
import { BookingButton } from "../../components/Button";

export default function Nails() {
    return (
        <div className="container md:flex md:flex-col py-8">
            <h1 className="text-2xl text-center font-medium mb-8 text-[#7D5E19] md:text-4xl md:py-8">
                Ongles
            </h1>
            <div className="flex mx-auto flex-col md:flex-row gap-15 items-center md:items-start md:pb-8 md:px-30">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-6 md:mb-0 md:w-2/5">
                    <img
                        src="/public/assets/nails1.jpg"
                        alt="Rehaussement de cils"
                        className="w-7/10 mb-4 rounded-[20px] md:w-64 md:h-85 md:object-cover"
                    />
                    <img
                        src="/public/assets/nails2.jpg"
                        alt="Brow lift"
                        className="rounded-[20px] hidden md:block md:w-64 md:h-85 md:object-cover"
                    />
                </div>
                <div className="md:text-left md:w-3/5 hidden md:flex md:flex-col md:gap-4 pl-15 my-auto text-xl font-medium">
                    <p>
                        Qu’il s’agisse simplement de donner une
                        <span className="text-[#7D5E19]">forme</span> à vos
                        ongles, ou bien de donner vie à votre imagination en
                        réalisant un <span className="text-[#7D5E19]">nail art audacieux</span>
                        , vous êtes au bon endroit.
                    </p>
                    <p>
                        De la simple <span className="text-[#7D5E19]">manucure</span> pour embellir la main
                        naturellement, en passant par la <span className="text-[#7D5E19]">pose de vernis</span> classique, jusqu’au <span className="text-[#7D5E19]">vernis semi-permanent</span>, sur les mains
                        ou sur les pieds, voici autant d’options que je vous
                        propose pour vous faire plaisir.
                    </p>
                </div>
            </div>
            <div className="w-full bg-[rgba(245,236,229,0.5)] py-8 px-7 md:px-75 mb-10">
                <ul className="text-sm md:text-base">
                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Limage</div>
                            <div className="font-light">15 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            9€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Manucure</div>
                            <div className="font-light">40 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            25€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Pose de vernis</div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            15€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Manucure et pose de vernis</div>
                            <div className="font-light">50 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            32€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Vernis semi-permanent</div>
                            <div className="font-light">35 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            25€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">Manucure et pose de vernis semi-permanent</div>
                            <div className="font-light">1 heure 10 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            45€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Dépose seule
                            </div>
                            <div className="font-light">20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            15€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8 pb-4">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Dépose et manucure
                            </div>
                            <div className="font-light">
                                50 minutes
                            </div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            34€
                        </div>
                    </li>

                    <li className="grid grid-cols-6 gap-8">
                        <div className="col-span-5 flex flex-col">
                            <div className="font-medium">
                                Dépose, manucure et nouvelle pose
                            </div>
                            <div className="font-light">1 heure 20 minutes</div>
                        </div>
                        <div className="col-span-1 text-right font-medium">
                            54€
                        </div>
                    </li>
                </ul>
            </div>
            <BookingButton />
        </div>
    );
}

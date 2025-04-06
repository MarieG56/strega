import React from "react";
import profile from '../assets/soazig.jpg';

export default function About() {
    return (
        <div className="md:max-h-screen md:mt-16 flex flex-col md:grid md:grid-cols-8 md:gap-6 items-center justify-center overflow-hidden px-5 md:px-0">
            {/* Empty space on the left */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Picture */}
            <div className="flex justify-center mt-12 mb-9 md:mt-0 md:mb-0 md:justify-start md:col-span-2 md:self-center">
                <img
                    src={profile}
                    alt="Profile picture"
                    className="h-[50vh] md:h-[60vh] max-w-[300px] rounded-[20px]"
                />
            </div>

            {/* Text */}
            <div className="text-base text-center md:text-left font-medium px-5 md:px-10 md:col-span-4 md:text-lg leading-relaxed md:self-center">
                <p>
                    <span className="text-[#7D5E19] font-bold">Strega</span>, c’est un cocon où chacun·e peut se sentir <span className="text-[#7D5E19]">libre</span> : libre de faire ses propres choix, libre de s’épiler ou non, libre de discuter en toute sérénité et en toute simplicité.
                </p>
                <p className="mt-4">
                    C’est également l’envie de <span className="text-[#7D5E19]">lutter contre les injonctions sexistes</span> et aider chacun·e à se libérer du regard des autres et des codes de beauté qui nous sont imposés.
                </p>
                <p className="mt-4">
                    Enfin, Strega, c’est surtout l’envie de créer un <span className="text-[#7D5E19]">lieu bienveillant</span>, à l'accueil chaleureux, <span className="text-[#7D5E19]">à l’écoute</span> de chacun·e et où je serai toujours aux petits soins avec vous.
                </p>
            </div>

            {/* Empty space on the right */}
            <div className="hidden md:block md:col-span-1"></div>
        </div>
    );
}

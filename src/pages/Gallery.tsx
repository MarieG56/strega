import React from "react";

export default function Gallery() {
    return (
        <section className="items-center gap-8 py-8 md:pt-10 md:pb-4 flex flex-col md:gap-15">
            {/* Première rangée d’images */}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:auto-rows-[180px] md:gap-15">
                <img
                    src="/assets/nails3.jpg"
                    alt="Nails"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-50 md:col-span-1 md:row-span-1"
                />
                <img
                    src="/assets/beautysalon1.jpg"
                    alt="img2"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-110 md:col-span-1 md:row-span-2"
                />
                <img
                    src="/assets/massage1.jpg"
                    alt="img3"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-110 md:col-span-1 md:row-span-2"
                />
                <img
                    src="/assets/eyes2.jpg"
                    alt="img4"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-50 md:col-span-1 md:row-span-1"
                />
            </div>

            {/* Deuxième rangée d’images */}
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:auto-rows-[180px] md:gap-15">
                <img
                    src="/assets/beautysalon2.jpg"
                    alt="img8"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-110 md:col-span-1 md:row-span-2"
                />

                <img
                    src="/assets/nails5.jpg"
                    alt="img6"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-50 md:col-span-1 md:row-span-1"
                />
                <img
                    src="/assets/eyes3.jpg"
                    alt="img7"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-50 md:col-span-1 md:row-span-1"
                />
                <img
                    src="/assets/makeup3.jpg"
                    alt="img5"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-50 md:col-span-1 md:row-span-1"
                />
                <img
                    src="/assets/wax3.jpg"
                    alt="img9"
                    className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-80 h-50 md:col-span-1 md:row-span-1"
                />
            </div>
        </section>
    );
}

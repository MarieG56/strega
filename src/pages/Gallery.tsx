import React from "react";

const images = [
    { src: "/assets/nails3.jpg", alt: "Pose de vernis", style: { gridColumn: "span 1", gridRow: "span 1" } },
    { src: "/assets/beautysalon1.jpg", alt: "Intérieur de l'institut de beauté", style: { gridColumn: "span 1", gridRow: "span 2" } },
    { src: "/assets/massage1.jpg", alt: "Soin du visage", style: { gridColumn: "span 1", gridRow: "span 2" } },
    { src: "/assets/eyes2.jpg", alt: "Brow lift", style: { gridColumn: "span 1", gridRow: "span 1" } },
    { src: "/assets/beautysalon2.jpg", alt: "Autre vue de l'institut, coin cosy", style: { gridColumn: "span 1", gridRow: "span 2" } },
    { src: "/assets/nails5.jpg", alt: "Manucure", style: { gridColumn: "span 1", gridRow: "span 1" } },
    { src: "/assets/eyes3.jpg", alt: "Rehaussement de cils", style: { gridColumn: "span 1", gridRow: "span 1" } },
    { src: "/assets/makeup3.jpg", alt: "Maquillage léger", style: { gridColumn: "span 1", gridRow: "span 1" } },
    { src: "/assets/wax3.jpg", alt: "Cire au sucre pour une épilation plus douce", style: { gridColumn: "span 1", gridRow: "span 1" } },
];

export default function Gallery() {
    return (
        <section className="items-center gap-8 py-8 md:pt-10 md:pb-4 flex flex-col md:gap-15">
            {/* Image Grid */}
            <div className="grid px-6 gap-8 md:grid-cols-3 md:auto-rows-[180px] md:gap-15">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        style={image.style}
                        className="border border-[rgba(125,94,25,0.5)] rounded-[20px] object-cover w-full h-full"
                    />
                ))}
            </div>
        </section>
    );
}
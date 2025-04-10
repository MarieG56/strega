import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { BookingButton } from "../components/Button";
import WaxingIcon from "/public/assets/icon/waxing.png";
import EyesIcon from "/public/assets/icon/eyes.png";
import NailsIcon from "/public/assets/icon/nails.png";
import MakeupIcon from "/public/assets/icon/makeup.png";
import MassageIcon from "/public/assets/icon/massage.png";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import MapComponent from "../components/Map";

export default function Home() {
    const services = [
        {
            icon: (
                <img src={WaxingIcon} alt="Epilation" className="h-12 w-12" />
            ),
            label: "Epilation",
        },
        {
            icon: <img src={EyesIcon} alt="Regard" className="h-12 w-12" />,
            label: "Regard",
        },
        {
            icon: <img src={NailsIcon} alt="Ongles" className="h-12 w-12" />,
            label: "Ongles",
        },
        {
            icon: (
                <img src={MakeupIcon} alt="Maquillage" className="h-12 w-12" />
            ),
            label: "Maquillage",
        },
        {
            icon: <img src={MassageIcon} alt="Soins" className="h-12 w-12" />,
            label: "Soins",
        },
    ];

    return (
        <div className="pt-4 md:px-4 md:py-8 mt-5">
            {/* Carousel */}
            <div className="px-8">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                    className="rounded-[20px] custom-swiper"
                >
                    <SwiperSlide>
                        <img
                            src="/assets/beautysalon1.jpg"
                            className="w-130 md:max-h-[350px] h-[250px] object-cover mx-auto rounded-[20px]"
                            alt="Slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/eyes3.jpg"
                            className="w-130 md:max-h-[350px] h-[250px] object-cover mx-auto rounded-[20px]"
                            alt="Slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/assets/nails3.jpg"
                            className="w-130 md:max-h-[350px] h-[250px] object-cover mx-auto rounded-[20px]"
                            alt="Slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Text with background image */}
            <div className="mt-8 text-center poiret flex flex-col justify-center items-center">
                <div
                    className="relative p-8 inline-block md:hidden rounded-[20px] bg-cover bg-center mb-8"
                    style={{
                        backgroundImage: "url(/assets/paintbrush_mobile.svg)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        maxWidth: "400px",
                        width: "100%",
                    }}
                >
                    <p className="text-lg text-black">
                        Un lieu unique et chaleureux pour prendre soin de soi
                        avec douceur et bienveillance
                    </p>
                </div>
                <div
                    className="hidden md:flex justify-center text-center rounded-[20px] my-10"
                    style={{
                        backgroundImage: "url(/assets/paintbrush_desktop.svg)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        maxWidth: "1200px",
                        width: "100%",
                    }}
                >
                    <p className="text-3xl max-w-[800px] text-black py-8">
                        Un lieu unique et chaleureux pour prendre soin de soi
                        avec douceur et bienveillance
                    </p>
                </div>
            </div>

            <BookingButton />

            {/* Services list */}
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-20 mt-12 mb-8 md:mb-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row gap-2 items-center"
                    >
                        <div className="text-4xl font-light text-[#7D5E19]">
                            {service.icon}
                        </div>
                        <p className="text-lg font-light text-[#7D5E19]">
                            {service.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Information */}
            <div className="md:px-20 flex flex-col md:flex-row md:justify-around md:items-stretch md:gap-8 md:pt-4">
                {/* Contact Information */}
                <div className="beige p-8 md:rounded-[20px] flex flex-col items-center justify-center md:w-1/3 order-1 md:min-h-[400px]">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                        Me contacter
                    </h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-xl text-[#7D5E19]" />
                            <p>
                                6 Allée des Hortensias, <br />
                                35310 Mordelles
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-xl text-[#7D5E19]" />
                            <p>+33 6 65 32 12 77</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-xl text-[#7D5E19]" />
                            <p>stregabysoa@gmail.com</p>
                        </div>
                        <Link
                            to="https://www.instagram.com/stregabysoa/"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <FaInstagram className="text-xl  text-[#7D5E19]" />
                            <p>Instagram</p>
                        </Link>
                        <Link
                            to="https://www.facebook.com/profile.php?id=61563326601604"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <FaFacebook className="text-xl  text-[#7D5E19]" />
                            <p>Facebook</p>
                        </Link>
                    </div>
                </div>

                {/* Opening hours */}
                <div className="bg-white flex flex-col items-center justify-center gap-4 pb-2 pt-10 md:py-24 text-center md:bg-[#f5ece5] md:p-8 md:rounded-[20px] md:w-1/3 order-2 md:order-3 md:min-h-[400px]">
                    <h3 className="text-xl font-semibold">
                        Horaires d'ouverture
                    </h3>
                    <p>Du lundi au samedi, 10h-20h</p>
                </div>

                {/* Map Component */}
                <div className="mt-8 md:my-0 md:w-1/3 order-3 md:order-2 md:min-h-[400px]">
                    <div className="h-full md:rounded-[20px] overflow-hidden">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

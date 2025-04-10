import { Button } from "@material-tailwind/react";
import React from "react";

export function BookingButton() {
    return (
        <Button
            className="cursor-pointer p-3 beige rounded-[20px] text-[#7D5E19] text-base w-50 shadow-none font-semibold block mx-auto md:text-lg md:w-70"
            onClick={() => window.open("https://reservationbeaute.fr/institut-strega-35310", "_blank")} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
            Prendre rendez-vous
        </Button>
    );
}
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import React from "react";

export function ContactForm() {
    return (
        <>
            <Card
                className="flex flex-col items-center mt-6 md:mt-10"
                color="transparent"
                shadow={false}
            >
                <Typography
                    variant="h4"
                    color="blue-gray"
                    className="text-2xl md:text-4xl font-semibold text-[#7D5E19]"
                >
                    Ecrivez-moi
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 md:w-120">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-4 text-black text-sm font-normal"
                        >
                            Nom et prénom
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Nom et prénom"
                            className="border border-[#7D5E19] rounded-[20px] p-3 md:w-120"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-4 text-black text-sm font-normal"
                        >
                            Email
                        </Typography>
                        <Input
                            type="email"
                            size="lg"
                            placeholder="exemple@mail.com"
                            className="border border-[#7D5E19] rounded-[20px] p-3 md:w-120"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-4 text-black text-sm font-normal"
                        >
                            Numéro de téléphone
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="06 00 00 00 00"
                            className="border border-[#7D5E19] rounded-[20px] p-3 md:w-120"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-4 text-black text-sm font-normal"
                        >
                            Votre message
                        </Typography>
                        <Input
                            type="text"
                            size="lg"
                            placeholder="Message"
                            className="border border-[#7D5E19] rounded-[20px] pb-30 pt-3 pl-3 mb-6 md:w-120"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <Button
                        className="mt-6 p-3 beige rounded-[20px] text-[#7D5E19] text-lg w-50 m-auto"
                        fullWidth
                    >
                        Envoyer
                    </Button>
                </form>
            </Card>
            <div className="mt-6 flex flex-col gap-4 text-center px-7 text-base md:text-xl md:px-50">
                <p>
                    Vous pouvez également m’envoyer un message ou m’appeler au{" "}
                    <span className="font-semibold">06 65 32 12 77</span>, ou
                    encore m’écrire un mail à{" "}
                    <span className="font-semibold">stregabysoa@gmail.com</span>
                    .
                </p>
                <p>
                    Enfin, n’hésitez pas à me suivre sur mes réseaux sociaux (
                    <span className="font-semibold">Instagram, Facebook</span>)
                    pour connaître l’actualité du salon.
                </p>
            </div>
        </>
    );
}

import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis."),
    email: Yup.string().email("Veuillez entrer une adresse email valide."),
    phoneNumber: Yup.string()
        .test(
            "is-valid-phone",
            "Veuillez entrer un numéro de téléphone valide.",
            (value) => {
                if (!value) return false;
                const cleanedValue = value.replace(/\s+/g, "");
                const regex = /^(\+33|0)[1-9]\d{8}$/;
                return regex.test(cleanedValue);
            }
        )
        .required("Le numéro de téléphone est requis."),
    message: Yup.string().required("Le message est requis."),
});

export function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            emailjs
                .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    values,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log("Message envoyé !", result.text);
                        alert("Votre message a été envoyé avec succès.");
                        resetForm(); 
                    },
                    (error) => {
                        console.error("Erreur :", error.text);
                        alert("Une erreur est survenue. Veuillez réessayer.");
                    }
                );
        },
    });

    return (
        <Card
            className="flex flex-col items-center mt-8 md:mt-10"
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
            <form
                onSubmit={formik.handleSubmit}
                className="mt-8 w-80 max-w-screen-lg sm:w-96 md:w-120"
            >
                <div className="mb-1 flex flex-col gap-6">
                    {/* Name */}
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-4 text-black text-sm font-normal"
                    >
                        Nom et prénom
                    </Typography>
                    <Input
                        name="name"
                        size="lg"
                        placeholder="Nom et prénom"
                        className="border border-[#7D5E19] rounded-[20px] p-3 md:w-120"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm">
                            {formik.errors.name}
                        </p>
                    )}

                    {/* Email */}
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-4 text-black text-sm font-normal"
                    >
                        Email
                    </Typography>
                    <Input
                        name="email"
                        type="email"
                        size="lg"
                        placeholder="exemple@mail.com"
                        className="border border-[#7D5E19] rounded-[20px] p-3 md:w-120"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">
                            {formik.errors.email}
                        </p>
                    )}

                    {/* Phone Number */}
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-4 text-black text-sm font-normal"
                    >
                        Numéro de téléphone
                    </Typography>
                    <Input
                        name="phoneNumber"
                        size="lg"
                        placeholder="06 00 00 00 00"
                        className="border border-[#7D5E19] rounded-[20px] p-3 md:w-120"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.phoneNumber &&
                            Boolean(formik.errors.phoneNumber)
                        }
                    />
                    {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                            <p className="text-red-500 text-sm">
                                {formik.errors.phoneNumber}
                            </p>
                        )}

                    {/* Message */}
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-4 text-black text-sm font-normal"
                    >
                        Votre message
                    </Typography>
                    <Input
                        name="message"
                        type="text"
                        size="lg"
                        placeholder="Message"
                        className="border border-[#7D5E19] rounded-[20px] pb-30 pt-3 pl-3 mb-6 md:w-120"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        labelProps={{
                            className: "hidden",
                        }}
                        error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                        }
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-sm">
                            {formik.errors.message}
                        </p>
                    )}
                </div>

                {/* Button */}
                <Button
                    type="submit"
                    className="mt-6 p-3 beige rounded-[20px] text-[#7D5E19] text-lg w-full cursor-pointer shadow-none hover:bg-[#f0e4c6]"
                >
                    Envoyer
                </Button>
            </form>
        </Card>
    );
}

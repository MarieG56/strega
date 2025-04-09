import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <ContactForm />
            <div className="py-8 flex flex-col gap-4 text-center px-7 text-base md:text-xl md:px-50">
                <p>
                    Vous pouvez également m’envoyer un message ou m’appeler au{" "}
                    <span className="font-semibold">06 65 32 12 77</span>, ou
                    encore m’écrire un mail à{" "}
                    <span className="font-semibold">stregabysoa@gmail.com</span>
                    .
                </p>
                <p>
                    Enfin, n’hésitez pas à me suivre sur mes réseaux sociaux (
                    <span className="font-semibold">
                        <Link
                            to="https://www.instagram.com/stregabysoa/"
                            target="_blank"
                        >
                            Instagram
                        </Link>
                        ,{" "}
                        <Link
                            to="https://www.facebook.com/profile.php?id=61563326601604"
                            target="_blank"
                        >
                            Facebook
                        </Link>
                    </span>
                    ) pour connaître l’actualité du salon.
                </p>
            </div>
        </>
    );
}

import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Link } from "react-router-dom";

export default function Contact() {
    const phoneNumber = "06 65 32 12 77";
    const email = "stregabysoa@gmail.com";
    const socialLinks = [
        {
            href: "https://www.instagram.com/stregabysoa/",
            label: "Instagram",
            ariaLabel: "Voir le profil Instagram de Strega",
        },
        {
            href: "https://www.facebook.com/profile.php?id=61563326601604",
            label: "Facebook",
            ariaLabel: "Voir le profil Facebook de Strega",
        },
    ];

    return (
        <>
            <ContactForm />
            <div className="pb-8 pt-12 flex flex-col gap-4 text-center px-7 text-base md:text-xl md:px-50">
                <p>
                    Vous pouvez également m’envoyer un message ou m’appeler au{" "}
                    <span className="font-semibold">{phoneNumber}</span>, ou
                    encore m’écrire un mail à{" "}
                    <span className="font-semibold">{email}</span>.
                </p>
                <p>
                    Enfin, n’hésitez pas à me suivre sur mes réseaux sociaux (
                    <span className="font-semibold">
                        {socialLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    to={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.ariaLabel}
                                >
                                    {link.label}
                                </Link>
                                {index < socialLinks.length - 1 && ", "}
                            </React.Fragment>
                        ))}
                    </span>
                    ) pour connaître l’actualité du salon.
                </p>
            </div>
        </>
    );
}
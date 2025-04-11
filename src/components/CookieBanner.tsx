import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (consent: string) => {
        localStorage.setItem("cookieConsent", consent);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#f5ece5] text-sm p-4 shadow-md flex flex-col md:flex-row justify-between items-center gap-4 z-50">
            <p className="text-center md:text-left">
                Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser leur
                utilisation. Vous pouvez également consulter notre <a href="/privacy-policy" className="text-[#7D5E19] hover:underline">politique de confidentialité</a>.
            </p>
            <div className="flex gap-2">
                <button
                    onClick={() => handleConsent("accepted")}
                    className="bg-[#7D5E19] text-white px-4 py-1 rounded-md hover:opacity-90 transition"
                >
                    Accepter
                </button>
                <button
                    onClick={() => handleConsent("refused")}
                    className="bg-gray-300 text-[#7D5E19] px-4 py-1 rounded-md hover:opacity-80 transition"
                >
                    Refuser
                </button>
            </div>
        </div>
    );
}

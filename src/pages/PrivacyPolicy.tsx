export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Politique de confidentialité</h1>

            <section className="mb-6">
                <h2 className="text-xl font-medium mb-2">Protection des données personnelles</h2>
                <p className="mb-2">
                    Le site <strong>Strega</strong> recueille uniquement les données strictement nécessaires à la prise
                    de rendez-vous et à la gestion des demandes des utilisateurs (nom, prénom, numéro de téléphone,
                    adresse e-mail).
                </p>
                <p className="mb-2">
                    Ces données sont conservées pendant une durée maximale de 3 ans et ne sont ni cédées ni vendues à des tiers.
                </p>
                <p className="mb-2">
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit
                    d’accès, de rectification, de suppression ou d’opposition au traitement de vos données personnelles.
                </p>
                <p>
                    Pour exercer vos droits, vous pouvez contacter :{" "}
                    <a href="mailto:stregabysoa@gmail.com" className="text-[#7D5E19] underline">
                        stregabysoa@gmail.com
                    </a>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-medium mb-2">Utilisation des cookies</h2>
                <p className="mb-2">
                    Ce site utilise des cookies afin d’améliorer votre expérience de navigation et de réaliser des statistiques anonymes.
                </p>
                <p className="mb-2">
                    Lors de votre première visite, un bandeau vous informe de l’utilisation de cookies et vous propose d’accepter ou de refuser leur usage.
                </p>
                <p>
                    Vous pouvez également configurer vos préférences ou désactiver les cookies à tout moment via les paramètres de votre navigateur.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-medium mb-2">Responsable du traitement</h2>
                <p>
                    Le responsable du traitement des données est Soazig Gicquel, gérante de Strega. Pour toute question relative
                    à la protection des données, merci de contacter{" "}
                    <a href="mailto:stregabysoa@gmail.com" className="text-[#7D5E19] underline">
                        stregabysoa@gmail.com
                    </a>.
                </p>
            </section>
        </div>
    );
}

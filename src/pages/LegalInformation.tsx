export default function LegalInformation() {
    return (
        <div className="px-6 py-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-8 text-center text-[#7D5E19]">
                Mentions légales
            </h1>
            <ul className="space-y-4 text-base">
                <li>
                    <strong>Nom de l'entreprise :</strong> Strega
                </li>
                <li>
                    <strong>Adresse du siège social :</strong> 6 allée des
                    hortensias, 35310 Mordelles
                </li>
                <li>
                    <strong>Numéro de téléphone :</strong> 06 65 32 12 77
                </li>
                <li>
                    <strong>Adresse e-mail :</strong> stregabysoa@gmail.com
                </li>
                <li>
                    <strong>Forme juridique de l'entreprise :</strong>{" "}
                    Micro-entreprise
                </li>
                <li>
                    <strong>Numéro SIRET :</strong> 942 272 675 00011
                </li>
                <li>
                    <strong>Numéro de TVA intracommunautaire :</strong> Non
                    applicable pour le moment
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-[#7D5E19]">
                Hébergeur du site
            </h2>
            <ul className="space-y-4 text-base">
                <li>
                    <strong>Nom de l’hébergeur :</strong> SAS OVH
                </li>
                <li>
                    <strong>Adresse de l’hébergeur :</strong> 2 rue Kellermann,
                    59100 Roubaix, France
                </li>
                <li>
                    <strong>Numéro de téléphone :</strong> 08 203 203 63 (0.118
                    €/mn)
                </li>
            </ul>

            <section className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-[#7D5E19] mb-4">
                    Informations relatives à l’activité
                </h3>
                <p>
                    L'activité exercée par <strong>Strega</strong> relève du
                    domaine des soins esthétiques à but non thérapeutique
                    (épilation, soins du visage, rehaussement de cils, teinture,
                    etc.). Elle est encadrée par la réglementation applicable
                    aux métiers de l’esthétique.
                </p>
                <p className="mt-3">
                    La fondatrice est titulaire d’un{" "}
                    <strong>
                        Baccalauréat Professionnel
                        Esthétique-Cosmétique-Parfumerie
                    </strong>
                    , diplôme reconnu par l’État et permettant l’exercice de
                    cette activité. Aucune pratique médicale ou paramédicale
                    (maquillage permanent, laser, etc.) n’est proposée.
                </p>
                <p className="mt-3">
                    Aucune certification ni label spécifique n’a été obtenu à ce
                    jour.
                </p>
            </section>

            <h2 className="mt-12 mb-4 text-2xl font-semibold text-[#7D5E19]">Tarification</h2>
            <p>
                Tous les prix indiqués sur ce site sont exprimés en{" "}
                <strong>euros (€)</strong> et sont{" "}
                <strong>TTC (Toutes Taxes Comprises)</strong>. Ces tarifs
                incluent le service mentionné et sont susceptibles de
                modification.
            </p>
        </div>
    );
}

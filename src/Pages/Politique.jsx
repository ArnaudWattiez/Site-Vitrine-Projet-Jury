// Importation de React
import React from 'react';
// Composant fonctionnel Politique
export const Politique = () => {
  // Ajout d'une date de mise à jour fictive ou utilisez une variable réelle
  const dateMiseAJour = new Date().toLocaleDateString();
  // Rendu du composant
  return (
    <main className="min-h-screen flex justify-center items-center text-center">
      {/* Contenu de la page avec la politique de confidentialité */}
      <div className="w-[32rem] py-16">
        <h1 className="text-lg font-medium">Politique de confidentialité</h1>
        <br />
        <br />
        {/* Informations sur la collecte de données */}
        <p>
          Notre site Web dédié à la vitrine de fondants et décorations ne collecte aucune information personnelle ni n'utilise de cookies pour suivre ou enregistrer les utilisateurs. Nous respectons votre vie privée et ne recueillons aucune donnée personnelle automatiquement lors de votre visite sur notre site.
        </p>
        <br />
        {/* Traitement des informations fournies volontairement */}
        <p>
          Nous ne stockons aucune information personnelle que vous pourriez fournir volontairement par le biais de formulaires de contact ou de communications par e-mail. Toute donnée partagée dans de telles circonstances est traitée de manière confidentielle et n'est utilisée que dans le cadre de votre demande spécifique.
        </p>
        <br />
        {/* Engagement de confidentialité */}
        <p>
          Notre politique est de ne pas partager, vendre ou louer vos informations personnelles à des tiers. Toute communication avec notre entreprise reste confidentielle et est utilisée uniquement dans le but de répondre à vos demandes ou questions.
        </p>
        <br />
        {/* Absence d'utilisation de cookies */}
        <p>
          Nous n'utilisons pas de cookies pour suivre votre comportement en ligne ou collecter des informations sur vous ou votre activité sur notre site Web.
        </p>
        <br />
        {/* Engagement envers la vie privée */}
        <p>
          Nous nous engageons à respecter votre vie privée et à garantir que votre visite sur notre site reste confidentielle et sans enregistrement d'informations personnelles non consenties.
        </p>
        <br />
        {/* Contact pour des questions spécifiques */}
        <p>
          Pour toute question concernant notre approche de confidentialité ou pour des demandes spécifiques, veuillez nous contacter à virginieczarnynoga@gmail.com.
        </p>
        <br />
        {/* Avis de mise à jour de la politique */}
        <p>
          Cette Politique de confidentialité est sujette à des mises à jour. Veuillez consulter cette page périodiquement pour rester informé des changements éventuels.
        </p>
        <br />
        {/* Affichage de la date de la dernière mise à jour */}
        <p className="text-sm text-gray-500">Dernière mise à jour : {dateMiseAJour}</p>
      </div>
    </main>
  );
};
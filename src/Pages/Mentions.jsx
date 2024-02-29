// Importation de React
import React from 'react';
// Composant fonctionnel Mentions
export const Mentions = () => {
  // Obtention de la date actuelle pour afficher la dernière mise à jour
  const dateMiseAJour = new Date().toLocaleDateString();

  // Rendu du composant
  return (
    <main className="min-h-screen flex justify-center items-center text-center">
      {/* Contenu de la page avec informations légales */}
      <div className="w-[32rem] py-16">
        <h1 className="text-lg font-medium">Mentions légales</h1>
        <br />
        <br />
        {/* Informations sur l'entité */}
        <p>
          <strong>Raison sociale :</strong> Les Créas de Lilou & fondants Event
          <br />
          <br />
          <strong>Adresse :</strong> 143 rue du 10 mars
          <br />
          <br />
          <strong>Téléphone :</strong> 06.65.32.23.70
          <br />
          <br />
          <strong>E-mail :</strong> virginieczarnynoga@gmail.com
          <br />
          <br />
          <strong>Immatriculation ou Registre du Commerce et des Sociétés :</strong> 90316158600016
        </p>
        <br />
        {/* Section sur la propriété intellectuelle */}
        <h3>Propriété intellectuelle</h3><br />
        <p>
          Tous les contenus présents sur ce site, tels que les textes, les images et les vidéos, sont la propriété de Les Créas de Lilou & fondants Event et sont protégés par les lois sur le droit d'auteur.
        </p>
        <br />
        {/* Section sur les commandes par e-mail */}
        <h3>Commandes par e-mail</h3><br />
        <p>
          Les commandes passées par e-mail sont soumises aux présentes conditions générales. Veuillez nous contacter via l'adresse e-mail indiquée ci-dessus pour toute commande.
        </p>
        <br />
        {/* Section sur l'absence de collecte de données */}
        <h3>Absence de collecte de données</h3><br />
        <p>
          Nous ne collectons pas de données personnelles via ce site web. Toute information fournie par e-mail pour passer une commande est utilisée uniquement à des fins de traitement de commande et n'est pas conservée à d'autres fins.
        </p>
        <br />
        {/* Section sur les liens externes */}
        <h3>Liens externes</h3><br />
        <p>
          Ce site peut contenir des liens vers d'autres sites externes. Nous déclinons toute responsabilité quant au contenu de ces sites.
        </p>
        <br />
        {/* Affichage de la date de la dernière mise à jour */}
        <p className="text-sm text-gray-500">Dernière mise à jour : {dateMiseAJour}</p>
      </div>
    </main>
  );
};
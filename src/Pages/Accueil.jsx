// Importation de React et du composant Link de react-router-dom
import React from 'react';
// Importation du composant Produitphare depuis '../Components/Produitphare'
import Produitphare from '../Components/Produitphare';

// Composant fonctionnel Accueil
export const Accueil = () => {
  return (
    // Conteneur principal avec une mise en page en colonne flexible et une hauteur minimale de l'écran
    <main className="flex min-h-screen ">
      {/* En-tête avec un message de bienvenue */}     
      {/* Section pour afficher le produit phare */}
        <Produitphare />
    </main>
  );
};